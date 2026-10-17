// نظام توليد المؤثرات الصوتية التلقائي عبر Web Audio API — نسخة احترافية
class SoundManager {
    constructor() {
        this.ctx = null;
        this.master = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AC();

            // ماستر جين + كمبرسر خفيف لمنع التشويش وتوحيد الأصوات
            this.master = this.ctx.createGain();
            this.master.gain.value = 0.9;

            const comp = this.ctx.createDynamicsCompressor();
            comp.threshold.value = -18;
            comp.knee.value = 12;
            comp.ratio.value = 6;

            this.master.connect(comp);
            comp.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    setEnabled(value) {
        this.enabled = value;
        if (this.master) this.master.gain.value = value ? 0.9 : 0;
    }

    // بافر ضوضاء أبيض (لأصوات الـ Whoosh / الكليك الميكانيكي)
    noiseBuffer(duration = 1) {
        const len = Math.floor(this.ctx.sampleRate * duration);
        const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        return buf;
    }

    // نغمة عامة بغلاف ADSR ناعم + فلتر تمرير منخفض (ده اللي بيشيل الإحساس الـ 8-bit)
    tone({ freq = 440, type = 'sine', t = 0, attack = 0.008, decay = 0.2,
           peak = 0.12, filterFreq = 4000, detune = 0, slideTo = null, slideTime = 0.1 }) {
        this.init();
        const now = this.ctx.currentTime + t;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.value = detune;
        if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, now + slideTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(filterFreq, now);
        filter.Q.value = 0.7;

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(peak, now + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.master);

        osc.start(now);
        osc.stop(now + attack + decay + 0.05);
    }

    // نبضة ضوضاء مفلترة (للمحاكاة الواقعية: كبسات مفاتيح، Whoosh، Tick)
    noise({ t = 0, attack = 0.003, decay = 0.1, peak = 0.1,
            filterType = 'bandpass', freq = 1000, q = 1, sweepTo = null, sweepTime = 0.15 }) {
        this.init();
        const now = this.ctx.currentTime + t;
        const src = this.ctx.createBufferSource();
        src.buffer = this.noiseBuffer(decay + 0.1);

        const filter = this.ctx.createBiquadFilter();
        filter.type = filterType;
        filter.frequency.setValueAtTime(freq, now);
        filter.Q.value = q;
        if (sweepTo) filter.frequency.exponentialRampToValueAtTime(sweepTo, now + sweepTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(peak, now + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.master);

        src.start(now);
        src.stop(now + attack + decay + 0.05);
    }

    // صوت خفيف أثناء كتابة الحروف — كبسة مفتاح ميكانيكية ناعمة (سكيب لو مش محتاجه)
    playTypewriter() {
        this.noise({
            freq: 2500 + Math.random() * 800, q: 2,
            peak: 0.025, attack: 0.002, decay: 0.03
        });
        this.tone({
            freq: 1400 + Math.random() * 400, type: 'sine',
            peak: 0.015, attack: 0.002, decay: 0.025, filterFreq: 6000
        });
    }

    // الإجابة الصحيحة — جرس تأكيد هادئ ( quinte رافعة + لمعة هارمونية خفيفة )
    playCorrect() {
        // النوتة الأساسية: D5 ثم A5 — تأكيد أنيق مش أرابيجو ألعاب
        this.tone({ freq: 587.33, type: 'sine', t: 0,        peak: 0.14, attack: 0.005, decay: 0.55, filterFreq: 2500 });
        this.tone({ freq: 880.00, type: 'sine', t: 0.09,     peak: 0.12, attack: 0.005, decay: 0.6,  filterFreq: 2500 });
        // هارمونيك خافت جداً للإحساس بالـ "معدن" الجرس
        this.tone({ freq: 1174.66, type: 'sine', t: 0.09,    peak: 0.03, attack: 0.01,  decay: 0.5,  filterFreq: 4000 });
        this.tone({ freq: 1760.00, type: 'sine', t: 0.09,    peak: 0.012, attack: 0.01, decay: 0.4,  filterFreq: 5000 });
    }

    // الإجابة الخاطئة — Thud خافت عميق (خطأ رصين مش صوت Game Over)
    playWrong() {
        this.tone({ freq: 120, type: 'sine', slideTo: 55, slideTime: 0.18,
                    peak: 0.2, attack: 0.005, decay: 0.3, filterFreq: 300 });
        this.tone({ freq: 180, type: 'triangle', slideTo: 70, slideTime: 0.15,
                    peak: 0.08, attack: 0.005, decay: 0.22, filterFreq: 400, detune: 8 });
        // نبضة ضوضاء منخفضة للإحساس بالـ "خبطة"
        this.noise({ filterType: 'lowpass', freq: 250, peak: 0.12, attack: 0.002, decay: 0.12 });
    }

    // زر التنقل — كليك UI ناعم عصري
    playNav() {
        this.noise({ freq: 3000, q: 1.5, peak: 0.05, attack: 0.002, decay: 0.035 });
        this.tone({ freq: 620, type: 'sine', slideTo: 480, slideTime: 0.04,
                    peak: 0.05, attack: 0.003, decay: 0.06, filterFreq: 3000 });
    }

    // تكة العد التنازلي — طرقة مترونوم دقيقة واضحة
    playTick() {
        this.tone({ freq: 1100, type: 'sine', peak: 0.07, attack: 0.001, decay: 0.05, filterFreq: 5000 });
        this.noise({ freq: 1800, q: 4, peak: 0.04, attack: 0.001, decay: 0.025 });
    }

    // ظهور السؤال — Whoosh ناعم + جرس خافت
    playQuestionReveal() {
        this.noise({
            filterType: 'bandpass', freq: 400, sweepTo: 2200, sweepTime: 0.22, q: 1.2,
            peak: 0.07, attack: 0.05, decay: 0.25
        });
        this.tone({ freq: 830, type: 'sine', t: 0.1,  peak: 0.06, attack: 0.01, decay: 0.5, filterFreq: 3000 });
        this.tone({ freq: 1245, type: 'sine', t: 0.1, peak: 0.02, attack: 0.01, decay: 0.45, filterFreq: 4500 });
    }

    // (إضافي) انتهاء الوقت — بلورة متكررة خافتة لو حبيت تستخدمها
    playTimeout() {
        [0, 0.18, 0.36].forEach((t) => {
            this.tone({ freq: 660, type: 'triangle', t, peak: 0.08, attack: 0.01, decay: 0.15, filterFreq: 2000 });
        });
        this.tone({ freq: 330, type: 'sine', t: 0.54, peak: 0.1, attack: 0.01, decay: 0.4, filterFreq: 1200 });
    }
}

export const sound = new SoundManager();