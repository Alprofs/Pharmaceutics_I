import { allLectures } from './lectures/index.js';
import { sound } from './sound.js';

let currentLectureIndex = 0;
let currentMode = 'quick';
let currentQuestions = [];
let currentIndex = 0;
let isTranslated = false;

let roundNumber = 1;
let wrongQuestionsQueue = [];

let animationTimeouts = [];
let countdownInterval = null;
let typeWriterActive = false;

// إعداد مدة الانتظار الافتراضية
let userWaitTime = parseInt(localStorage.getItem('quiz_wait_time')) || 5;

document.addEventListener("DOMContentLoaded", () => {
    renderLecturesGrid();
    updateSoundButtonUI();

    // استعادة وقت الانتظار المحدد مسبقاً في القائمة
    const timerSelect = document.getElementById('timer-duration-select');
    if (timerSelect) timerSelect.value = userWaitTime;

    // تشغيل نظام الوميض كل 10 دقائق (600,000 مللي ثانية)
    startTenMinuteFlash();

    // تصدير الدوال للـ Window
    window.startMode = startMode;
    window.goHome = goHome;
    window.goNext = goNext;
    window.goPrev = goPrev;
    window.toggleTranslation = toggleTranslation;
    window.selectOption = selectOption;
    window.toggleSound = toggleSound;
    window.changeTimerDuration = changeTimerDuration;
    window.skipToQuestion = skipToQuestion;
});

/* نظام وميض الاسم كل 10 دقائق لمح البصر */
function startTenMinuteFlash() {
    setInterval(() => {
        const watermark = document.getElementById('flash-watermark');
        if (watermark) {
            watermark.classList.add('show-flash');
            setTimeout(() => {
                watermark.classList.remove('show-flash');
            }, 500); // يختفي في لمح البصر بعد نصف ثانية
        }
    }, 10 * 60 * 10);
}

/* تبديل كتم الصوت */
function toggleSound() {
    const newState = !sound.enabled;
    sound.setEnabled(newState);
    updateSoundButtonUI();
    if (newState) sound.playNav();
}

function updateSoundButtonUI() {
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
        btn.textContent = sound.enabled ? '🔊' : '🔇';
    }
}

/* تغيير وقت الانتظار وحفظه */
function changeTimerDuration(seconds) {
    userWaitTime = parseInt(seconds) || 5;
    localStorage.setItem('quiz_wait_time', userWaitTime);
}

/* عرض بطاقات المحاضرات بدون زر الأسئلة المقالية */
function renderLecturesGrid() {
    const grid = document.getElementById("lectures-grid");
    grid.innerHTML = '';

    allLectures.forEach((lec, index) => {
        const card = document.createElement("div");
        card.className = "lecture-card";
        card.innerHTML = `
            <div class="lecture-card-title">${lec.title_ar}</div>
            <div class="card-buttons-row">
                <button class="btn-main" onclick="startMode(${index}, 'quick')">مراجعة وحل</button>
                <button class="btn-main btn-quiz" onclick="startMode(${index}, 'comprehensive')">اختبار شامل</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function clearAllAnimations() {
    animationTimeouts.forEach(clearTimeout);
    animationTimeouts = [];
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    typeWriterActive = false;
    const cdBox = document.getElementById('countdown-box');
    if (cdBox) cdBox.style.display = 'none';
}

/* زر التخطي لإظهار السؤال فوراً دون انتظار */
function skipToQuestion() {
    sound.playNav();
    clearAllAnimations();
    const data = currentQuestions[currentIndex];
    revealQuestionView(data);
}

function toggleTranslation() {
    sound.playNav();
    isTranslated = !isTranslated;
    const btnLabel = document.getElementById("translate-btn-label");
    btnLabel.textContent = isTranslated ? "عربي" : "English";

    const noteTitle = document.getElementById('note-title');
    if (noteTitle) {
        noteTitle.textContent = isTranslated ? "📝 ملاحظة توضيحية:" : "📝 Explanation Note:";
    }

    if (currentMode === 'quick') {
        const data = currentQuestions[currentIndex];
        const isAnswered = data.userAnswerIndex !== null;

        const questionCard = document.getElementById('question-card');
        if (questionCard && questionCard.style.display === 'block') {
            showQuestionOptions(data);
            if (isAnswered) showExplanationBox(data);
        } else {
            loadQuestionUI();
        }
    } else {
        loadQuestionUI();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function goHome() {
    sound.playNav();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('home-screen').classList.add('active');

    document.getElementById('win-overlay').style.display = 'none';
    document.getElementById("floating-translate-btn").style.display = 'none';
    clearAllAnimations();
}

function startMode(lectureIndex, mode) {
    sound.init();
    sound.playNav();

    currentMode = mode;
    currentLectureIndex = lectureIndex;
    const lecture = allLectures[currentLectureIndex];

    roundNumber = 1;
    wrongQuestionsQueue = [];

    const transBtn = document.getElementById("floating-translate-btn");
    if (mode === 'comprehensive') {
        transBtn.style.display = 'flex';
    } else {
        transBtn.style.display = 'none';
        isTranslated = false;
    }

    let baseQuestions = lecture.questions ? JSON.parse(JSON.stringify(lecture.questions)) : [];

    if (mode === 'quick') {
        currentQuestions = baseQuestions.map(q => {
            q.shuffledIndices = Array.from(Array(q.opts_en.length).keys());
            q.userAnswerIndex = null;
            return q;
        });
    } else {
        currentQuestions = baseQuestions.map(q => {
            q.shuffledIndices = shuffleArray(Array.from(Array(q.opts_en.length).keys()));
            q.userAnswerIndex = null;
            return q;
        });
    }

    currentIndex = 0;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('quiz-screen').classList.add('active');

    const noteTitle = document.getElementById('note-title');
    if (noteTitle) noteTitle.textContent = isTranslated ? "📝 ملاحظة توضيحية:" : "📝 Explanation Note:";

    document.getElementById('note-box').style.display = 'none';
    loadQuestionUI();
}

function loadQuestionUI() {
    clearAllAnimations();
    const lecture = allLectures[currentLectureIndex];

    const tag = document.getElementById('lecture-tag');
    if (currentMode === 'comprehensive') {
        tag.textContent = "الجولة " + roundNumber;
    } else {
        tag.textContent = isTranslated ? lecture.title_ar : lecture.title_en;
    }

    const noteBox = document.getElementById('note-box');
    const questionCard = document.getElementById('question-card');
    const optBox = document.getElementById('opt-box');
    const quickReviewBox = document.getElementById('quick-review-box');

    noteBox.style.display = 'none';
    questionCard.style.display = 'none';
    optBox.style.display = 'none';
    quickReviewBox.style.display = 'none';

    if (currentQuestions.length === 0) {
        document.getElementById('q-txt').innerHTML = "لا توجد أسئلة متاحة حالياً.";
        questionCard.style.display = 'block';
        optBox.innerHTML = "";
        return;
    }

    const data = currentQuestions[currentIndex];
    const total = currentQuestions.length;
    const currentNum = currentIndex + 1;

    document.getElementById('counter').textContent = `${currentNum} / ${total}`;
    document.getElementById('bar').style.width = `${(currentNum / total) * 100}%`;

    const countdownBox = document.getElementById('countdown-box');
    const transBtn = document.getElementById("floating-translate-btn");

    optBox.innerHTML = '';
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('next-btn');

    const isAnswered = data.userAnswerIndex !== null;
    nextBtn.disabled = !isAnswered;
    nextBtn.textContent = (currentIndex === total - 1) ? "إنهاء" : "التالي";

    if (currentMode === 'quick') {
        const enTextDiv = document.getElementById('typewriter-text-en');
        const arTextDiv = document.getElementById('typewriter-text-ar');

        enTextDiv.innerHTML = '';
        arTextDiv.innerHTML = '';
        countdownBox.style.display = 'none';

        if (!isAnswered) {
            transBtn.style.display = 'none';
        }

        const enText = data.info_en || "";
        const arText = data.info_ar || "";

        if (isAnswered) {
            revealQuestionView(data);
        } else {
            quickReviewBox.style.display = 'flex';

            typeWriterActive = true;
            let i = 0, j = 0;

            function typeEN() {
                if (i < enText.length && typeWriterActive) {
                    enTextDiv.innerHTML += enText.charAt(i);
                    if (i % 2 === 0) sound.playTypewriter();
                    i++;
                    animationTimeouts.push(setTimeout(typeEN, 20));
                }
            }

            function typeAR() {
                if (j < arText.length && typeWriterActive) {
                    arTextDiv.innerHTML += arText.charAt(j);
                    j++;
                    animationTimeouts.push(setTimeout(typeAR, 20));
                }
            }

            typeEN();
            typeAR();

            const maxChars = Math.max(enText.length, arText.length);
            const typingDuration = maxChars * 20;

            animationTimeouts.push(setTimeout(() => {
                if (!typeWriterActive) return;

                let timeLeft = userWaitTime;
                const countdownNum = document.getElementById('countdown-num');
                countdownNum.textContent = timeLeft;
                countdownBox.style.display = 'flex';
                sound.playTick();

                countdownInterval = setInterval(() => {
                    timeLeft--;
                    if (timeLeft > 0) {
                        countdownNum.textContent = timeLeft;
                        sound.playTick();
                    } else {
                        clearInterval(countdownInterval);
                        countdownInterval = null;
                        revealQuestionView(data);
                    }
                }, 1000);

            }, typingDuration + 200));
        }
    } else {
        revealQuestionView(data);
    }
}

function revealQuestionView(data) {
    const quickReviewBox = document.getElementById('quick-review-box');
    const questionCard = document.getElementById('question-card');
    const optBox = document.getElementById('opt-box');
    const transBtn = document.getElementById("floating-translate-btn");

    if (quickReviewBox) quickReviewBox.style.display = 'none';
    if (transBtn) transBtn.style.display = 'flex';

    sound.playQuestionReveal();
    questionCard.style.display = 'block';
    optBox.style.display = 'grid';
    showQuestionOptions(data);
}

function showQuestionOptions(qData) {
    const qTxt = document.getElementById('q-txt');
    const optBox = document.getElementById('opt-box');

    qTxt.innerHTML = isTranslated ? qData.q_ar : qData.q_en;
    qTxt.style.direction = isTranslated ? 'rtl' : 'ltr';
    qTxt.style.textAlign = isTranslated ? 'right' : 'left';

    const options_en = qData.opts_en;
    const options_ar = qData.opts_ar;

    optBox.innerHTML = '';
    qData.shuffledIndices.forEach((originalIdx) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = isTranslated ? options_ar[originalIdx] : options_en[originalIdx];
        btn.style.direction = isTranslated ? 'rtl' : 'ltr';

        if (qData.userAnswerIndex !== null) {
            btn.style.cursor = 'default';
            if (originalIdx === qData.correct) {
                btn.classList.add('correct');
            } else if (originalIdx === qData.userAnswerIndex) {
                btn.classList.add('wrong');
            }
        } else {
            btn.onclick = () => selectOption(btn, originalIdx, qData);
        }

        optBox.appendChild(btn);
    });

    if (qData.userAnswerIndex !== null && currentMode === 'comprehensive') {
        showExplanationBox(qData);
    }
}

function selectOption(selectedBtn, originalIdx, qData) {
    qData.userAnswerIndex = originalIdx;
    const allBtns = document.getElementById('opt-box').querySelectorAll('.option-btn');

    if (currentMode === 'quick') {
        if (originalIdx === qData.correct) {
            sound.playCorrect();
            selectedBtn.classList.add('correct');
            document.getElementById('next-btn').disabled = false;
            allBtns.forEach(btn => {
                btn.onclick = null;
                btn.style.cursor = 'default';
            });
        } else {
            sound.playWrong();
            selectedBtn.classList.add('wrong');
            selectedBtn.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(0)' }
            ], { duration: 200 });
            qData.userAnswerIndex = null;
        }
    } else {
        if (originalIdx === qData.correct) {
            sound.playCorrect();
        } else {
            sound.playWrong();
            if (!wrongQuestionsQueue.find(q => q.id === qData.id)) {
                wrongQuestionsQueue.push(qData);
            }
        }

        let idxCounter = 0;
        qData.shuffledIndices.forEach(idx => {
            if (idx === qData.correct) {
                allBtns[idxCounter].classList.add('correct');
            } else if (idx === qData.userAnswerIndex) {
                allBtns[idxCounter].classList.add('wrong');
            }
            allBtns[idxCounter].onclick = null;
            allBtns[idxCounter].style.cursor = 'default';
            idxCounter++;
        });

        document.getElementById('next-btn').disabled = false;
        showExplanationBox(qData);
    }
}

function showExplanationBox(qData) {
    if (qData.note_en || qData.note_ar) {
        const noteBox = document.getElementById('note-box');
        const noteContent = document.getElementById('note-content');

        noteBox.style.display = 'block';
        noteContent.innerHTML = isTranslated ? qData.note_ar : qData.note_en;
        noteBox.style.direction = isTranslated ? 'rtl' : 'ltr';
        noteBox.style.textAlign = isTranslated ? 'right' : 'left';
    } else {
        document.getElementById('note-box').style.display = 'none';
    }
}

function goPrev() {
    sound.playNav();
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestionUI();
    }
}

function goNext() {
    sound.playNav();
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestionUI();
    } else {
        if (currentMode === 'comprehensive' && wrongQuestionsQueue.length > 0) {
            roundNumber++;
            currentQuestions = wrongQuestionsQueue.map(q => {
                q.userAnswerIndex = null;
                q.shuffledIndices = shuffleArray(Array.from(Array(q.opts_en.length).keys()));
                return q;
            });
            wrongQuestionsQueue = [];
            currentIndex = 0;
            loadQuestionUI();
        } else {
            sound.playCorrect();
            document.getElementById('win-overlay').style.display = 'flex';
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    }
}