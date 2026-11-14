// نظام توليد المؤثرات الصوتية التلقائي عبر Web Audio API
class SoundManager {
    constructor() {
        this.ctx = null;
        this.master = null;
        // استرجاع تفضيل الصوت المحفوظ
        const saved = localStorage.getItem('app_sound_enabled');
        this.enabled = saved !== null ? saved === 'true' : true;
    }

    init() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AC();

            this.master = this.ctx.createGain();
            this.master.gain.value = this.enabled ? 0.9 : 0;

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
        localStorage.setItem('app_sound_enabled', value);
        if (this.master) {
            this.master.gain.value = value ? 0.9 : 0;
        }
    }

    noiseBuffer(duration = 1) {
        const len = Math.floor(this.ctx.sampleRate * duration);
        const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        return buf;
    }

    tone({ freq = 440, type = 'sine', t = 0, attack = 0.008, decay = 0.2,
           peak = 0.12, filterFreq = 4000, detune = 0, slideTo = null, slideTime = 0.1 }) {
        if (!this.enabled) return;
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

    noise({ t = 0, attack = 0.003, decay = 0.1, peak = 0.1,
            filterType = 'bandpass', freq = 1000, q = 1, sweepTo = null, sweepTime = 0.15 }) {
        if (!this.enabled) return;
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

    playTypewriter() {
        if (!this.enabled) return;
        this.noise({ freq: 2500 + Math.random() * 800, q: 2, peak: 0.025, attack: 0.002, decay: 0.03 });
        this.tone({ freq: 1400 + Math.random() * 400, type: 'sine', peak: 0.015, attack: 0.002, decay: 0.025, filterFreq: 6000 });
    }

    playCorrect() {
        if (!this.enabled) return;
        this.tone({ freq: 587.33, type: 'sine', t: 0, peak: 0.14, attack: 0.005, decay: 0.55, filterFreq: 2500 });
        this.tone({ freq: 880.00, type: 'sine', t: 0.09, peak: 0.12, attack: 0.005, decay: 0.6, filterFreq: 2500 });
    }

    playWrong() {
        if (!this.enabled) return;
        this.tone({ freq: 120, type: 'sine', slideTo: 55, slideTime: 0.18, peak: 0.2, attack: 0.005, decay: 0.3, filterFreq: 300 });
        this.noise({ filterType: 'lowpass', freq: 250, peak: 0.12, attack: 0.002, decay: 0.12 });
    }

    playNav() {
        if (!this.enabled) return;
        this.noise({ freq: 3000, q: 1.5, peak: 0.05, attack: 0.002, decay: 0.035 });
        this.tone({ freq: 620, type: 'sine', slideTo: 480, slideTime: 0.04, peak: 0.05, attack: 0.003, decay: 0.06, filterFreq: 3000 });
    }

    playTick() {
        if (!this.enabled) return;
        this.tone({ freq: 1100, type: 'sine', peak: 0.07, attack: 0.001, decay: 0.05, filterFreq: 5000 });
    }

    playQuestionReveal() {
        if (!this.enabled) return;
        this.noise({ filterType: 'bandpass', freq: 400, sweepTo: 2200, sweepTime: 0.22, q: 1.2, peak: 0.07, attack: 0.05, decay: 0.25 });
        this.tone({ freq: 830, type: 'sine', t: 0.1, peak: 0.06, attack: 0.01, decay: 0.5, filterFreq: 3000 });
    }
}

export const sound = new SoundManager();