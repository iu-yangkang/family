// 练习题数据
const practiceQuestions = {
    tenses: [
        {
            question: "I _______ English for three years.",
            options: ["study", "studied", "have studied", "am studying"],
            correct: 2,
            explanation: "for + 时间段表示动作持续到现在，应使用现在完成时。"
        },
        {
            question: "She _______ to the library every day.",
            options: ["go", "goes", "went", "going"],
            correct: 1,
            explanation: "every day表示习惯性动作，主语是第三人称单数，动词要加s。"
        },
        {
            question: "They _______ a movie when I called them.",
            options: ["watch", "watched", "were watching", "have watched"],
            correct: 2,
            explanation: "when引导的时间状语从句，表示过去某个时刻正在进行的动作，用过去进行时。"
        },
        {
            question: "By next year, I _______ from university.",
            options: ["graduate", "graduated", "will graduate", "will have graduated"],
            correct: 3,
            explanation: "by + 将来时间表示到将来某个时间点已经完成的动作，用将来完成时。"
        },
        {
            question: "He _______ his homework before dinner yesterday.",
            options: ["finished", "had finished", "has finished", "finishes"],
            correct: 1,
            explanation: "before dinner yesterday表示过去的过去，用过去完成时。"
        }
    ],
    clauses: [
        {
            question: "The book _______ I bought yesterday is very interesting.",
            options: ["which", "who", "where", "when"],
            correct: 0,
            explanation: "先行词是book（物），在定语从句中作宾语，用which。"
        },
        {
            question: "I don't know _______ he will come tomorrow.",
            options: ["that", "whether", "what", "which"],
            correct: 1,
            explanation: "表示'是否'的含义，在宾语从句中用whether。"
        },
        {
            question: "_______ he is young, he is very responsible.",
            options: ["Because", "Although", "If", "When"],
            correct: 1,
            explanation: "前后句意转折，用Although表示'虽然'。"
        }
    ],
    voice: [
        {
            question: "The letter _______ by Tom yesterday.",
            options: ["wrote", "was written", "is written", "writes"],
            correct: 1,
            explanation: "yesterday表示过去时间，letter是动作的承受者，用一般过去时的被动语态。"
        },
        {
            question: "English _______ all over the world.",
            options: ["speaks", "is spoken", "spoke", "speaking"],
            correct: 1,
            explanation: "English是动作的承受者，表示客观事实，用一般现在时的被动语态。"
        }
    ]
};

// 时态详细数据
const tenseData = {
    'present-simple': {
        name: '一般现在时 (Simple Present)',
        structure: '主语 + 动词原形/动词第三人称单数',
        usage: [
            '表示习惯性动作或经常发生的动作',
            '表示客观事实或真理',
            '表示现在的状态或特征',
            '在时间状语从句和条件状语从句中表示将来'
        ],
        examples: [
            'I go to school every day. (我每天上学。)',
            'The sun rises in the east. (太阳从东方升起。)',
            'She is a teacher. (她是一名老师。)',
            'Water boils at 100°C. (水在100摄氏度沸腾。)'
        ],
        timeMarkers: ['every day', 'usually', 'often', 'sometimes', 'always', 'never']
    },
    'present-continuous': {
        name: '现在进行时 (Present Continuous)',
        structure: '主语 + am/is/are + 动词-ing',
        usage: [
            '表示现在正在进行的动作',
            '表示现阶段正在进行的动作',
            '表示按计划安排好的将来动作',
            '表示反复发生的动作，常带有感情色彩'
        ],
        examples: [
            'I am reading a book now. (我现在正在读书。)',
            'She is studying English this term. (她这学期在学英语。)',
            'We are meeting tomorrow. (我们明天见面。)',
            'He is always complaining. (他总是在抱怨。)'
        ],
        timeMarkers: ['now', 'at the moment', 'currently', 'these days', 'this week']
    },
    'present-perfect': {
        name: '现在完成时 (Present Perfect)',
        structure: '主语 + have/has + 过去分词',
        usage: [
            '表示过去发生的动作对现在造成的影响',
            '表示从过去开始持续到现在的动作或状态',
            '表示到现在为止已经完成的动作',
            '表示过去的经历'
        ],
        examples: [
            'I have finished my homework. (我已经完成了作业。)',
            'I have lived here for 5 years. (我在这里住了5年了。)',
            'Have you ever been to Paris? (你去过巴黎吗？)',
            'She has just arrived. (她刚刚到达。)'
        ],
        timeMarkers: ['already', 'just', 'ever', 'never', 'yet', 'since', 'for']
    },
    'present-perfect-continuous': {
        name: '现在完成进行时 (Present Perfect Continuous)',
        structure: '主语 + have/has been + 动词-ing',
        usage: [
            '表示从过去开始一直持续到现在的动作',
            '强调动作的持续性和未完成性',
            '表示重复的动作'
        ],
        examples: [
            'I have been studying English for 3 years. (我学英语已经3年了。)',
            'It has been raining all day. (雨下了一整天。)',
            'She has been working here since 2020. (她从2020年开始在这里工作。)'
        ],
        timeMarkers: ['for', 'since', 'all day', 'recently', 'lately']
    },
    'past-simple': {
        name: '一般过去时 (Simple Past)',
        structure: '主语 + 动词过去式',
        usage: [
            '表示过去某个时间发生的动作',
            '表示过去的状态',
            '表示过去经常发生的动作'
        ],
        examples: [
            'I visited Beijing last year. (我去年去了北京。)',
            'He was happy yesterday. (他昨天很开心。)',
            'She often played tennis when she was young. (她年轻时经常打网球。)'
        ],
        timeMarkers: ['yesterday', 'last week', 'ago', 'in 2020', 'when I was young']
    },
    'past-continuous': {
        name: '过去进行时 (Past Continuous)',
        structure: '主语 + was/were + 动词-ing',
        usage: [
            '表示过去某个时间正在进行的动作',
            '表示过去某个动作发生时的背景',
            '表示过去的计划或安排'
        ],
        examples: [
            'I was sleeping at 10 PM last night. (昨晚10点我在睡觉。)',
            'While I was cooking, he was watching TV. (我做饭时，他在看电视。)',
            'We were leaving the next day. (我们第二天要离开。)'
        ],
        timeMarkers: ['at that time', 'while', 'when', 'at 8 o\'clock yesterday']
    },
    'past-perfect': {
        name: '过去完成时 (Past Perfect)',
        structure: '主语 + had + 过去分词',
        usage: [
            '表示过去某个时间或动作之前已经完成的动作',
            '表示"过去的过去"'
        ],
        examples: [
            'I had finished dinner before he arrived. (他到达之前我已经吃完晚饭了。)',
            'She had left when I got there. (我到那里时她已经离开了。)',
            'By 2010, he had graduated from university. (到2010年，他已经大学毕业了。)'
        ],
        timeMarkers: ['before', 'after', 'by the time', 'already', 'just']
    },
    'past-perfect-continuous': {
        name: '过去完成进行时 (Past Perfect Continuous)',
        structure: '主语 + had been + 动词-ing',
        usage: [
            '表示过去某个时间之前一直在进行的动作',
            '强调动作的持续性'
        ],
        examples: [
            'I had been waiting for an hour when he arrived. (他到达时我已经等了一个小时。)',
            'She had been studying English for 3 years before she went abroad. (她出国前已经学了3年英语。)'
        ],
        timeMarkers: ['for', 'since', 'before', 'by the time']
    }
};

// 添加将来时态和过去将来时态的数据
const futureTenseData = {
    'future-simple': {
        name: '一般将来时 (Simple Future)',
        structure: '主语 + will + 动词原形',
        usage: [
            '表示将来的动作或状态',
            '表示意愿、决定或承诺',
            '表示预测'
        ],
        examples: [
            'I will call you tomorrow. (我明天给你打电话。)',
            'It will rain tomorrow. (明天会下雨。)',
            'I will help you. (我会帮助你。)'
        ],
        timeMarkers: ['tomorrow', 'next week', 'in the future', 'soon', 'later']
    },
    'future-continuous': {
        name: '将来进行时 (Future Continuous)',
        structure: '主语 + will be + 动词-ing',
        usage: [
            '表示将来某个时间正在进行的动作',
            '表示按计划安排的将来动作'
        ],
        examples: [
            'I will be working at 9 AM tomorrow. (明天上午9点我将在工作。)',
            'This time next week, I will be flying to London. (下周这个时候，我将在飞往伦敦的路上。)'
        ],
        timeMarkers: ['at this time tomorrow', 'this time next week', 'at 9 AM tomorrow']
    },
    'future-perfect': {
        name: '将来完成时 (Future Perfect)',
        structure: '主语 + will have + 过去分词',
        usage: [
            '表示将来某个时间之前将要完成的动作'
        ],
        examples: [
            'I will have graduated by next year. (到明年我就毕业了。)',
            'By the time you arrive, I will have finished cooking. (你到达时，我就做完饭了。)'
        ],
        timeMarkers: ['by next year', 'by the time', 'before', 'by then']
    },
    'future-perfect-continuous': {
        name: '将来完成进行时 (Future Perfect Continuous)',
        structure: '主语 + will have been + 动词-ing',
        usage: [
            '表示到将来某个时间为止一直在进行的动作'
        ],
        examples: [
            'By next month, I will have been working here for 2 years. (到下个月，我在这里工作就满2年了。)',
            'By the time he arrives, we will have been waiting for 3 hours. (他到达时，我们就等了3个小时了。)'
        ],
        timeMarkers: ['by next month', 'for 2 years', 'by the time']
    }
};

// 过去将来时态数据
const pastFutureTenseData = {
    'past-future-simple': {
        name: '过去将来时 (Past Future)',
        structure: '主语 + would + 动词原形',
        usage: [
            '表示从过去某个时间看将要发生的动作',
            '常用于宾语从句中'
        ],
        examples: [
            'He said he would come. (他说他会来。)',
            'I thought it would rain. (我以为会下雨。)'
        ],
        timeMarkers: ['said that', 'thought that', 'promised that']
    },
    'past-future-continuous': {
        name: '过去将来进行时 (Past Future Continuous)',
        structure: '主语 + would be + 动词-ing',
        usage: [
            '表示从过去某个时间看将来某时正在进行的动作'
        ],
        examples: [
            'He said he would be working at that time. (他说那时他会在工作。)',
            'She told me she would be studying abroad. (她告诉我她会在国外学习。)'
        ],
        timeMarkers: ['said that', 'told me that']
    },
    'past-future-perfect': {
        name: '过去将来完成时 (Past Future Perfect)',
        structure: '主语 + would have + 过去分词',
        usage: [
            '表示从过去某个时间看将来某时之前已经完成的动作'
        ],
        examples: [
            'He said he would have finished by then. (他说到那时他就完成了。)',
            'I thought you would have arrived by now. (我以为你现在已经到了。)'
        ],
        timeMarkers: ['by then', 'by that time']
    },
    'past-future-perfect-continuous': {
        name: '过去将来完成进行时 (Past Future Perfect Continuous)',
        structure: '主语 + would have been + 动词-ing',
        usage: [
            '表示从过去某个时间看将来某时之前一直在进行的动作'
        ],
        examples: [
            'He said he would have been working for 5 hours by then. (他说到那时他就工作5个小时了。)',
            'She told me she would have been studying here for 2 years. (她告诉我她在这里学习就满2年了。)'
        ],
        timeMarkers: ['for 5 hours', 'for 2 years']
    }
};

// 合并所有时态数据
const allTenseData = { ...tenseData, ...futureTenseData, ...pastFutureTenseData };

// DOM 元素
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为每个时态单元格添加点击事件
    const tenseCells = document.querySelectorAll('.tense-cell');
    tenseCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const tenseKey = this.getAttribute('data-tense');
            showTenseDetails(tenseKey);
        });
    });

    // 模态框关闭事件
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 导航按钮功能
    const navBtns = document.querySelectorAll('.nav-btn');
    const grammarSections = document.querySelectorAll('.grammar-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // 移除所有活动状态
            navBtns.forEach(b => b.classList.remove('active'));
            grammarSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');

                // 平滑滚动到目标部分
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 词性和其他语法项目的点击事件
    const partItems = document.querySelectorAll('.part-item, .voice-item, .pattern-item, .compound-item, .complex-item, .compound-complex-item, .passive-item');
    partItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type') || this.textContent.trim();
            showGrammarDetails(type, this);
        });
    });

    // 初始化练习系统
    if (document.getElementById('practice')) {
        initializePracticeSystem();
    }

    // 初始化游戏系统
    if (document.getElementById('games')) {
        initializeGameSystem();
    }

    // 初始化应用场景系统
    if (document.getElementById('applications')) {
        initializeApplicationSystem();
    }

    // 初始化高级语法系统
    if (document.getElementById('advanced')) {
        initializeAdvancedGrammarSystem();
    }

    // 初始化对比学习系统
    if (document.getElementById('comparison')) {
        initializeComparisonSystem();
    }

    // 初始化智能工具系统
    if (document.getElementById('tools')) {
        initializeToolsSystem();
    }

    // 初始化句子成分系统
    if (document.querySelector('.sentence-components-section')) {
        initializeSentenceComponents();
    }

    // 初始化句子成分系统
    if (document.querySelector('.sentence-components-section')) {
        initializeSentenceComponents();
    }
});

// 全局变量
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedTopic = 'all';
let selectedAnswer;
let errorBook = [];

// 练习系统功能
function initializePracticeSystem() {
    // 初始化错题本
    try {
        errorBook = JSON.parse(localStorage.getItem('grammarErrorBook') || '[]');
    } catch (e) {
        errorBook = [];
    }

    // 练习类型切换
    const practiceBtns = document.querySelectorAll('.practice-btn');
    const practiceSections = document.querySelectorAll('.practice-section');

    practiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.getAttribute('data-practice');

            // 移除所有活动状态
            practiceBtns.forEach(b => b.classList.remove('active'));
            practiceSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // 初始化各种练习类型
    initializeMultipleChoice();
    initializeFillBlanks();
    initializeErrorCorrection();
    initializeTranslation();
    initializeSentenceBuilding();
}

function initializeMultipleChoice() {
    const startBtn = document.getElementById('start-practice');
    const topicSelect = document.getElementById('topic-select');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            selectedTopic = topicSelect.value;
            startMultipleChoicePractice();
        });
    }

    // 答案提交
    const submitBtn = document.getElementById('submit-answer');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            submitAnswer();
        });
    }

    // 下一题
    const nextBtn = document.getElementById('next-question');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextQuestion();
        });
    }

    // 查看解析
    const explanationBtn = document.getElementById('show-explanation');
    if (explanationBtn) {
        explanationBtn.addEventListener('click', () => {
            showExplanation();
        });
    }

    // 重新练习
    const restartBtn = document.getElementById('restart-practice');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            startMultipleChoicePractice();
        });
    }
}

function startMultipleChoicePractice() {
    // 准备题目
    prepareQuestions();

    // 重置状态
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // 显示练习容器
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('practice-results').style.display = 'none';

    // 显示第一题
    showCurrentQuestion();
}

function prepareQuestions() {
    if (selectedTopic === 'all') {
        currentQuestions = [];
        Object.values(practiceQuestions).forEach(topicQuestions => {
            currentQuestions.push(...topicQuestions);
        });
    } else {
        currentQuestions = practiceQuestions[selectedTopic] || [];
    }

    // 随机打乱题目顺序
    currentQuestions = shuffleArray([...currentQuestions]);

    // 限制题目数量
    currentQuestions = currentQuestions.slice(0, 10);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    // 更新题目信息
    document.getElementById('question-number').textContent =
        `题目 ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('score').textContent = `得分: ${score}`;

    // 显示题目
    document.getElementById('question-text').textContent = question.question;

    // 显示选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });

    // 重置按钮状态
    document.getElementById('submit-answer').style.display = 'inline-block';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('show-explanation').style.display = 'none';
    document.getElementById('answer-feedback').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
}

function selectOption(index) {
    // 移除之前的选择
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // 添加当前选择
    document.querySelectorAll('.option')[index].classList.add('selected');
    selectedAnswer = index;
}

function submitAnswer() {
    if (selectedAnswer === undefined) {
        alert('请选择一个答案！');
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;

    // 记录答案
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        userAnswer: selectedAnswer,
        correct: isCorrect
    });

    if (isCorrect) {
        score++;
    } else {
        // 记录错题
        addToErrorBook(question, selectedAnswer);
    }

    // 显示答案反馈
    showAnswerFeedback(isCorrect);

    // 标记选项
    markOptions(question.correct);

    // 更新按钮状态
    document.getElementById('submit-answer').style.display = 'none';
    document.getElementById('show-explanation').style.display = 'inline-block';

    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-question').style.display = 'inline-block';
    } else {
        document.getElementById('next-question').textContent = '查看结果';
        document.getElementById('next-question').style.display = 'inline-block';
    }
}

function showAnswerFeedback(isCorrect) {
    const feedback = document.getElementById('answer-feedback');
    feedback.style.display = 'block';
    feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '✅ 回答正确！' : '❌ 回答错误！';
}

function markOptions(correctIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (option.classList.contains('selected')) {
            option.classList.add('incorrect');
        }
    });
}

function showExplanation() {
    const question = currentQuestions[currentQuestionIndex];
    const explanation = document.getElementById('explanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `<strong>解析：</strong>${question.explanation}`;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        selectedAnswer = undefined;
        showCurrentQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('practice-results').style.display = 'block';

    const correctCount = userAnswers.filter(answer => answer.correct).length;
    const accuracy = Math.round((correctCount / currentQuestions.length) * 100);

    document.getElementById('total-questions').textContent = currentQuestions.length;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
}

// 错题本功能
function addToErrorBook(question, userAnswer) {
    const errorItem = {
        id: Date.now(),
        question: question.question,
        options: question.options,
        correctAnswer: question.correct,
        userAnswer: userAnswer,
        explanation: question.explanation,
        timestamp: new Date().toISOString(),
        reviewCount: 0,
        mastered: false
    };

    // 检查是否已存在相同题目
    const existingIndex = errorBook.findIndex(item => item.question === question.question);
    if (existingIndex !== -1) {
        // 更新现有错题
        errorBook[existingIndex] = errorItem;
    } else {
        // 添加新错题
        errorBook.push(errorItem);
    }

    // 保存到本地存储
    localStorage.setItem('grammarErrorBook', JSON.stringify(errorBook));

    // 显示错题提醒
    showErrorBookNotification();
}

function showErrorBookNotification() {
    // 创建一个简单的通知
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 500;
        max-width: 300px;
    `;
    notification.innerHTML = `
        📚 题目已添加到错题本<br>
        <small>当前错题数量: ${errorBook.length}</small>
    `;

    document.body.appendChild(notification);

    // 3秒后自动移除
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// 添加其他练习功能
function initializeFillBlanks() {
    const checkButtons = document.querySelectorAll('.check-blanks');
    checkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            checkFillBlanks(e.target);
        });
    });
}

function checkFillBlanks(button) {
    const exerciseItem = button.closest('.exercise-item');
    const inputs = exerciseItem.querySelectorAll('.blank-input');
    const feedback = exerciseItem.querySelector('.blank-feedback');

    let allCorrect = true;
    let results = [];

    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.getAttribute('data-answer').toLowerCase();

        if (userAnswer === correctAnswer) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            results.push('✅');
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            results.push(`❌ 正确答案: ${input.getAttribute('data-answer')}`);
            allCorrect = false;
        }
    });

    feedback.className = `blank-feedback show ${allCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = allCorrect ?
        '🎉 全部正确！' :
        `检查结果：<br>${results.join('<br>')}`;
}

function initializeErrorCorrection() {
    const checkButtons = document.querySelectorAll('.check-correction');
    checkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            checkErrorCorrection(e.target);
        });
    });
}

function checkErrorCorrection(button) {
    const correctionItem = button.closest('.correction-item');
    const input = correctionItem.querySelector('.correction-field');
    const feedback = correctionItem.querySelector('.correction-feedback');
    const errorWord = correctionItem.querySelector('.error-word');

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = errorWord.getAttribute('data-correct').toLowerCase();

    const isCorrect = userAnswer === correctAnswer;

    feedback.className = `correction-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = isCorrect ?
        '✅ 改正正确！' :
        `❌ 正确答案是: ${errorWord.getAttribute('data-correct')}`;
}

function initializeTranslation() {
    const checkButtons = document.querySelectorAll('.check-translation');
    checkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            checkTranslation(e.target);
        });
    });
}

function checkTranslation(button) {
    const translationItem = button.closest('.translation-item');
    const textarea = translationItem.querySelector('.translation-field');
    const feedback = translationItem.querySelector('.translation-feedback');
    const referenceAnswer = translationItem.querySelector('.reference-answer');

    const userTranslation = textarea.value.trim();

    if (userTranslation.length === 0) {
        feedback.className = 'translation-feedback show incorrect';
        feedback.innerHTML = '❌ 请输入翻译内容';
        return;
    }

    // 简单的翻译检查（实际应用中可以使用更复杂的算法）
    feedback.className = 'translation-feedback show correct';
    feedback.innerHTML = '✅ 翻译已提交，请查看参考答案进行对比';
    referenceAnswer.style.display = 'block';
}

function initializeSentenceBuilding() {
    const checkButtons = document.querySelectorAll('.check-sentence');
    checkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            checkSentenceBuilding(e.target);
        });
    });
}

function checkSentenceBuilding(button) {
    const buildingItem = button.closest('.building-item');
    const textarea = buildingItem.querySelector('.sentence-field');
    const feedback = buildingItem.querySelector('.sentence-feedback');
    const wordChips = buildingItem.querySelectorAll('.word-chip');

    const userSentence = textarea.value.trim().toLowerCase();

    if (userSentence.length === 0) {
        feedback.className = 'sentence-feedback show incorrect';
        feedback.innerHTML = '❌ 请输入句子';
        return;
    }

    // 检查是否包含所有要求的词汇
    const requiredWords = Array.from(wordChips).map(chip => chip.textContent.toLowerCase());
    const missingWords = requiredWords.filter(word => !userSentence.includes(word));

    if (missingWords.length === 0) {
        feedback.className = 'sentence-feedback show correct';
        feedback.innerHTML = '✅ 很好！句子包含了所有要求的词汇';
    } else {
        feedback.className = 'sentence-feedback show incorrect';
        feedback.innerHTML = `❌ 句子中缺少以下词汇: ${missingWords.join(', ')}`;
    }
}

// 显示时态详情
function showTenseDetails(tenseKey) {
    const tense = allTenseData[tenseKey];
    if (!tense) return;

    const modalContent = `
        <h2>${tense.name}</h2>
        <div class="tense-details">
            <div class="detail-section">
                <h3>📝 结构</h3>
                <p class="structure-detail">${tense.structure}</p>
            </div>
            
            <div class="detail-section">
                <h3>💡 用法</h3>
                <ul class="usage-list">
                    ${tense.usage.map(usage => `<li>${usage}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>📚 例句</h3>
                <ul class="example-list">
                    ${tense.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>⏰ 时间标志词</h3>
                <div class="time-markers">
                    ${tense.timeMarkers.map(marker => `<span class="marker">${marker}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
}

// 显示语法详情
function showGrammarDetails(type, element) {
    // 语法详情数据
    const grammarData = {
        'countable-nouns': {
            title: '可数名词 (Countable Nouns)',
            description: '可数名词是可以用数字计算的名词，有单数和复数形式。',
            examples: [
                'I have three books on my desk. (我桌上有三本书。)',
                'The children are playing in the garden. (孩子们在花园里玩耍。)',
                'She bought two apples and five oranges. (她买了两个苹果和五个橙子。)'
            ],
            rules: [
                '单数形式前通常需要冠词 a/an',
                '复数形式通常在词尾加 -s 或 -es',
                '可以用数字直接修饰'
            ]
        },
        'uncountable-nouns': {
            title: '不可数名词 (Uncountable Nouns)',
            description: '不可数名词是不能用数字直接计算的名词，通常没有复数形式。',
            examples: [
                'Water is essential for life. (水对生命至关重要。)',
                'I need some information about the course. (我需要一些关于这门课程的信息。)',
                'His advice was very helpful. (他的建议非常有用。)'
            ],
            rules: [
                '前面不能用 a/an',
                '没有复数形式',
                '用 some, much, little 等修饰'
            ]
        },
        'proper-nouns': {
            title: '专有名词 (Proper Nouns)',
            description: '专有名词是特定人、地点、组织等的名称，通常首字母大写。',
            examples: [
                'London is the capital of England. (伦敦是英国的首都。)',
                'John works at Microsoft. (约翰在微软工作。)',
                'We celebrate Christmas in December. (我们在十二月庆祝圣诞节。)'
            ],
            rules: [
                '首字母必须大写',
                '通常不用冠词',
                '指特定的人、地点、组织等'
            ]
        },
        'personal-pronouns': {
            title: '人称代词 (Personal Pronouns)',
            description: '人称代词用来代替人或事物，分为主格和宾格。',
            examples: [
                'I am a student. (我是一名学生。) - 主格',
                'Please help me with this problem. (请帮我解决这个问题。) - 宾格',
                'She likes to read books. (她喜欢读书。) - 主格'
            ],
            rules: [
                '主格：I, you, he, she, it, we, they',
                '宾格：me, you, him, her, it, us, them',
                '主格作主语，宾格作宾语'
            ]
        },
        'main-verbs': {
            title: '实义动词 (Main Verbs)',
            description: '实义动词有完整的词汇意义，可以独立作谓语。',
            examples: [
                'She runs every morning. (她每天早上跑步。)',
                'We ate dinner at a restaurant. (我们在餐厅吃了晚饭。)',
                'They think about the problem carefully. (他们仔细思考这个问题。)'
            ],
            rules: [
                '表示具体的动作或状态',
                '可以独立作谓语',
                '有时态变化'
            ]
        },
        'modal-verbs': {
            title: '情态动词 (Modal Verbs)',
            description: '情态动词表示可能性、必要性、能力等，后面接动词原形。',
            examples: [
                'You can speak English very well. (你英语说得很好。)',
                'I must finish this project today. (我今天必须完成这个项目。)',
                'It might rain this afternoon. (今天下午可能会下雨。)'
            ],
            rules: [
                '后面接动词原形',
                '没有人称和数的变化',
                '常见的有：can, could, may, might, must, should, will, would'
            ]
        },
        // 从句相关
        'subject-clauses': {
            title: '主语从句 (Subject Clauses)',
            description: '主语从句在复合句中充当主语的成分。',
            examples: [
                'What he said is true. (他说的是真的。)',
                'That he will come is certain. (他会来是肯定的。)',
                'Whether we can finish on time is doubtful. (我们能否按时完成是有疑问的。)'
            ],
            rules: [
                '常用连接词：that, what, whether, who, when, where, why, how',
                '可以用形式主语it代替：It is clear that he is wrong.',
                '从句作主语时，谓语动词通常用单数'
            ]
        },
        'object-clauses': {
            title: '宾语从句 (Object Clauses)',
            description: '宾语从句在复合句中充当宾语的成分。',
            examples: [
                'I think (that) he is right. (我认为他是对的。)',
                'I don\'t know where he lives. (我不知道他住在哪里。)',
                'She asked whether I would come. (她问我是否会来。)'
            ],
            rules: [
                '连接词that在口语中常省略',
                '疑问词引导的宾语从句要用陈述语序',
                '主句是过去时，从句要用相应的过去时态'
            ]
        },
        'restrictive-clauses': {
            title: '限制性定语从句 (Restrictive Relative Clauses)',
            description: '限制性定语从句对先行词起限定作用，不可缺少。',
            examples: [
                'The book that I bought yesterday is interesting. (我昨天买的那本书很有趣。)',
                'The man who lives next door is a doctor. (住在隔壁的那个人是医生。)',
                'This is the house which we visited last year. (这是我们去年参观的房子。)'
            ],
            rules: [
                '关系代词：who, whom, whose, which, that',
                '不用逗号分隔',
                '关系代词that可以省略（作宾语时）'
            ]
        },
        'time-clauses': {
            title: '时间状语从句 (Time Clauses)',
            description: '时间状语从句表示动作发生的时间。',
            examples: [
                'I will call you when I arrive. (我到达时会给你打电话。)',
                'While I was cooking, he was watching TV. (我做饭时，他在看电视。)',
                'After he finished his work, he went home. (他完成工作后就回家了。)'
            ],
            rules: [
                '引导词：when, while, as, before, after, since, until, as soon as',
                '主句是将来时，从句用一般现在时',
                '注意时态的呼应关系'
            ]
        },
        'conditional-clauses': {
            title: '条件状语从句 (Conditional Clauses)',
            description: '条件状语从句表示假设或条件。',
            examples: [
                'If it rains, we will stay home. (如果下雨，我们就待在家里。)',
                'Unless you study hard, you won\'t pass. (除非你努力学习，否则你不会通过。)',
                'As long as you try your best, you will succeed. (只要你尽力，你就会成功。)'
            ],
            rules: [
                '引导词：if, unless, as long as, provided that, in case',
                '真实条件句：主将从现',
                '虚拟条件句有特殊的时态搭配'
            ]
        },
        // 虚拟语气相关
        'present-contrary': {
            title: '与现在事实相反的虚拟语气',
            description: '表示与现在事实相反的假设情况。',
            examples: [
                'If I were you, I would accept the offer. (如果我是你，我会接受这个提议。)',
                'If he had more time, he would help us. (如果他有更多时间，他会帮助我们。)',
                'If it weren\'t raining, we could go out. (如果不下雨，我们就能出去了。)'
            ],
            rules: [
                '条件句：If + 主语 + 动词过去式',
                '主句：主语 + would/could/might + 动词原形',
                'be动词在虚拟语气中统一用were'
            ]
        },
        'past-contrary': {
            title: '与过去事实相反的虚拟语气',
            description: '表示与过去事实相反的假设情况。',
            examples: [
                'If I had studied harder, I would have passed the exam. (如果我当时更努力学习，我就会通过考试了。)',
                'If you had told me earlier, I could have helped you. (如果你早点告诉我，我就能帮助你了。)',
                'If it hadn\'t rained, we would have gone to the beach. (如果当时没下雨，我们就去海滩了。)'
            ],
            rules: [
                '条件句：If + 主语 + had + 过去分词',
                '主句：主语 + would/could/might + have + 过去分词',
                '表示对过去情况的假设和遗憾'
            ]
        },
        // 非谓语动词相关
        'infinitive-subject': {
            title: '不定式作主语',
            description: '不定式可以在句中充当主语。',
            examples: [
                'To learn English is important. (学英语很重要。)',
                'To be or not to be, that is the question. (生存还是毁灭，这是个问题。)',
                'To finish this work will take a long time. (完成这项工作需要很长时间。)'
            ],
            rules: [
                '形式：to + 动词原形',
                '可以用形式主语it代替：It is important to learn English.',
                '不定式作主语时，谓语动词用单数'
            ]
        },
        'gerund-subject': {
            title: '动名词作主语',
            description: '动名词可以在句中充当主语。',
            examples: [
                'Swimming is good exercise. (游泳是很好的运动。)',
                'Reading books broadens our mind. (读书开阔我们的思维。)',
                'Learning a foreign language takes time. (学习外语需要时间。)'
            ],
            rules: [
                '形式：动词-ing',
                '动名词作主语时，谓语动词用单数',
                '表示一般性、经常性的动作'
            ]
        },
        'present-participle': {
            title: '现在分词',
            description: '现在分词可以作定语、状语等。',
            examples: [
                'The running water is clean. (流动的水是干净的。) - 作定语',
                'Walking in the park, I met an old friend. (在公园散步时，我遇到了一个老朋友。) - 作状语',
                'I saw him crossing the street. (我看见他正在过马路。) - 作宾补'
            ],
            rules: [
                '形式：动词-ing',
                '表示主动和进行的含义',
                '可以作定语、状语、宾补等'
            ]
        },
        // 介词相关
        'at-time': {
            title: '时间介词 at',
            description: 'at 用于表示具体的时间点。',
            examples: [
                'The meeting starts at 9 o\'clock. (会议9点开始。)',
                'I go to bed at night. (我晚上睡觉。)',
                'We have a party at Christmas. (我们在圣诞节有聚会。)'
            ],
            rules: [
                '用于具体时间点：at 3:30, at noon',
                '用于节日：at Christmas, at Easter',
                '用于时间段：at night, at dawn'
            ]
        },
        'in-time': {
            title: '时间介词 in',
            description: 'in 用于表示较长的时间段。',
            examples: [
                'I was born in 1995. (我出生于1995年。)',
                'It\'s cold in winter. (冬天很冷。)',
                'I usually study in the morning. (我通常在上午学习。)'
            ],
            rules: [
                '用于年份：in 2023',
                '用于月份：in January',
                '用于季节：in summer',
                '用于时间段：in the morning'
            ]
        },
        'on-place': {
            title: '地点介词 on',
            description: 'on 用于表示在表面上。',
            examples: [
                'The book is on the table. (书在桌子上。)',
                'There\'s a picture on the wall. (墙上有一幅画。)',
                'My office is on the second floor. (我的办公室在二楼。)'
            ],
            rules: [
                '表示在表面上：on the desk',
                '表示楼层：on the first floor',
                '表示街道：on Main Street'
            ]
        },
        'in-place': {
            title: '地点介词 in',
            description: 'in 用于表示在内部或范围内。',
            examples: [
                'The cat is in the box. (猫在盒子里。)',
                'I live in Beijing. (我住在北京。)',
                'There are many books in the library. (图书馆里有很多书。)'
            ],
            rules: [
                '表示在内部：in the room',
                '表示城市、国家：in China',
                '表示大的地理范围：in Asia'
            ]
        },
        // 冠词相关
        'article-a': {
            title: '不定冠词 a',
            description: 'a 用于辅音音素开头的单词前。',
            examples: [
                'I have a car. (我有一辆车。)',
                'She is a teacher. (她是一名老师。)',
                'This is a university. (这是一所大学。)'
            ],
            rules: [
                '用于辅音音素开头的单词前',
                '表示"一个"的概念',
                '用于第一次提到的可数名词单数前'
            ]
        },
        'article-the': {
            title: '定冠词 the',
            description: 'the 用于特指某个或某些人/物。',
            examples: [
                'The book on the table is mine. (桌子上的那本书是我的。)',
                'The sun rises in the east. (太阳从东方升起。)',
                'He is the best student in our class. (他是我们班最好的学生。)'
            ],
            rules: [
                '特指已知的人或物',
                '世界上独一无二的事物：the sun, the moon',
                '最高级前：the best, the most beautiful',
                '序数词前：the first, the second'
            ]
        },
        // 比较级相关
        'regular-comparison': {
            title: '形容词比较级规则变化',
            description: '大多数形容词按照规则变化形成比较级和最高级。',
            examples: [
                'tall → taller → tallest (高的)',
                'big → bigger → biggest (大的)',
                'happy → happier → happiest (快乐的)',
                'beautiful → more beautiful → most beautiful (美丽的)'
            ],
            rules: [
                '单音节词：直接加-er, -est',
                '以e结尾：加-r, -st',
                '重读闭音节：双写末尾字母加-er, -est',
                '以y结尾：变y为i加-er, -est',
                '多音节词：前面加more, most'
            ]
        },
        'irregular-comparison': {
            title: '形容词比较级不规则变化',
            description: '一些常用形容词有不规则的比较级和最高级形式。',
            examples: [
                'good → better → best (好的)',
                'bad → worse → worst (坏的)',
                'many/much → more → most (多的)',
                'little → less → least (少的)',
                'far → farther/further → farthest/furthest (远的)'
            ],
            rules: [
                '这些词需要特别记忆',
                'good和well的比较级都是better',
                'far有两种比较级形式，意思略有不同',
                'old有两种比较级：older/elder'
            ]
        },
        'comparative-patterns': {
            title: '比较级句型',
            description: '比较级用于比较两个人或事物。',
            examples: [
                'He is taller than I am. (他比我高。)',
                'She runs faster than he does. (她跑得比他快。)',
                'This book is more interesting than that one. (这本书比那本更有趣。)'
            ],
            rules: [
                '基本句型：A + be + 比较级 + than + B',
                '副词比较级：A + 动词 + 比较级 + than + B',
                '注意than后面的人称代词形式'
            ]
        },
        'equal-comparison': {
            title: '同级比较',
            description: '表示两个人或事物在某方面相等或不相等。',
            examples: [
                'He is as tall as I am. (他和我一样高。)',
                'She doesn\'t run as fast as he does. (她跑得没有他快。)',
                'This book is not so interesting as that one. (这本书没有那本有趣。)'
            ],
            rules: [
                '肯定句：as + 原级 + as',
                '否定句：not as/so + 原级 + as',
                '表示同等程度的比较'
            ]
        },
        // 更多详细的语法项目
        'descriptive-adjectives': {
            title: '描述性形容词 (Descriptive Adjectives)',
            description: '描述性形容词用来描述名词的性质、特征或状态。',
            examples: [
                'She has beautiful eyes. (她有美丽的眼睛。)',
                'The weather is nice today. (今天天气很好。)',
                'He is a tall, handsome man. (他是一个高大英俊的男人。)',
                'The old wooden house looks mysterious. (那座古老的木屋看起来很神秘。)'
            ],
            rules: [
                '通常放在名词前面：a beautiful girl',
                '可以作表语：The girl is beautiful.',
                '多个形容词的顺序：限定词+观点+大小+年龄+形状+颜色+来源+材料+用途+名词',
                '例如：a beautiful small old round red Chinese wooden dining table'
            ]
        },
        'limiting-adjectives': {
            title: '限定性形容词 (Limiting Adjectives)',
            description: '限定性形容词用来限定名词的范围或数量。',
            examples: [
                'This car is expensive. (这辆车很贵。)',
                'I need some help. (我需要一些帮助。)',
                'Every student should study hard. (每个学生都应该努力学习。)',
                'Which book do you prefer? (你更喜欢哪本书？)'
            ],
            rules: [
                '指示形容词：this, that, these, those',
                '数量形容词：some, any, many, much, few, little',
                '疑问形容词：which, what, whose',
                '不定形容词：all, every, each, both, either, neither'
            ]
        },
        'manner-adverbs': {
            title: '方式副词 (Adverbs of Manner)',
            description: '方式副词描述动作进行的方式或状态。',
            examples: [
                'She speaks English fluently. (她英语说得很流利。)',
                'He drives carefully. (他开车很小心。)',
                'The children played happily in the garden. (孩子们在花园里快乐地玩耍。)',
                'She answered the question correctly. (她正确地回答了问题。)'
            ],
            rules: [
                '大多数由形容词+ly构成：quick → quickly',
                '通常放在动词后面：He runs fast.',
                '修饰动词时放在动词后：She sings beautifully.',
                '有些副词与形容词同形：fast, hard, late, early'
            ]
        },
        'time-adverbs': {
            title: '时间副词 (Adverbs of Time)',
            description: '时间副词表示动作发生的时间。',
            examples: [
                'I will call you tomorrow. (我明天给你打电话。)',
                'She arrived yesterday. (她昨天到达了。)',
                'We often go to the movies. (我们经常去看电影。)',
                'He has already finished his homework. (他已经完成了作业。)'
            ],
            rules: [
                '确定时间：today, tomorrow, yesterday, now',
                '频率副词：always, usually, often, sometimes, never',
                '顺序副词：first, then, next, finally',
                '持续时间：already, yet, still, just'
            ]
        },
        'place-adverbs': {
            title: '地点副词 (Adverbs of Place)',
            description: '地点副词表示动作发生的地点或方向。',
            examples: [
                'Please come here immediately. (请立即到这里来。)',
                'The children are playing outside. (孩子们在外面玩。)',
                'She looked everywhere for her keys. (她到处找她的钥匙。)',
                'The bird flew away. (鸟飞走了。)'
            ],
            rules: [
                '地点副词：here, there, everywhere, somewhere, nowhere',
                '方向副词：up, down, in, out, away, back',
                '通常放在句末：The cat is sleeping upstairs.',
                '可以放在句首强调：Outside, it was raining heavily.'
            ]
        },
        'degree-adverbs': {
            title: '程度副词 (Adverbs of Degree)',
            description: '程度副词表示动作或状态的程度。',
            examples: [
                'The movie was very interesting. (这部电影非常有趣。)',
                'She is quite tall. (她相当高。)',
                'He almost missed the train. (他差点错过火车。)',
                'The weather is extremely hot today. (今天天气极其炎热。)'
            ],
            rules: [
                '强调程度：very, quite, rather, extremely, incredibly',
                '完全程度：completely, totally, absolutely, entirely',
                '部分程度：partly, somewhat, fairly, relatively',
                '几乎程度：almost, nearly, hardly, scarcely'
            ]
        },
        'coordinating-conjunctions': {
            title: '并列连词 (Coordinating Conjunctions)',
            description: '并列连词连接同等重要的词、短语或句子。',
            examples: [
                'I like tea and coffee. (我喜欢茶和咖啡。)',
                'He is smart but lazy. (他聪明但懒惰。)',
                'You can stay or leave. (你可以留下或离开。)',
                'She didn\'t come, so we started without her. (她没来，所以我们没等她就开始了。)'
            ],
            rules: [
                'FANBOYS: for, and, nor, but, or, yet, so',
                '连接同等地位的成分',
                '连接句子时前面通常加逗号',
                'and表示并列，but表示转折，or表示选择'
            ]
        },
        'subordinating-conjunctions': {
            title: '从属连词 (Subordinating Conjunctions)',
            description: '从属连词引导从句，表示主句和从句之间的逻辑关系。',
            examples: [
                'I stayed home because I was sick. (我待在家里因为我生病了。)',
                'Although it was raining, we went out. (虽然下雨，我们还是出去了。)',
                'When he arrives, please call me. (他到达时，请给我打电话。)',
                'If you study hard, you will pass the exam. (如果你努力学习，你会通过考试。)'
            ],
            rules: [
                '时间：when, while, as, before, after, since, until',
                '原因：because, since, as',
                '条件：if, unless, provided that',
                '让步：although, though, even though, while'
            ]
        },
        'interjections': {
            title: '感叹词 (Interjections)',
            description: '感叹词表达强烈的情感或突然的感受。',
            examples: [
                'Oh! I forgot my keys. (哦！我忘了带钥匙。)',
                'Wow! That\'s amazing! (哇！太棒了！)',
                'Ouch! That hurts! (哎哟！好疼！)',
                'Hurray! We won the game! (万岁！我们赢了比赛！)'
            ],
            rules: [
                '表示惊讶：Oh! Wow! Gosh!',
                '表示疼痛：Ouch! Ow!',
                '表示高兴：Hurray! Yay! Great!',
                '表示遗憾：Alas! Oh no!',
                '通常独立使用，后面跟感叹号'
            ]
        },
        // 数词相关
        'cardinal-numbers': {
            title: '基数词 (Cardinal Numbers)',
            description: '基数词表示数量的多少。',
            examples: [
                'I have three books. (我有三本书。)',
                'There are twenty students in the class. (班里有二十个学生。)',
                'She bought one hundred apples. (她买了一百个苹果。)',
                'The population is over one million. (人口超过一百万。)'
            ],
            rules: [
                '1-12: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve',
                '13-19: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen',
                '整十数: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
                '复合数: twenty-one, thirty-five, ninety-nine',
                '大数: hundred, thousand, million, billion'
            ]
        },
        'ordinal-numbers': {
            title: '序数词 (Ordinal Numbers)',
            description: '序数词表示顺序。',
            examples: [
                'This is the first time I\'ve been here. (这是我第一次来这里。)',
                'She finished second in the race. (她在比赛中获得第二名。)',
                'The twenty-first century began in 2001. (21世纪始于2001年。)',
                'He lives on the third floor. (他住在三楼。)'
            ],
            rules: [
                '1st-3rd: first, second, third',
                '4th-20th: fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth, eighteenth, nineteenth, twentieth',
                '21st, 22nd, 23rd, 24th...',
                '前面通常加定冠词the'
            ]
        },
        'fractional-numbers': {
            title: '分数词 (Fractional Numbers)',
            description: '分数词表示部分数量。',
            examples: [
                'One-third of the students are absent. (三分之一的学生缺席。)',
                'Two-fifths of the work is done. (五分之二的工作已完成。)',
                'Half of the cake is gone. (一半的蛋糕没了。)',
                'Three-quarters of an hour passed. (过了四分之三小时。)'
            ],
            rules: [
                '分子用基数词，分母用序数词',
                '分子大于1时，分母用复数',
                '1/2 = half, 1/4 = quarter',
                '小数: 0.5 = zero point five'
            ]
        },
        // 限定词相关
        'articles-det': {
            title: '冠词作限定词',
            description: '冠词是最常见的限定词，用来限定名词。',
            examples: [
                'The cat is sleeping. (那只猫在睡觉。)',
                'I saw a bird in the tree. (我看到树上有一只鸟。)',
                'An apple a day keeps the doctor away. (一天一苹果，医生远离我。)'
            ],
            rules: [
                'a/an: 不定冠词，表示泛指',
                'the: 定冠词，表示特指',
                '零冠词：某些情况下不用冠词',
                '位置：通常在名词前，形容词前'
            ]
        },
        'demonstratives': {
            title: '指示词 (Demonstratives)',
            description: '指示词用来指示人或物的位置关系。',
            examples: [
                'This book is interesting. (这本书很有趣。)',
                'That car is expensive. (那辆车很贵。)',
                'These flowers are beautiful. (这些花很美。)',
                'Those days were happy. (那些日子很快乐。)'
            ],
            rules: [
                'this/these: 指近处的人或物',
                'that/those: 指远处的人或物',
                'this/that: 修饰单数名词',
                'these/those: 修饰复数名词'
            ]
        },
        'quantifiers': {
            title: '量词 (Quantifiers)',
            description: '量词表示数量的多少或程度。',
            examples: [
                'Many students like English. (许多学生喜欢英语。)',
                'I have some money. (我有一些钱。)',
                'There isn\'t much time left. (没有多少时间了。)',
                'Few people came to the party. (很少人来参加聚会。)'
            ],
            rules: [
                '可数名词: many, few, several, a few',
                '不可数名词: much, little, a little',
                '两者皆可: some, any, a lot of, lots of, plenty of',
                '否定句和疑问句中常用any'
            ]
        },
        'possessive-determiners': {
            title: '物主限定词 (Possessive Determiners)',
            description: '物主限定词表示所属关系。',
            examples: [
                'My sister loves her new job. (我姐姐喜欢她的新工作。)',
                'Our teacher is very kind. (我们的老师很和蔼。)',
                'Their house is beautiful. (他们的房子很漂亮。)',
                'Your idea is excellent. (你的想法很棒。)'
            ],
            rules: [
                '第一人称: my, our',
                '第二人称: your',
                '第三人称: his, her, its, their',
                '后面必须跟名词，不能单独使用'
            ]
        },
        // 更多从句相关
        'that-clauses': {
            title: 'that引导的名词性从句',
            description: 'that是最常用的名词性从句引导词。',
            examples: [
                'I believe that he is honest. (我相信他是诚实的。)',
                'The fact that he lied surprised me. (他撒谎这个事实让我惊讶。)',
                'It is clear that we need more time. (很明显我们需要更多时间。)',
                'That he will come is certain. (他会来是肯定的。)'
            ],
            rules: [
                'that在宾语从句中常可省略',
                'that在主语从句中不能省略',
                'that在表语从句和同位语从句中不能省略',
                'that本身无意义，只起连接作用'
            ]
        },
        'wh-clauses': {
            title: '疑问词引导的名词性从句',
            description: '疑问词引导的从句要用陈述语序。',
            examples: [
                'I don\'t know where he lives. (我不知道他住在哪里。)',
                'What he said is true. (他说的是真的。)',
                'The question is how we can solve this problem. (问题是我们如何解决这个问题。)',
                'I wonder who will win the game. (我想知道谁会赢得比赛。)'
            ],
            rules: [
                '疑问词: what, who, whom, whose, which, when, where, why, how',
                '从句中用陈述语序',
                '疑问词在从句中充当成分',
                '不能省略引导词'
            ]
        },
        'whether-clauses': {
            title: 'whether/if引导的名词性从句',
            description: 'whether和if都表示"是否"，但用法有区别。',
            examples: [
                'I wonder whether/if he will come. (我想知道他是否会来。)',
                'Whether we go or not depends on the weather. (我们是否去取决于天气。)',
                'The question is whether we have enough money. (问题是我们是否有足够的钱。)',
                'I don\'t care whether or not you agree. (我不在乎你是否同意。)'
            ],
            rules: [
                'whether可用于所有名词性从句',
                'if通常只用于宾语从句',
                'whether可与or not连用',
                'whether可用于不定式前'
            ]
        },
        'relative-pronouns': {
            title: '关系代词的用法',
            description: '关系代词在定语从句中充当主语、宾语等成分。',
            examples: [
                'The man who is standing there is my teacher. (站在那里的那个人是我的老师。)',
                'The book which/that I bought is interesting. (我买的那本书很有趣。)',
                'The girl whose father is a doctor studies hard. (父亲是医生的那个女孩学习很努力。)',
                'The person whom you met yesterday is my friend. (你昨天遇到的那个人是我的朋友。)'
            ],
            rules: [
                'who: 指人，作主语',
                'whom: 指人，作宾语',
                'whose: 指人或物，表所属关系',
                'which: 指物',
                'that: 指人或物，不用于非限制性定语从句'
            ]
        },
        'relative-adverbs': {
            title: '关系副词的用法',
            description: '关系副词在定语从句中作状语。',
            examples: [
                'This is the place where I was born. (这是我出生的地方。)',
                'I remember the day when we first met. (我记得我们初次见面的那一天。)',
                'That\'s the reason why he left. (那就是他离开的原因。)',
                'The time when he arrived was midnight. (他到达的时间是午夜。)'
            ],
            rules: [
                'where: 表地点，相当于in/at/on which',
                'when: 表时间，相当于in/on/at which',
                'why: 表原因，相当于for which',
                '可以用"介词+which"替换'
            ]
        },
        'preposition-relative': {
            title: '介词+关系代词',
            description: '介词可以放在关系代词前面，形成更正式的表达。',
            examples: [
                'The pen with which I write is broken. (我用来写字的笔坏了。)',
                'The house in which we live is old. (我们住的房子很旧。)',
                'The person to whom I spoke was helpful. (和我说话的那个人很有帮助。)',
                'The subject about which we talked was interesting. (我们谈论的话题很有趣。)'
            ],
            rules: [
                '介词+which: 指物',
                '介词+whom: 指人',
                '介词的选择取决于动词或形容词的搭配',
                '这种结构比较正式'
            ]
        },
        'manner-clauses': {
            title: '方式状语从句',
            description: '方式状语从句表示动作进行的方式。',
            examples: [
                'Do it as I told you. (按我告诉你的方式去做。)',
                'He talks as if he knew everything. (他说话好像什么都知道。)',
                'She acted as though nothing had happened. (她表现得好像什么都没发生。)',
                'The child behaves as his father does. (这孩子的行为像他父亲一样。)'
            ],
            rules: [
                'as: 表示"按照...方式"',
                'as if/as though: 表示"好像，仿佛"',
                'as if/as though后常用虚拟语气',
                '表示真实情况时用陈述语气'
            ]
        },
        // 介词相关补充
        'compound-prep-1': {
            title: '复合介词 underneath',
            description: 'underneath 表示"在...下面"，比under更强调完全被覆盖。',
            examples: [
                'The cat is hiding underneath the table. (猫躲在桌子下面。)',
                'I found my keys underneath a pile of papers. (我在一堆文件下面找到了钥匙。)',
                'The treasure was buried underneath the old tree. (宝藏埋在老树下面。)'
            ],
            rules: [
                '强调完全被覆盖或隐藏',
                '比under更正式',
                '常用于具体的物理位置'
            ]
        },
        'phrasal-prep-1': {
            title: '介词短语 in front of',
            description: 'in front of 表示"在...前面"。',
            examples: [
                'There is a garden in front of the house. (房子前面有一个花园。)',
                'She stood in front of the mirror. (她站在镜子前面。)',
                'The car stopped in front of the school. (车停在学校前面。)'
            ],
            rules: [
                '表示空间位置关系',
                '与in the front of区别：in the front of指在内部的前面',
                '后面接名词或代词'
            ]
        },
        'phrasal-prep-2': {
            title: '介词短语 because of',
            description: 'because of 表示"因为，由于"，后接名词或名词短语。',
            examples: [
                'The game was cancelled because of rain. (比赛因为下雨被取消了。)',
                'He was late because of the traffic jam. (他因为交通堵塞而迟到了。)',
                'She couldn\'t sleep because of the noise. (她因为噪音而无法入睡。)'
            ],
            rules: [
                '后接名词、代词或动名词',
                '与because区别：because后接句子',
                '表示直接原因'
            ]
        },
        // 比较级相关补充
        'double-comparative': {
            title: '双重比较级',
            description: '双重比较级表示两个变化同时进行，一个变化引起另一个变化。',
            examples: [
                'The more you practice, the better you become. (你练习得越多，你就变得越好。)',
                'The harder you work, the more successful you will be. (你工作越努力，你就会越成功。)',
                'The more I learn, the more I realize I don\'t know. (我学得越多，越意识到自己不知道的东西很多。)'
            ],
            rules: [
                '结构：the + 比较级..., the + 比较级...',
                '表示两个变化的相关性',
                '第一个the从句相当于条件状语从句',
                '第二个the从句是主句'
            ]
        },
        'progressive-comparative': {
            title: '递进比较级',
            description: '递进比较级表示程度逐渐增加或减少。',
            examples: [
                'It\'s getting colder and colder. (天气越来越冷。)',
                'She becomes more and more beautiful. (她变得越来越美丽。)',
                'The situation is getting worse and worse. (情况越来越糟。)'
            ],
            rules: [
                '单音节词：比较级 + and + 比较级',
                '多音节词：more and more + 原级',
                '表示程度的逐渐变化',
                '常与get, become等系动词连用'
            ]
        },
        'multiple-comparison': {
            title: '倍数比较',
            description: '倍数比较表示一个事物是另一个事物的几倍。',
            examples: [
                'This room is twice as large as that one. (这个房间是那个房间的两倍大。)',
                'He runs three times faster than I do. (他跑得比我快三倍。)',
                'The new car costs half as much as the old one. (新车的价格是旧车的一半。)'
            ],
            rules: [
                '倍数 + as + 原级 + as',
                '倍数 + 比较级 + than',
                '倍数 + the size/length/width + of',
                '常用倍数词：twice, three times, half'
            ]
        },
        'superlative-range': {
            title: '最高级的范围表达',
            description: '最高级需要明确比较的范围。',
            examples: [
                'He is the tallest in our class. (他是我们班最高的。)',
                'She is the most beautiful of all the girls. (她是所有女孩中最美的。)',
                'This is the best restaurant in the city. (这是城里最好的餐厅。)'
            ],
            rules: [
                'in + 地点/组织：He is the best in the team.',
                'of + 范围：She is the smartest of all students.',
                'among + 群体：He is the tallest among his friends.',
                '范围必须是三者或三者以上'
            ]
        },
        'superlative-ever': {
            title: '最高级的强调表达',
            description: '使用ever或one of等来强调最高级。',
            examples: [
                'This is the best movie I have ever seen. (这是我看过的最好的电影。)',
                'She is one of the most talented students. (她是最有才华的学生之一。)',
                'It was the worst day ever. (这是有史以来最糟糕的一天。)'
            ],
            rules: [
                'ever强调"有史以来"',
                'one of the + 最高级 + 复数名词',
                'by far可以修饰最高级表示强调',
                'the very + 最高级表示"正是最..."'
            ]
        },
        // 更多语法细节
        'correlative-conjunctions': {
            title: '关联连词 (Correlative Conjunctions)',
            description: '关联连词成对使用，连接并列的成分。',
            examples: [
                'Either you come with us or you stay home. (要么你和我们一起来，要么你待在家里。)',
                'Both Tom and Jerry are my friends. (汤姆和杰瑞都是我的朋友。)',
                'Neither the teacher nor the students were satisfied. (老师和学生都不满意。)',
                'Not only is he smart, but also hardworking. (他不仅聪明，而且勤奋。)'
            ],
            rules: [
                'either...or: 要么...要么',
                'neither...nor: 既不...也不',
                'both...and: 既...又',
                'not only...but also: 不仅...而且',
                '连接的成分要平行对等'
            ]
        },
        'conjunctive-adverbs': {
            title: '连接副词 (Conjunctive Adverbs)',
            description: '连接副词连接两个独立的句子，表示逻辑关系。',
            examples: [
                'It was raining; however, we went out. (下雨了；然而，我们还是出去了。)',
                'She studied hard; therefore, she passed the exam. (她努力学习；因此，她通过了考试。)',
                'The weather was bad; nevertheless, we had a good time. (天气很糟；尽管如此，我们玩得很开心。)'
            ],
            rules: [
                '前面用分号，后面用逗号',
                'however: 然而，但是',
                'therefore: 因此，所以',
                'nevertheless: 尽管如此',
                'moreover: 而且，此外'
            ]
        },
        'mild-interjections': {
            title: '轻微感叹词',
            description: '轻微感叹词表达较温和的情感，通常用逗号分隔。',
            examples: [
                'Well, I think we should go now. (嗯，我觉得我们现在应该走了。)',
                'Oh, I see what you mean. (哦，我明白你的意思了。)',
                'Hmm, that\'s interesting. (嗯，这很有趣。)'
            ],
            rules: [
                '用逗号而不是感叹号',
                '表达思考、理解等温和情感',
                '常用于对话中',
                '可以放在句首、句中或句末'
            ]
        },
        'strong-interjections': {
            title: '强烈感叹词',
            description: '强烈感叹词表达强烈的情感，通常用感叹号。',
            examples: [
                'Help! There\'s a fire! (救命！着火了！)',
                'Stop! Don\'t move! (停！别动！)',
                'Fantastic! You did it! (太棒了！你做到了！)'
            ],
            rules: [
                '用感叹号表示强烈情感',
                '表达紧急、兴奋、惊讶等',
                '通常独立成句',
                '语调较高，语气强烈'
            ]
        },
        // 谓语动词相关
        'transitive-verbs': {
            title: '及物动词 (Transitive Verbs)',
            description: '及物动词后面必须跟宾语才能表达完整的意思。',
            examples: [
                'I love music. (我喜欢音乐。)',
                'She reads books every day. (她每天读书。)',
                'They bought a new car. (他们买了一辆新车。)',
                'He teaches English at school. (他在学校教英语。)'
            ],
            rules: [
                '后面必须跟宾语',
                '可以变为被动语态',
                '宾语可以是名词、代词或从句',
                '常见及物动词：love, like, buy, teach, learn, make, do'
            ]
        },
        'intransitive-verbs': {
            title: '不及物动词 (Intransitive Verbs)',
            description: '不及物动词后面不能直接跟宾语。',
            examples: [
                'The sun rises in the east. (太阳从东方升起。)',
                'Birds fly in the sky. (鸟儿在天空中飞翔。)',
                'She arrived yesterday. (她昨天到达了。)',
                'The baby is sleeping. (婴儿在睡觉。)'
            ],
            rules: [
                '后面不能直接跟宾语',
                '不能变为被动语态',
                '如需跟宾语，要加介词',
                '常见不及物动词：rise, arrive, sleep, die, come, go'
            ]
        },
        'ditransitive-verbs': {
            title: '双宾动词 (Ditransitive Verbs)',
            description: '双宾动词可以跟两个宾语：间接宾语和直接宾语。',
            examples: [
                'He gave me a book. (他给了我一本书。)',
                'She told us a story. (她给我们讲了一个故事。)',
                'I bought him a gift. (我给他买了一份礼物。)',
                'They sent her a letter. (他们给她寄了一封信。)'
            ],
            rules: [
                '间接宾语通常是人，直接宾语通常是物',
                '可以改为：动词 + 直接宾语 + to/for + 间接宾语',
                '常见双宾动词：give, tell, buy, send, show, teach, lend',
                '有些动词用to：give to, send to；有些用for：buy for, make for'
            ]
        },
        'linking-verbs': {
            title: '系动词 (Linking Verbs)',
            description: '系动词连接主语和表语，表示主语的状态或特征。',
            examples: [
                'She is beautiful. (她很美丽。)',
                'The food tastes delicious. (食物尝起来很美味。)',
                'He became a doctor. (他成为了一名医生。)',
                'The weather seems nice. (天气看起来不错。)'
            ],
            rules: [
                '后面跟表语，不跟宾语',
                '表语可以是形容词、名词或介词短语',
                '不能用于被动语态',
                '常见系动词：be, become, seem, look, sound, taste, feel, smell'
            ]
        },
        'modal-auxiliaries': {
            title: '情态助动词 (Modal Auxiliary Verbs)',
            description: '情态助动词表示说话人的态度、情感或判断。',
            examples: [
                'You should study harder. (你应该更努力学习。)',
                'I can speak English. (我会说英语。)',
                'It may rain tomorrow. (明天可能下雨。)',
                'You must finish your homework. (你必须完成作业。)'
            ],
            rules: [
                '后面跟动词原形',
                '没有人称和数的变化',
                '不能单独作谓语',
                '表示能力、可能性、必要性、义务等'
            ]
        },
        'regular-verbs': {
            title: '规则动词 (Regular Verbs)',
            description: '规则动词的过去式和过去分词都是在原形后加-ed。',
            examples: [
                'work → worked → worked (工作)',
                'play → played → played (玩)',
                'study → studied → studied (学习)',
                'stop → stopped → stopped (停止)'
            ],
            rules: [
                '一般情况：直接加-ed',
                '以e结尾：只加-d',
                '以辅音字母+y结尾：变y为i加-ed',
                '重读闭音节：双写末尾字母加-ed'
            ]
        },
        'irregular-verbs': {
            title: '不规则动词 (Irregular Verbs)',
            description: '不规则动词的过去式和过去分词变化不规则，需要特别记忆。',
            examples: [
                'go → went → gone (去)',
                'see → saw → seen (看见)',
                'eat → ate → eaten (吃)',
                'break → broke → broken (打破)'
            ],
            rules: [
                '没有固定规律，需要逐个记忆',
                '有些动词三种形式相同：cut, put, hit',
                '有些动词过去式和过去分词相同：buy-bought-bought',
                '有些动词三种形式都不同：go-went-gone'
            ]
        },
        // 连词相关
        'fanboys': {
            title: 'FANBOYS并列连词',
            description: 'FANBOYS是七个最常用的并列连词的首字母缩写。',
            examples: [
                'I like tea and coffee. (我喜欢茶和咖啡。) - and',
                'He is smart but lazy. (他聪明但懒惰。) - but',
                'You can stay or leave. (你可以留下或离开。) - or',
                'It was raining, so we stayed home. (下雨了，所以我们待在家里。) - so'
            ],
            rules: [
                'F - for (因为)',
                'A - and (和)',
                'N - nor (也不)',
                'B - but (但是)',
                'O - or (或者)',
                'Y - yet (然而)',
                'S - so (所以)'
            ]
        },
        'time-subordinating': {
            title: '时间从属连词',
            description: '时间从属连词引导时间状语从句。',
            examples: [
                'When he arrived, I was sleeping. (他到达时，我在睡觉。)',
                'I will call you after I finish work. (我完成工作后会给你打电话。)',
                'She has been happy since she got married. (她结婚后一直很快乐。)',
                'Wait here until I come back. (在这里等到我回来。)'
            ],
            rules: [
                'when: 当...时候',
                'while: 在...期间',
                'before: 在...之前',
                'after: 在...之后',
                'since: 自从...以来',
                'until: 直到...',
                'as soon as: 一...就...'
            ]
        },
        'cause-subordinating': {
            title: '原因从属连词',
            description: '原因从属连词引导原因状语从句。',
            examples: [
                'I stayed home because I was sick. (我待在家里因为我生病了。)',
                'Since you are here, let\'s start the meeting. (既然你在这里，我们开始开会吧。)',
                'As it was getting late, we decided to leave. (由于天色已晚，我们决定离开。)',
                'Now that you mention it, I remember. (既然你提到了，我想起来了。)'
            ],
            rules: [
                'because: 因为（最常用）',
                'since: 既然，由于',
                'as: 由于，因为',
                'now that: 既然',
                'because语气最强，since和as较弱'
            ]
        },
        'both-and': {
            title: 'both...and 关联连词',
            description: 'both...and 表示"既...又..."，连接两个并列的成分。',
            examples: [
                'Both Tom and Jerry are my friends. (汤姆和杰瑞都是我的朋友。)',
                'She is both smart and beautiful. (她既聪明又美丽。)',
                'Both the teacher and the students were satisfied. (老师和学生都很满意。)',
                'I like both tea and coffee. (我既喜欢茶也喜欢咖啡。)'
            ],
            rules: [
                '连接两个并列的成分',
                '谓语动词用复数形式',
                '强调两者都包括',
                '可以连接名词、形容词、动词等'
            ]
        },
        'either-or': {
            title: 'either...or 关联连词',
            description: 'either...or 表示"要么...要么..."，表示选择关系。',
            examples: [
                'Either you come with us or you stay home. (要么你和我们一起来，要么你待在家里。)',
                'You can either walk or take the bus. (你可以走路或坐公交车。)',
                'Either the teacher or the students are wrong. (要么老师错了，要么学生错了。)',
                'Either today or tomorrow is fine. (今天或明天都可以。)'
            ],
            rules: [
                '表示两者选其一',
                '谓语动词与靠近的主语保持一致',
                '强调二选一的关系',
                '可以连接各种词性'
            ]
        },
        'not-only-but-also': {
            title: 'not only...but also 关联连词',
            description: 'not only...but also 表示"不仅...而且..."，表示递进关系。',
            examples: [
                'Not only is he smart, but also hardworking. (他不仅聪明，而且勤奋。)',
                'She not only sings but also dances. (她不仅会唱歌，还会跳舞。)',
                'Not only the students but also the teacher was surprised. (不仅学生们，连老师也很惊讶。)',
                'He is not only my teacher but also my friend. (他不仅是我的老师，也是我的朋友。)'
            ],
            rules: [
                '表示递进关系',
                'not only在句首时，要部分倒装',
                '谓语动词与靠近的主语保持一致',
                'but also中的also可以省略'
            ]
        },
        'contrast-adverbs': {
            title: '表示转折的连接副词',
            description: '连接副词表示转折关系，连接两个独立的句子。',
            examples: [
                'It was raining; however, we went out. (下雨了；然而，我们还是出去了。)',
                'She studied hard; nevertheless, she failed the exam. (她努力学习；尽管如此，她还是考试不及格。)',
                'The weather was bad; on the contrary, we had a good time. (天气很糟；相反，我们玩得很开心。)',
                'He is rich; nonetheless, he is not happy. (他很富有；尽管如此，他并不快乐。)'
            ],
            rules: [
                '前面用分号，后面用逗号',
                'however: 然而，但是',
                'nevertheless: 尽管如此',
                'nonetheless: 尽管如此',
                'on the contrary: 相反'
            ]
        },
        // 标点符号相关
        'period': {
            title: '句号 (Period)',
            description: '句号用于陈述句的末尾，表示句子的结束。',
            examples: [
                'I love English. (我喜欢英语。)',
                'The weather is nice today. (今天天气很好。)',
                'She works as a teacher. (她是一名老师。)',
                'We went to the park yesterday. (我们昨天去了公园。)'
            ],
            rules: [
                '用于陈述句末尾',
                '用于大多数缩写词后：Mr., Dr., etc.',
                '用于间接疑问句末尾：I wonder where he is.',
                '不用于标题、标语等'
            ]
        },
        'comma': {
            title: '逗号 (Comma)',
            description: '逗号用于分隔句子中的各个成分。',
            examples: [
                'I like apples, oranges, and bananas. (我喜欢苹果、橙子和香蕉。)',
                'When I arrived, he was sleeping. (我到达时，他在睡觉。)',
                'John, my best friend, is coming. (约翰，我最好的朋友，要来了。)',
                'She is smart, beautiful, and kind. (她聪明、美丽、善良。)'
            ],
            rules: [
                '分隔并列成分：red, white, and blue',
                '分隔从句：When he came, I was reading.',
                '分隔插入语：Tom, my friend, is here.',
                '分隔同位语：Mr. Smith, the teacher, is kind.'
            ]
        },
        'quotation-marks': {
            title: '引号 (Quotation Marks)',
            description: '引号用于标示直接引语、对话或特殊用法的词汇。',
            examples: [
                'He said, "I love you." (他说："我爱你。")',
                '"Hello," she replied. ("你好，"她回答道。)',
                'The word "love" has many meanings. ("爱"这个词有很多含义。)',
                '"To be or not to be," that is the question. ("生存还是毁灭，"这是个问题。)'
            ],
            rules: [
                '直接引语：He said, "Hello."',
                '对话：She asked, "How are you?"',
                '特殊词汇：The word "nice" is overused.',
                '标题：I read "Romeo and Juliet."',
                '逗号和句号放在引号内'
            ]
        },
        'apostrophe': {
            title: '撇号 (Apostrophe)',
            description: '撇号用于表示所有格和缩写。',
            examples: [
                'John\'s book is on the table. (约翰的书在桌子上。)',
                'It\'s a beautiful day. (今天是美好的一天。)',
                'The students\' books are heavy. (学生们的书很重。)',
                'Don\'t worry about it. (别担心。)'
            ],
            rules: [
                '单数所有格：\'s (John\'s car)',
                '复数所有格：s\' (students\' books)',
                '不规则复数：\'s (children\'s toys)',
                '缩写：don\'t, it\'s, we\'re',
                '注意：its (它的) 没有撇号'
            ]
        },
        // 构词法相关
        'negative-prefixes': {
            title: '否定前缀',
            description: '否定前缀用于构成意思相反的词汇。',
            examples: [
                'happy → unhappy (不快乐的)',
                'agree → disagree (不同意)',
                'possible → impossible (不可能的)',
                'regular → irregular (不规则的)'
            ],
            rules: [
                'un-: 最常用，unhappy, unfair, unknown',
                'dis-: disagree, disappear, dishonest',
                'in-: incorrect, incomplete, independent',
                'im-: (在b,p,m前) impossible, impatient',
                'ir-: (在r前) irregular, irresponsible',
                'il-: (在l前) illegal, illogical'
            ]
        },
        'noun-suffixes': {
            title: '名词后缀',
            description: '名词后缀用于将其他词性转换为名词。',
            examples: [
                'teach → teacher (老师)',
                'happy → happiness (快乐)',
                'free → freedom (自由)',
                'develop → development (发展)'
            ],
            rules: [
                '-er/-or: 表示人，teacher, actor, writer',
                '-ness: 表示状态，happiness, kindness, darkness',
                '-ment: 表示行为结果，development, movement',
                '-tion/-sion: 表示行为过程，education, decision',
                '-dom: 表示状态领域，freedom, kingdom',
                '-ship: 表示关系状态，friendship, leadership'
            ]
        },
        'compound-nouns': {
            title: '复合名词',
            description: '复合名词由两个或多个词组合而成。',
            examples: [
                'bookcase (书柜) = book + case',
                'toothbrush (牙刷) = tooth + brush',
                'sunflower (向日葵) = sun + flower',
                'basketball (篮球) = basket + ball'
            ],
            rules: [
                '写法：一个词 (bookcase)、连字符 (mother-in-law)、分开写 (ice cream)',
                '重音通常在第一个词上',
                '复数形式：通常在最后一个词加复数',
                '意思可能与组成词不同：hotdog ≠ hot + dog'
            ]
        },
        // 语序倒装相关
        'negative-inversion': {
            title: '否定词倒装',
            description: '否定词位于句首时，句子要部分倒装。',
            examples: [
                'Never have I seen such a beautiful sunset. (我从未见过如此美丽的日落。)',
                'Seldom does he come to visit us. (他很少来看我们。)',
                'Not only is he smart, but also hardworking. (他不仅聪明，而且勤奋。)',
                'Little did I know what was waiting for me. (我几乎不知道等待我的是什么。)'
            ],
            rules: [
                '否定副词：never, seldom, rarely, hardly, scarcely',
                '否定短语：not only, not until, by no means',
                '结构：否定词 + 助动词 + 主语 + 动词',
                '只有否定词修饰整个句子时才倒装'
            ]
        },
        'only-inversion': {
            title: 'Only倒装',
            description: 'Only + 状语位于句首时，主句要部分倒装。',
            examples: [
                'Only then did I realize my mistake. (只有那时我才意识到我的错误。)',
                'Only in this way can we solve the problem. (只有用这种方法我们才能解决问题。)',
                'Only when he came did the meeting start. (只有当他来了会议才开始。)',
                'Only by working hard will you succeed. (只有努力工作你才会成功。)'
            ],
            rules: [
                'Only + 状语 + 助动词 + 主语 + 动词',
                '状语可以是副词、介词短语、从句',
                'Only修饰主语时不倒装：Only John knows the answer.',
                '从句部分不倒装，主句倒装'
            ]
        },
        'here-there-inversion': {
            title: 'Here/There倒装',
            description: 'Here/There位于句首时，句子完全倒装。',
            examples: [
                'Here comes the bus. (公交车来了。)',
                'There goes the bell. (铃声响了。)',
                'Here are your books. (你的书在这里。)',
                'There lived an old man. (那里住着一位老人。)'
            ],
            rules: [
                '结构：Here/There + 动词 + 主语',
                '主语是代词时不倒装：Here it comes.',
                '常用动词：come, go, be, live, stand, lie',
                '表示位置移动或存在状态'
            ]
        },
        // 强调结构相关
        'it-cleft-subject': {
            title: 'It强调句 - 强调主语',
            description: '用It is/was...who/that...结构强调主语。',
            examples: [
                'It was John who broke the window. (是约翰打破了窗户。)',
                'It is Mary that teaches us English. (是玛丽教我们英语。)',
                'It was the students who organized the party. (是学生们组织了聚会。)',
                'It is Tom that always helps others. (是汤姆总是帮助别人。)'
            ],
            rules: [
                '结构：It + be + 被强调主语 + who/that + 其他',
                '强调人用who，强调物用that',
                '时态与原句保持一致',
                '可以强调单数或复数主语'
            ]
        },
        'what-cleft': {
            title: 'What强调句',
            description: '用What...is/was...结构强调句子的某个部分。',
            examples: [
                'What I need is your help. (我需要的是你的帮助。)',
                'What surprised me was his honesty. (让我惊讶的是他的诚实。)',
                'What he did was (to) break the window. (他做的事是打破窗户。)',
                'What matters most is your health. (最重要的是你的健康。)'
            ],
            rules: [
                '结构：What + 从句 + be + 被强调部分',
                '强调主语、宾语或表语',
                'What从句作主语，谓语用单数',
                '可以省略to不定式的to'
            ]
        },
        'do-emphasis': {
            title: 'Do强调',
            description: '用do/does/did来强调动词。',
            examples: [
                'I do love you! (我真的爱你！)',
                'She does work hard. (她确实工作很努力。)',
                'He did come yesterday. (他昨天确实来了。)',
                'We do appreciate your help. (我们确实感谢你的帮助。)'
            ],
            rules: [
                '现在时用do/does，过去时用did',
                '后面跟动词原形',
                '用于肯定句中强调',
                '语调要重读do/does/did'
            ]
        },
        'reflexive-emphasis': {
            title: '反身代词强调',
            description: '用反身代词来强调主语或宾语。',
            examples: [
                'The president himself came to the meeting. (总统亲自来参加会议。)',
                'I myself don\'t believe it. (我自己都不相信。)',
                'She built the house herself. (她亲自建造了这座房子。)',
                'You yourself said it was impossible. (你自己说过这是不可能的。)'
            ],
            rules: [
                '反身代词：myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
                '可以强调主语或宾语',
                '位置灵活：主语后、句末等',
                '表示"亲自、本人"的意思'
            ]
        },
        // 省略和替代相关
        'subject-ellipsis': {
            title: '主语省略',
            description: '在某些情况下，主语可以省略。',
            examples: [
                '(I) Hope you have a good time! (希望你玩得开心！)',
                '(You) Come here! (过来！)',
                '(I) Thank you for your help. (谢谢你的帮助。)',
                '(You) Be careful! (小心！)'
            ],
            rules: [
                '祈使句中省略主语you',
                '某些固定表达中省略主语I',
                '对话中可省略明显的主语',
                '省略后意思仍然清楚'
            ]
        },
        'that-ellipsis': {
            title: 'that省略',
            description: '在宾语从句中，连词that通常可以省略。',
            examples: [
                'I think (that) he is right. (我认为他是对的。)',
                'She said (that) she would come. (她说她会来。)',
                'We believe (that) this is true. (我们相信这是真的。)',
                'He told me (that) you were here. (他告诉我你在这里。)'
            ],
            rules: [
                '宾语从句中that可省略',
                '主语从句中that不能省略',
                '表语从句中that不能省略',
                '同位语从句中that不能省略'
            ]
        },
        'one-substitution': {
            title: 'one/ones替代',
            description: 'one/ones用来替代前面提到的可数名词，避免重复。',
            examples: [
                'I don\'t like this book. I prefer the red one. (我不喜欢这本书。我更喜欢红色的那本。)',
                'These apples are sweet. Those ones are sour. (这些苹果是甜的。那些是酸的。)',
                'I need a pen. Do you have one? (我需要一支笔。你有吗？)',
                'Which dress do you like? The blue one. (你喜欢哪条裙子？蓝色的那条。)'
            ],
            rules: [
                'one替代单数可数名词',
                'ones替代复数可数名词',
                '不能替代不可数名词',
                '通常有形容词修饰：the red one'
            ]
        },
        'so-substitution': {
            title: 'so替代',
            description: 'so用来替代肯定的从句或句子，避免重复。',
            examples: [
                'Will it rain tomorrow? I think so. (明天会下雨吗？我想会的。)',
                'Is he coming to the party? I hope so. (他会来参加聚会吗？我希望如此。)',
                'Are you ready? I believe so. (你准备好了吗？我相信是的。)',
                'Will she pass the exam? I suppose so. (她会通过考试吗？我想会的。)'
            ],
            rules: [
                '用于think, hope, believe, suppose, expect等动词后',
                '替代肯定的从句内容',
                '否定形式：I don\'t think so',
                '不能说I think it'
            ]
        },
        'do-substitution': {
            title: 'do替代',
            description: 'do用来替代前面的动词，避免重复。',
            examples: [
                'He works harder than I do. (他比我工作更努力。)',
                'She likes music and so do I. (她喜欢音乐，我也是。)',
                'If you don\'t go, neither will I do. (如果你不去，我也不去。)',
                'You should study more than you do now. (你应该比现在学习更多。)'
            ],
            rules: [
                'do替代实义动词',
                '时态要与被替代动词一致',
                '用于比较句和并列句中',
                '避免动词的重复'
            ]
        },
        'adverbial-ellipsis': {
            title: '状语从句省略',
            description: '当状语从句的主语与主句主语相同，且含有be动词时，可省略主语和be动词。',
            examples: [
                'When (I was) young, I lived in Beijing. (我年轻时住在北京。)',
                'While (she was) reading, she fell asleep. (她读书时睡着了。)',
                'If (it is) possible, I will help you. (如果可能的话，我会帮助你。)',
                'Though (he was) tired, he continued working. (虽然累了，他继续工作。)'
            ],
            rules: [
                '主语相同时可省略从句主语',
                '含有be动词时可一起省略',
                '常见于时间、条件、让步状语从句',
                '省略后意思不变'
            ]
        },
        'if-any': {
            title: 'if any结构',
            description: 'if any表示"如果有的话"，用于否定或疑问语境。',
            examples: [
                'There are few mistakes, if any. (错误很少，如果有的话。)',
                'He has little money, if any. (他几乎没有钱，如果有的话。)',
                'Few people came, if any. (几乎没人来，如果有人来的话。)',
                'She rarely smiles, if ever. (她很少笑，如果笑的话。)'
            ],
            rules: [
                '用于few, little, rarely等否定词后',
                'if any = if there are any',
                'if ever = if it ever happens',
                '表示可能性很小'
            ]
        },
        'why-not': {
            title: 'why not结构',
            description: 'why not表示"为什么不呢"，用于建议或同意。',
            examples: [
                'Let\'s go swimming. Why not? (我们去游泳吧。为什么不呢？)',
                'Why not try a different approach? (为什么不试试不同的方法？)',
                'You could ask for help. Why not? (你可以寻求帮助。为什么不呢？)',
                'Why not call him now? (为什么不现在给他打电话？)'
            ],
            rules: [
                '表示同意建议：Why not?',
                '提出建议：Why not + 动词原形',
                '语气轻松、友好',
                '相当于Why don\'t you...?'
            ]
        },
        // 音标发音相关
        'vowel-i': {
            title: '长元音 /iː/',
            description: '高前元音，嘴唇微笑状，舌位高而前。',
            examples: [
                'see /siː/ (看见)',
                'tea /tiː/ (茶)',
                'key /kiː/ (钥匙)',
                'people /ˈpiːpl/ (人们)',
                'believe /bɪˈliːv/ (相信)'
            ],
            rules: [
                '发音时嘴角向两边拉开，呈微笑状',
                '舌尖抵下齿，舌前部抬高',
                '音长较长，要充分发出',
                '常见拼写：ee, ea, e, ie, ei'
            ]
        },
        'vowel-ɪ': {
            title: '短元音 /ɪ/',
            description: '高前元音，比/iː/舌位稍低，音长较短。',
            examples: [
                'sit /sɪt/ (坐)',
                'big /bɪɡ/ (大的)',
                'fish /fɪʃ/ (鱼)',
                'city /ˈsɪti/ (城市)',
                'women /ˈwɪmɪn/ (女人们)'
            ],
            rules: [
                '发音时嘴型比/iː/稍开',
                '舌位比/iː/稍低',
                '音长较短，发音轻快',
                '常见拼写：i, y, e'
            ]
        },
        'consonant-θ': {
            title: '清辅音 /θ/',
            description: '舌齿摩擦音，舌尖轻触上齿，气流摩擦而出。',
            examples: [
                'think /θɪŋk/ (思考)',
                'three /θriː/ (三)',
                'bath /bɑːθ/ (洗澡)',
                'birthday /ˈbɜːθdeɪ/ (生日)',
                'nothing /ˈnʌθɪŋ/ (没有什么)'
            ],
            rules: [
                '舌尖轻触上门齿',
                '气流从舌齿间摩擦而出',
                '不振动声带，为清辅音',
                '常见拼写：th'
            ]
        },
        'consonant-ð': {
            title: '浊辅音 /ð/',
            description: '舌齿摩擦音，发音方法与/θ/相同，但振动声带。',
            examples: [
                'this /ðɪs/ (这个)',
                'that /ðæt/ (那个)',
                'mother /ˈmʌðə/ (母亲)',
                'weather /ˈweðə/ (天气)',
                'breathe /briːð/ (呼吸)'
            ],
            rules: [
                '舌尖轻触上门齿',
                '气流从舌齿间摩擦而出',
                '振动声带，为浊辅音',
                '常见拼写：th'
            ]
        },
        'tip-th-sounds': {
            title: '/θ/ 和 /ð/ 发音技巧',
            description: '这两个音是中国学习者的发音难点，需要特别练习。',
            examples: [
                'think /θɪŋk/ vs this /ðɪs/',
                'thank /θæŋk/ vs than /ðæn/',
                'bath /bɑːθ/ vs bathe /beɪð/',
                'breath /breθ/ vs breathe /briːð/'
            ],
            rules: [
                '舌尖一定要伸出，轻触上齿',
                '/θ/不振动声带，/ð/振动声带',
                '不要用/s/和/z/代替',
                '多练习对比词组'
            ]
        },
        'tip-l-r-sounds': {
            title: '/l/ 和 /r/ 发音技巧',
            description: '这是亚洲学习者的另一个发音难点。',
            examples: [
                'light /laɪt/ vs right /raɪt/',
                'long /lɒŋ/ vs wrong /rɒŋ/',
                'collect /kəˈlekt/ vs correct /kəˈrekt/',
                'play /pleɪ/ vs pray /preɪ/'
            ],
            rules: [
                '/l/: 舌尖抵上齿龈，气流从舌侧流出',
                '/r/: 舌尖卷起，不接触任何部位',
                '注意舌头的不同位置和形状',
                '多练习最小对立词'
            ]
        }
    };

    };

    // 音标发音功能
    function playPhoneticSound(sound, button) {
        // 检查浏览器是否支持语音合成
        if (!('speechSynthesis' in window)) {
            alert('抱歉，您的浏览器不支持语音功能');
            return;
        }

        // 音标到示例单词的映射
        const soundToWord = {
            'i': 'see',
            'ɪ': 'sit',
            'e': 'bed',
            'æ': 'cat',
            'ɑ': 'car',
            'ɒ': 'hot',
            'ɔ': 'saw',
            'ʊ': 'book',
            'u': 'food',
            'ʌ': 'cup',
            'ə': 'about',
            'ɜ': 'bird',
            'eɪ': 'day',
            'aɪ': 'my',
            'ɔɪ': 'boy',
            'aʊ': 'how',
            'əʊ': 'go',
            'ɪə': 'here',
            'eə': 'hair',
            'ʊə': 'poor',
            'p': 'pen',
            'b': 'book',
            't': 'tea',
            'd': 'dog',
            'k': 'key',
            'ɡ': 'go',
            'f': 'fish',
            'v': 'very',
            'θ': 'think',
            'ð': 'this',
            's': 'see',
            'z': 'zoo',
            'ʃ': 'she',
            'ʒ': 'measure',
            'h': 'house',
            'tʃ': 'chair',
            'dʒ': 'job',
            'm': 'man',
            'n': 'no',
            'ŋ': 'sing',
            'l': 'love',
            'r': 'red',
            'w': 'water',
            'j': 'yes',
            'th-sounds': 'think this',
            'l-r-sounds': 'light right',
            'v-w-sounds': 'very worry',
            'vowel-length': 'ship sheep',
            'primary-stress': 'teacher',
            'secondary-stress': 'understand',
            'falling': 'I love English',
            'rising': 'Are you OK',
            'fall-rise': 'I think so'
        };

        // 获取要发音的单词
        const wordToSpeak = soundToWord[sound] || sound;

        // 视觉反馈
        const originalText = button.textContent;
        const originalBg = button.style.background;
        button.textContent = '🔊';
        button.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
        button.disabled = true;

        // 创建语音合成实例
        const utterance = new SpeechSynthesisUtterance(wordToSpeak);

        // 设置语音参数
        utterance.lang = 'en-US'; // 设置为美式英语
        utterance.rate = 0.8; // 语速稍慢，便于学习
        utterance.pitch = 1; // 正常音调
        utterance.volume = 1; // 最大音量

        // 尝试使用英语语音
        const voices = speechSynthesis.getVoices();
        const englishVoice = voices.find(voice =>
            voice.lang.startsWith('en') &&
            (voice.name.includes('Google') || voice.name.includes('Microsoft') || voice.name.includes('Alex'))
        );

        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        // 语音结束后恢复按钮状态
        utterance.onend = function() {
            button.textContent = originalText;
            button.style.background = originalBg || 'linear-gradient(135deg, #28a745, #20c997)';
            button.disabled = false;
        };

        // 语音出错时恢复按钮状态
        utterance.onerror = function(event) {
            console.error('语音合成出错:', event.error);
            button.textContent = originalText;
            button.style.background = originalBg || 'linear-gradient(135deg, #28a745, #20c997)';
            button.disabled = false;

            // 显示错误提示
            if (event.error === 'network') {
                alert('网络错误，请检查网络连接');
            } else {
                alert('语音播放失败，请重试');
            }
        };

        // 开始语音合成
        try {
            // 停止当前正在播放的语音
            speechSynthesis.cancel();

            // 稍微延迟后开始新的语音
            setTimeout(() => {
                speechSynthesis.speak(utterance);
            }, 100);
        } catch (error) {
            console.error('语音播放失败:', error);
            button.textContent = originalText;
            button.style.background = originalBg || 'linear-gradient(135deg, #28a745, #20c997)';
            button.disabled = false;
            alert('语音播放失败，请重试');
        }
    }

    // 备用发音函数（使用更简单的方法）
    function playSimpleSound(word, button) {
        if (!('speechSynthesis' in window)) {
            alert('您的浏览器不支持语音功能');
            return;
        }

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.7;

        // 简单的视觉反馈
        const originalText = button.textContent;
        button.textContent = '🔊';

        utterance.onend = () => {
            button.textContent = originalText;
        };

        speechSynthesis.speak(utterance);
    }

    // 语音初始化函数
    function initializeSpeech() {
        if ('speechSynthesis' in window) {
            // 预加载语音列表
            let voices = speechSynthesis.getVoices();

            // 如果语音列表为空，等待加载
            if (voices.length === 0) {
                speechSynthesis.addEventListener('voiceschanged', function() {
                    voices = speechSynthesis.getVoices();
                    console.log('可用语音:', voices.filter(v => v.lang.startsWith('en')));
                });
            } else {
                console.log('可用语音:', voices.filter(v => v.lang.startsWith('en')));
            }
        }
    }

    // 为播放按钮添加事件监听器
    document.addEventListener('DOMContentLoaded', function() {
        // 初始化语音功能
        initializeSpeech();

        // 为所有播放按钮添加点击事件
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('play-btn')) {
                const sound = e.target.getAttribute('data-sound');
                if (sound) {
                    playPhoneticSound(sound, e.target);
                }
            }
        });

        // 添加一个测试按钮的提示
        const phoneticSection = document.getElementById('phonetics');
        if (phoneticSection) {
            // 检查语音支持并显示提示
            if (!('speechSynthesis' in window)) {
                const warning = document.createElement('div');
                warning.style.cssText = `
                    background: #fff3cd;
                    border: 1px solid #ffeaa7;
                    color: #856404;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: center;
                `;
                warning.innerHTML = '⚠️ 您的浏览器不支持语音功能，建议使用Chrome、Edge或Safari浏览器';
                phoneticSection.insertBefore(warning, phoneticSection.firstChild);
            } else {
                const info = document.createElement('div');
                info.style.cssText = `
                    background: #d4edda;
                    border: 1px solid #c3e6cb;
                    color: #155724;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: center;
                `;
                info.innerHTML = `
                    🔊 <strong>发音功能使用说明：</strong><br>
                    • 点击音标旁边的小喇叭按钮即可听到发音<br>
                    • 首次使用可能需要等待几秒钟加载语音引擎<br>
                    • 建议使用Chrome、Edge或Safari浏览器以获得最佳体验<br>
                    • 如果没有声音，请检查浏览器音量设置
                `;
                phoneticSection.insertBefore(info, phoneticSection.firstChild);
            }
        }
    });

// 显示语法详情函数
function showGrammarDetails(type) {
    const data = allTenseData[type];
    if (!data) {
        // 如果没有找到具体数据，显示通用信息
        const modalContent = `
            <div class="grammar-details">
                <h2>${element.querySelector('h4')?.textContent || type}</h2>
                <div class="detail-section">
                    <h3>示例</h3>
                    <p>${element.querySelector('p')?.textContent || '暂无详细信息'}</p>
                </div>
            </div>
        `;
        modalBody.innerHTML = modalContent;
        modal.style.display = 'block';
        return;
    }

    const modalContent = `
        <div class="grammar-details">
            <h2>${data.title}</h2>
            <div class="detail-section">
                <h3>📝 定义</h3>
                <p class="description">${data.description}</p>
            </div>
            <div class="detail-section">
                <h3>📋 规则</h3>
                <ul class="rules-list">
                    ${data.rules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h3>💡 例句</h3>
                <ul class="example-list">
                    ${data.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
}

// 游戏系统功能
function initializeGameSystem() {
    // 游戏类型切换
    const gameBtns = document.querySelectorAll('.game-btn');
    const gameSections = document.querySelectorAll('.game-section');

    gameBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetGame = btn.getAttribute('data-game');

            // 移除所有活动状态
            gameBtns.forEach(b => b.classList.remove('active'));
            gameSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetGame).classList.add('active');
        });
    });

    // 初始化各种游戏
    initializeWordOrderGame();
    initializeMatchingGame();
    initializeClassificationGame();
    initializeTimelineGame();
}

// 句子排序游戏数据
const sentenceGameData = [
    {
        target: "I have been studying English for three years.",
        words: ["I", "have", "been", "studying", "English", "for", "three", "years"],
        hint: "现在完成进行时：have/has + been + 动词-ing"
    },
    {
        target: "She will be working when you arrive.",
        words: ["She", "will", "be", "working", "when", "you", "arrive"],
        hint: "将来进行时：will + be + 动词-ing"
    },
    {
        target: "The book that I bought yesterday is interesting.",
        words: ["The", "book", "that", "I", "bought", "yesterday", "is", "interesting"],
        hint: "定语从句：先行词 + 关系词 + 从句"
    }
];

let currentSentenceIndex = 0;
let draggedElement = null;

function initializeWordOrderGame() {
    // 初始化第一个句子
    loadNewSentence();

    // 绑定按钮事件
    const newSentenceBtn = document.getElementById('new-sentence');
    const checkOrderBtn = document.getElementById('check-order');
    const showHintBtn = document.getElementById('show-hint');

    if (newSentenceBtn) newSentenceBtn.addEventListener('click', loadNewSentence);
    if (checkOrderBtn) checkOrderBtn.addEventListener('click', checkSentenceOrder);
    if (showHintBtn) showHintBtn.addEventListener('click', showSentenceHint);
}

function loadNewSentence() {
    const sentence = sentenceGameData[currentSentenceIndex];

    // 显示目标句子（隐藏）
    const targetElement = document.getElementById('sentence-target');
    if (targetElement) {
        targetElement.textContent = "请将下面的单词排序组成正确的句子";
    }

    // 打乱单词顺序并显示在单词池中
    const shuffledWords = [...sentence.words].sort(() => Math.random() - 0.5);
    const wordPool = document.getElementById('word-pool');
    if (wordPool) {
        wordPool.innerHTML = '';

        shuffledWords.forEach(word => {
            const wordChip = document.createElement('div');
            wordChip.className = 'word-chip';
            wordChip.textContent = word;
            wordChip.draggable = true;

            // 添加拖拽事件
            wordChip.addEventListener('dragstart', handleDragStart);
            wordChip.addEventListener('dragend', handleDragEnd);

            wordPool.appendChild(wordChip);
        });
    }

    // 清空句子构建区域
    const sentenceSlots = document.getElementById('sentence-slots');
    if (sentenceSlots) {
        sentenceSlots.innerHTML = '';

        // 创建拖放区域
        sentenceSlots.addEventListener('dragover', handleDragOver);
        sentenceSlots.addEventListener('drop', handleDrop);
    }

    // 隐藏反馈
    const feedback = document.getElementById('order-feedback');
    if (feedback) {
        feedback.style.display = 'none';
    }
}

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (draggedElement) {
        // 将单词添加到句子构建区域
        const clonedWord = draggedElement.cloneNode(true);
        clonedWord.draggable = false;
        clonedWord.classList.remove('dragging');
        clonedWord.addEventListener('click', () => {
            // 点击移除单词
            clonedWord.remove();
        });

        e.currentTarget.appendChild(clonedWord);

        // 从单词池中移除原单词
        draggedElement.remove();
    }
}

function checkSentenceOrder() {
    const sentenceSlots = document.getElementById('sentence-slots');
    if (!sentenceSlots) return;

    const words = Array.from(sentenceSlots.children).map(chip => chip.textContent);
    const userSentence = words.join(' ');
    const targetSentence = sentenceGameData[currentSentenceIndex].target;

    const feedback = document.getElementById('order-feedback');
    if (feedback) {
        feedback.style.display = 'block';

        if (userSentence === targetSentence) {
            feedback.className = 'game-feedback show correct';
            feedback.innerHTML = '🎉 完全正确！<br>正确句子：' + targetSentence;

            // 移动到下一个句子
            setTimeout(() => {
                currentSentenceIndex = (currentSentenceIndex + 1) % sentenceGameData.length;
                loadNewSentence();
            }, 2000);
        } else {
            feedback.className = 'game-feedback show incorrect';
            feedback.innerHTML = '❌ 顺序不正确，请重新排列<br>你的答案：' + userSentence;
        }
    }
}

function showSentenceHint() {
    const hint = sentenceGameData[currentSentenceIndex].hint;
    const feedback = document.getElementById('order-feedback');
    if (feedback) {
        feedback.style.display = 'block';
        feedback.className = 'game-feedback show partial';
        feedback.innerHTML = '💡 提示：' + hint;
    }
}

// 占位符函数，待实现
function initializeMatchingGame() {
    console.log('配对游戏初始化');
}

function initializeClassificationGame() {
    console.log('分类游戏初始化');
}

function initializeTimelineGame() {
    console.log('时间线游戏初始化');
}

// 应用场景系统功能
function initializeApplicationSystem() {
    // 应用类型切换
    const appBtns = document.querySelectorAll('.app-btn');
    const appSections = document.querySelectorAll('.application-section');

    appBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetApp = btn.getAttribute('data-app');

            // 移除所有活动状态
            appBtns.forEach(b => b.classList.remove('active'));
            appSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetApp).classList.add('active');
        });
    });

    // 添加交互功能
    initializeWritingExamples();
    initializeSpeakingExamples();
    initializeExamTips();
    initializeBusinessExamples();
}

// 写作示例交互
function initializeWritingExamples() {
    // 为示例添加点击高亮功能
    const examples = document.querySelectorAll('.example-pair, .formality-levels, .narrative-example');

    examples.forEach(example => {
        example.addEventListener('click', () => {
            // 添加高亮效果
            example.style.transform = 'scale(1.02)';
            example.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';

            // 2秒后恢复
            setTimeout(() => {
                example.style.transform = '';
                example.style.boxShadow = '';
            }, 2000);
        });
    });
}

// 口语示例交互
function initializeSpeakingExamples() {
    // 为口语示例添加"播放"效果
    const speechExamples = document.querySelectorAll('.casual, .formal, .neutral, .informal');

    speechExamples.forEach(example => {
        example.addEventListener('click', () => {
            // 模拟语音播放效果
            example.style.backgroundColor = '#e3f2fd';
            example.style.borderLeft = '4px solid #2196f3';

            // 添加"播放中"提示
            const originalText = example.textContent;
            example.textContent = '🔊 ' + originalText;

            // 2秒后恢复
            setTimeout(() => {
                example.textContent = originalText;
                example.style.backgroundColor = '';
                example.style.borderLeft = '';
            }, 2000);
        });
    });
}

// 考试技巧交互
function initializeExamTips() {
    // 为考试技巧添加展开/收起功能
    const examCards = document.querySelectorAll('.exam-card');

    examCards.forEach(card => {
        const header = card.querySelector('h4');
        const content = card.querySelector('.exam-points');

        if (header && content) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const isExpanded = content.style.display !== 'none';

                if (isExpanded) {
                    content.style.display = 'none';
                    header.textContent = header.textContent.replace('🎓', '📖');
                } else {
                    content.style.display = 'block';
                    header.textContent = header.textContent.replace('📖', '🎓');
                }
            });
        }
    });
}

// 商务英语示例交互
function initializeBusinessExamples() {
    // 为商务模板添加复制功能
    const templates = document.querySelectorAll('.template-item, .phrase-category');

    templates.forEach(template => {
        template.addEventListener('click', () => {
            // 获取文本内容
            const text = template.textContent.trim();

            // 尝试复制到剪贴板
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showCopyNotification(template);
                }).catch(() => {
                    showCopyNotification(template, false);
                });
            } else {
                showCopyNotification(template, false);
            }
        });
    });
}

// 显示复制通知
function showCopyNotification(element, success = true) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: absolute;
        background: ${success ? '#4caf50' : '#f44336'};
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
        transform: translateY(-100%);
    `;
    notification.textContent = success ? '已复制!' : '点击选中文本';

    element.style.position = 'relative';
    element.appendChild(notification);

    // 1.5秒后移除
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 1500);
}

// 高级语法系统功能
function initializeAdvancedGrammarSystem() {
    // 高级语法类型切换
    const advancedBtns = document.querySelectorAll('.advanced-btn');
    const advancedSections = document.querySelectorAll('.advanced-section');

    advancedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetAdvanced = btn.getAttribute('data-advanced');

            // 移除所有活动状态
            advancedBtns.forEach(b => b.classList.remove('active'));
            advancedSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetAdvanced).classList.add('active');
        });
    });

    // 初始化各种高级功能
    initializeSentenceAnalyzer();
    initializeComplexExamples();
    initializeRhetoricExamples();
    initializeStyleComparisons();
    initializeAnalysisTools();
}

// 句子分析器
function initializeSentenceAnalyzer() {
    const analyzeBtn = document.getElementById('analyze-sentence');
    const sentenceInput = document.getElementById('sentence-input');
    const analysisResult = document.getElementById('analysis-result');

    if (analyzeBtn && sentenceInput) {
        analyzeBtn.addEventListener('click', () => {
            const sentence = sentenceInput.value.trim();
            if (sentence) {
                analyzeSentence(sentence);
                if (analysisResult) {
                    analysisResult.style.display = 'block';
                }
            } else {
                alert('请输入要分析的句子');
            }
        });
    }
}

// 分析句子功能
function analyzeSentence(sentence) {
    const structureBreakdown = document.getElementById('structure-breakdown');
    const grammarExplanation = document.getElementById('grammar-explanation');

    if (structureBreakdown) {
        // 简单的句子结构分析
        let analysis = '';

        if (sentence.includes('that') || sentence.includes('which') || sentence.includes('who')) {
            analysis += '🔍 检测到定语从句结构<br>';
        }
        if (sentence.includes('although') || sentence.includes('because') || sentence.includes('when')) {
            analysis += '🔍 检测到状语从句结构<br>';
        }
        if (sentence.includes('if') && (sentence.includes('would') || sentence.includes('could'))) {
            analysis += '🔍 检测到虚拟语气结构<br>';
        }
        if (sentence.includes('not only') || sentence.includes('never')) {
            analysis += '🔍 检测到倒装句结构<br>';
        }

        structureBreakdown.innerHTML = analysis || '🔍 这是一个简单句结构';
    }

    if (grammarExplanation) {
        grammarExplanation.innerHTML = `
            <strong>句子：</strong>${sentence}<br>
            <strong>长度：</strong>${sentence.split(' ').length} 个单词<br>
            <strong>复杂度：</strong>${getComplexityLevel(sentence)}
        `;
    }
}

// 获取句子复杂度
function getComplexityLevel(sentence) {
    const words = sentence.split(' ').length;
    const clauses = (sentence.match(/that|which|who|when|where|because|although|if/g) || []).length;

    if (words < 10 && clauses === 0) return '简单';
    if (words < 15 && clauses <= 1) return '中等';
    if (words < 20 && clauses <= 2) return '复杂';
    return '高度复杂';
}

// 复杂句式示例交互
function initializeComplexExamples() {
    const complexExamples = document.querySelectorAll('.complex-example');

    complexExamples.forEach(example => {
        example.addEventListener('click', () => {
            const sentence = example.getAttribute('data-sentence');
            if (sentence) {
                // 高亮显示句子结构
                highlightSentenceStructure(example);

                // 显示详细分析
                showDetailedAnalysis(sentence, example);
            }
        });
    });
}

// 高亮句子结构
function highlightSentenceStructure(example) {
    const clauses = example.querySelectorAll('.clause, .structure');

    clauses.forEach((clause, index) => {
        setTimeout(() => {
            clause.style.backgroundColor = '#ffeb3b';
            clause.style.transform = 'scale(1.05)';

            setTimeout(() => {
                clause.style.backgroundColor = '';
                clause.style.transform = '';
            }, 1000);
        }, index * 200);
    });
}

// 显示详细分析
function showDetailedAnalysis(sentence, example) {
    const analysisDiv = document.createElement('div');
    analysisDiv.className = 'detailed-analysis';
    analysisDiv.style.cssText = `
        margin-top: 15px;
        padding: 15px;
        background: #e3f2fd;
        border-radius: 8px;
        border-left: 4px solid #2196f3;
        font-size: 0.95rem;
    `;

    analysisDiv.innerHTML = `
        <strong>📊 句子分析：</strong><br>
        • 单词数量：${sentence.split(' ').length}<br>
        • 从句数量：${(sentence.match(/that|which|who|when|where|because|although|if/g) || []).length}<br>
        • 复杂度：${getComplexityLevel(sentence)}<br>
        <button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 5px 10px; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer;">关闭分析</button>
    `;

    // 移除之前的分析
    const existingAnalysis = example.querySelector('.detailed-analysis');
    if (existingAnalysis) {
        existingAnalysis.remove();
    }

    example.appendChild(analysisDiv);
}

// 修辞手法示例交互
function initializeRhetoricExamples() {
    const rhetoricItems = document.querySelectorAll('.rhetoric-item');

    rhetoricItems.forEach(item => {
        const examples = item.querySelectorAll('.example');

        examples.forEach(example => {
            example.addEventListener('click', () => {
                // 添加朗读效果
                example.style.backgroundColor = '#e8f5e8';
                example.style.transform = 'scale(1.02)';

                // 显示修辞效果说明
                const effectDiv = item.querySelector('.effect');
                if (effectDiv) {
                    effectDiv.style.backgroundColor = '#fff3e0';
                    effectDiv.style.transform = 'scale(1.02)';
                }

                setTimeout(() => {
                    example.style.backgroundColor = '';
                    example.style.transform = '';
                    if (effectDiv) {
                        effectDiv.style.backgroundColor = '';
                        effectDiv.style.transform = '';
                    }
                }, 2000);
            });
        });
    });
}

// 语言风格对比交互
function initializeStyleComparisons() {
    const formalityLevels = document.querySelectorAll('.formality-level');

    formalityLevels.forEach(level => {
        level.addEventListener('click', () => {
            // 高亮当前级别
            formalityLevels.forEach(l => l.style.opacity = '0.5');
            level.style.opacity = '1';
            level.style.transform = 'scale(1.02)';

            // 3秒后恢复
            setTimeout(() => {
                formalityLevels.forEach(l => {
                    l.style.opacity = '';
                    l.style.transform = '';
                });
            }, 3000);
        });
    });
}

// 分析工具交互
function initializeAnalysisTools() {
    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });

    // 示例句子点击分析
    const sampleItems = document.querySelectorAll('.sample-item');
    const analysisInput = document.getElementById('analysis-input');
    const startAnalysisBtn = document.getElementById('start-analysis');

    sampleItems.forEach(item => {
        item.addEventListener('click', () => {
            const sentence = item.getAttribute('data-sentence');
            if (analysisInput) {
                analysisInput.value = sentence;
                // 自动开始分析
                if (startAnalysisBtn) {
                    startAnalysisBtn.click();
                }
            }
        });
    });

    // 开始分析按钮
    if (startAnalysisBtn) {
        startAnalysisBtn.addEventListener('click', () => {
            const input = document.getElementById('analysis-input');
            const output = document.getElementById('analysis-output');

            if (input && input.value.trim()) {
                performDetailedAnalysis(input.value.trim());
                if (output) {
                    output.style.display = 'block';
                }
            } else {
                alert('请输入要分析的句子');
            }
        });
    }
}

// 执行详细分析
function performDetailedAnalysis(sentence) {
    // 结构分析
    const structureDiagram = document.getElementById('structure-diagram');
    if (structureDiagram) {
        structureDiagram.innerHTML = generateStructureDiagram(sentence);
    }

    // 成分分析
    const componentsBreakdown = document.getElementById('components-breakdown');
    if (componentsBreakdown) {
        componentsBreakdown.innerHTML = generateComponentsAnalysis(sentence);
    }

    // 语法解释
    const grammarExplanationDetail = document.getElementById('grammar-explanation-detail');
    if (grammarExplanationDetail) {
        grammarExplanationDetail.innerHTML = generateGrammarExplanation(sentence);
    }

    // 句式变化
    const sentenceVariations = document.getElementById('sentence-variations');
    if (sentenceVariations) {
        sentenceVariations.innerHTML = generateSentenceVariations(sentence);
    }
}

// 生成结构图
function generateStructureDiagram(sentence) {
    return `
        <div style="font-family: 'Courier New', monospace; line-height: 1.8;">
            <strong>句子：</strong>${sentence}<br><br>
            <strong>结构树：</strong><br>
            S (句子)<br>
            ├── NP (名词短语)<br>
            ├── VP (动词短语)<br>
            └── ... (其他成分)<br><br>
            <em>注：这是一个简化的结构示例</em>
        </div>
    `;
}

// 生成成分分析
function generateComponentsAnalysis(sentence) {
    const words = sentence.split(' ');
    let analysis = '<strong>词汇成分分析：</strong><br><br>';

    words.forEach((word, index) => {
        analysis += `<span style="background: #e3f2fd; padding: 2px 6px; margin: 2px; border-radius: 4px;">${word}</span> `;
        if ((index + 1) % 5 === 0) analysis += '<br>';
    });

    analysis += '<br><br><em>注：点击词汇可查看详细语法信息</em>';
    return analysis;
}

// 生成语法解释
function generateGrammarExplanation(sentence) {
    let explanation = `<strong>语法特点分析：</strong><br><br>`;

    explanation += `• <strong>句子长度：</strong>${sentence.split(' ').length} 个单词<br>`;
    explanation += `• <strong>复杂度：</strong>${getComplexityLevel(sentence)}<br>`;

    if (sentence.includes('that') || sentence.includes('which')) {
        explanation += `• <strong>定语从句：</strong>使用了关系代词连接<br>`;
    }

    if (sentence.includes('if')) {
        explanation += `• <strong>条件句：</strong>表达假设或条件<br>`;
    }

    explanation += `<br><em>这是基于关键词的简单分析，实际语法分析需要更复杂的算法。</em>`;

    return explanation;
}

// 生成句式变化
function generateSentenceVariations(sentence) {
    return `
        <strong>可能的句式变化：</strong><br><br>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>原句：</strong>${sentence}
        </div>
        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>被动语态：</strong>(需要根据具体句子结构转换)
        </div>
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>疑问句：</strong>(需要根据具体句子结构转换)
        </div>
        <div style="background: #fce4ec; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>否定句：</strong>(需要根据具体句子结构转换)
        </div>
        <br><em>注：句式转换需要考虑具体的语法规则和语义。</em>
    `;
}

// 对比学习系统功能
function initializeComparisonSystem() {
    // 对比类型切换
    const compBtns = document.querySelectorAll('.comp-btn');
    const compSections = document.querySelectorAll('.comparison-section');

    compBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetComp = btn.getAttribute('data-comp');

            // 移除所有活动状态
            compBtns.forEach(b => b.classList.remove('active'));
            compSections.forEach(s => s.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetComp).classList.add('active');
        });
    });

    // 初始化各种对比功能
    initializeChineseEnglishComparison();
    initializeConfusingGrammar();
    initializeSynonymousStructures();
}

// 中英对比功能
function initializeChineseEnglishComparison() {
    const comparisonItems = document.querySelectorAll('.comparison-item');

    comparisonItems.forEach(item => {
        item.addEventListener('click', () => {
            // 高亮对比效果
            const chineseStructure = item.querySelector('.chinese-structure');
            const englishStructure = item.querySelector('.english-structure');

            if (chineseStructure && englishStructure) {
                // 添加动画效果
                chineseStructure.style.transform = 'scale(1.02)';
                englishStructure.style.transform = 'scale(1.02)';
                chineseStructure.style.boxShadow = '0 4px 12px rgba(244, 67, 54, 0.3)';
                englishStructure.style.boxShadow = '0 4px 12px rgba(33, 150, 243, 0.3)';

                setTimeout(() => {
                    chineseStructure.style.transform = '';
                    englishStructure.style.transform = '';
                    chineseStructure.style.boxShadow = '';
                    englishStructure.style.boxShadow = '';
                }, 2000);
            }
        });
    });

    // 常见错误示例交互
    const mistakeItems = document.querySelectorAll('.mistake-item');

    mistakeItems.forEach(item => {
        const wrongExample = item.querySelector('.wrong-example');
        const correctExample = item.querySelector('.correct-example');

        if (wrongExample && correctExample) {
            wrongExample.addEventListener('click', () => {
                wrongExample.style.backgroundColor = '#ffcdd2';
                setTimeout(() => {
                    wrongExample.style.backgroundColor = '';
                    correctExample.style.backgroundColor = '#c8e6c9';
                    setTimeout(() => {
                        correctExample.style.backgroundColor = '';
                    }, 1500);
                }, 1000);
            });
        }
    });
}

// 易混淆语法功能
function initializeConfusingGrammar() {
    const confusingPairs = document.querySelectorAll('.confusing-pair');

    confusingPairs.forEach(pair => {
        const grammarOptions = pair.querySelectorAll('.grammar-option');

        grammarOptions.forEach(option => {
            option.addEventListener('click', () => {
                // 高亮选中的语法选项
                grammarOptions.forEach(opt => opt.style.opacity = '0.5');
                option.style.opacity = '1';
                option.style.transform = 'scale(1.02)';
                option.style.backgroundColor = '#e3f2fd';

                // 显示区分技巧
                const distinctionTip = pair.querySelector('.distinction-tip');
                if (distinctionTip) {
                    distinctionTip.style.backgroundColor = '#fff3e0';
                    distinctionTip.style.transform = 'scale(1.02)';
                }

                setTimeout(() => {
                    grammarOptions.forEach(opt => {
                        opt.style.opacity = '';
                        opt.style.transform = '';
                        opt.style.backgroundColor = '';
                    });
                    if (distinctionTip) {
                        distinctionTip.style.backgroundColor = '';
                        distinctionTip.style.transform = '';
                    }
                }, 3000);
            });
        });
    });
}

// 同义结构功能
function initializeSynonymousStructures() {
    // 同义词级别展示
    const synonymItems = document.querySelectorAll('.synonym-item');

    synonymItems.forEach(item => {
        item.addEventListener('click', () => {
            // 复制到剪贴板
            const text = item.textContent.replace(/基础|中级|高级|正式/, '').trim();

            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showCopyFeedback(item);
                });
            } else {
                showCopyFeedback(item, false);
            }
        });
    });

    // 句式转换示例
    const transformationGroups = document.querySelectorAll('.transformation-group');

    transformationGroups.forEach(group => {
        group.addEventListener('click', () => {
            const original = group.querySelector('.original');
            const transformed = group.querySelector('.transformed');

            if (original && transformed) {
                // 显示转换过程
                original.style.backgroundColor = '#ffcdd2';
                setTimeout(() => {
                    original.style.backgroundColor = '';
                    transformed.style.backgroundColor = '#c8e6c9';
                    setTimeout(() => {
                        transformed.style.backgroundColor = '';
                    }, 1500);
                }, 1000);
            }
        });
    });

    // 练习部分交互
    const showAlternativesBtns = document.querySelectorAll('.show-alternatives');

    showAlternativesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const alternatives = btn.nextElementSibling;
            if (alternatives) {
                if (alternatives.style.display === 'none' || !alternatives.style.display) {
                    alternatives.style.display = 'block';
                    btn.textContent = '隐藏替换方案';

                    // 逐个显示替换方案
                    const alternativeItems = alternatives.querySelectorAll('.alternative');
                    alternativeItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            item.style.transition = 'all 0.5s ease';

                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 100);
                        }, index * 200);
                    });
                } else {
                    alternatives.style.display = 'none';
                    btn.textContent = '显示替换方案';
                }
            }
        });
    });
}

// 显示复制反馈
function showCopyFeedback(element, success = true) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: absolute;
        background: ${success ? '#4caf50' : '#f44336'};
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
        transform: translateY(-100%);
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
    `;
    feedback.textContent = success ? '已复制!' : '复制失败';

    element.style.position = 'relative';
    element.appendChild(feedback);

    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 1500);
}

// 智能工具系统功能
function initializeToolsSystem() {
    initializeGrammarChecker();
    initializeRewriteTool();
}

// 语法检查器
function initializeGrammarChecker() {
    const checkBtn = document.getElementById('check-grammar');
    const clearBtn = document.getElementById('clear-text');
    const input = document.getElementById('grammar-check-input');
    const results = document.getElementById('grammar-results');
    const errorList = document.getElementById('error-list');

    if (checkBtn && input) {
        checkBtn.addEventListener('click', () => {
            const text = input.value.trim();
            if (text) {
                const errors = checkGrammar(text);
                displayGrammarErrors(errors, errorList, results);
            } else {
                alert('请输入要检查的文本');
            }
        });
    }

    if (clearBtn && input) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            if (results) {
                results.style.display = 'none';
            }
        });
    }
}

// 简单的语法检查函数
function checkGrammar(text) {
    const errors = [];

    // 简单的语法检查规则
    if (text.includes(' a apple')) {
        errors.push({
            type: '冠词错误',
            text: 'a apple',
            suggestion: 'an apple',
            explanation: '元音前应使用"an"'
        });
    }

    if (text.includes(' dont ') || text.includes(' cant ') || text.includes(' wont ')) {
        errors.push({
            type: '缩写错误',
            text: 'dont/cant/wont',
            suggestion: "don't/can't/won't",
            explanation: '缩写需要撇号'
        });
    }

    if (text.match(/\bi am go\b/i)) {
        errors.push({
            type: '时态错误',
            text: 'I am go',
            suggestion: 'I am going / I go',
            explanation: '进行时需要-ing形式'
        });
    }

    if (errors.length === 0) {
        errors.push({
            type: '检查完成',
            text: '',
            suggestion: '',
            explanation: '未发现明显的语法错误'
        });
    }

    return errors;
}

// 显示语法错误
function displayGrammarErrors(errors, errorList, results) {
    if (errorList && results) {
        let html = '';

        errors.forEach(error => {
            if (error.type === '检查完成') {
                html += `
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
                        <strong>✅ ${error.explanation}</strong>
                    </div>
                `;
            } else {
                html += `
                    <div style="background: #ffebee; padding: 15px; border-radius: 8px; border-left: 4px solid #f44336; margin-bottom: 10px;">
                        <strong>${error.type}:</strong> ${error.text}<br>
                        <strong>建议:</strong> ${error.suggestion}<br>
                        <em>${error.explanation}</em>
                    </div>
                `;
            }
        });

        errorList.innerHTML = html;
        results.style.display = 'block';
    }
}

// 改写工具
function initializeRewriteTool() {
    const generateBtn = document.getElementById('generate-rewrite');
    const copyBtn = document.getElementById('copy-rewrite');
    const input = document.getElementById('rewrite-input');
    const results = document.getElementById('rewrite-results');
    const suggestions = document.getElementById('rewrite-suggestions');

    if (generateBtn && input) {
        generateBtn.addEventListener('click', () => {
            const text = input.value.trim();
            const style = document.querySelector('input[name="rewrite-style"]:checked').value;

            if (text) {
                const rewritten = rewriteText(text, style);
                displayRewriteSuggestions(rewritten, suggestions, results);
            } else {
                alert('请输入要改写的句子');
            }
        });
    }

    if (copyBtn && suggestions) {
        copyBtn.addEventListener('click', () => {
            const text = suggestions.textContent;
            if (navigator.clipboard && text) {
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = '已复制!';
                    setTimeout(() => {
                        copyBtn.textContent = '复制结果';
                    }, 2000);
                });
            }
        });
    }
}

// 简单的改写函数
function rewriteText(text, style) {
    const suggestions = [];

    switch (style) {
        case 'formal':
            suggestions.push(text.replace(/can't/g, "cannot").replace(/don't/g, "do not"));
            suggestions.push("It should be noted that " + text.toLowerCase());
            break;
        case 'complex':
            suggestions.push("Given the fact that " + text.toLowerCase() + ", it becomes evident that...");
            suggestions.push("What is particularly noteworthy is that " + text.toLowerCase());
            break;
        case 'simple':
            suggestions.push(text.replace(/however/g, "but").replace(/therefore/g, "so"));
            suggestions.push(text.split('.')[0] + ". This is important.");
            break;
        case 'academic':
            suggestions.push("Research indicates that " + text.toLowerCase());
            suggestions.push("According to current understanding, " + text.toLowerCase());
            break;
        default:
            suggestions.push(text);
    }

    return suggestions;
}

// 显示改写建议
function displayRewriteSuggestions(suggestions, suggestionsElement, results) {
    if (suggestionsElement && results) {
        let html = '';

        suggestions.forEach((suggestion, index) => {
            html += `
                <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3; margin-bottom: 10px;">
                    <strong>建议 ${index + 1}:</strong><br>
                    ${suggestion}
                </div>
            `;
        });

        suggestionsElement.innerHTML = html;
        results.style.display = 'block';
    }
}

// 句子成分系统功能
function initializeSentenceComponents() {
    // 初始化切换按钮
    initializeComponentsToggle();

    // 初始化成分卡片交互
    initializeComponentCards();

    // 初始化句子分析交互
    initializeSentenceAnalysis();
}

// 切换按钮功能
function initializeComponentsToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const toggleContents = document.querySelectorAll('.toggle-content');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetToggle = btn.getAttribute('data-toggle');

            // 移除所有活动状态
            toggleBtns.forEach(b => b.classList.remove('active'));
            toggleContents.forEach(c => c.classList.remove('active'));

            // 添加活动状态
            btn.classList.add('active');
            const targetContent = document.getElementById(targetToggle);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// 成分卡片交互
function initializeComponentCards() {
    const componentCards = document.querySelectorAll('.component-card');

    componentCards.forEach(card => {
        card.addEventListener('click', () => {
            // 高亮效果
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';

            // 显示详细信息
            showComponentDetails(card);

            // 恢复效果
            setTimeout(() => {
                card.style.transform = '';
                card.style.boxShadow = '';
            }, 2000);
        });

        // 鼠标悬停效果
        card.addEventListener('mouseenter', () => {
            const examples = card.querySelectorAll('.example-item');
            examples.forEach((example, index) => {
                setTimeout(() => {
                    example.style.backgroundColor = '#e3f2fd';
                    example.style.transform = 'translateX(5px)';
                }, index * 100);
            });
        });

        card.addEventListener('mouseleave', () => {
            const examples = card.querySelectorAll('.example-item');
            examples.forEach(example => {
                example.style.backgroundColor = '';
                example.style.transform = '';
            });
        });
    });
}

// 显示成分详细信息
function showComponentDetails(card) {
    const componentType = card.getAttribute('data-component');
    const componentName = card.querySelector('h4').textContent;

    // 创建详细信息弹窗
    const modal = document.createElement('div');
    modal.className = 'component-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;

    modalContent.innerHTML = getComponentDetailContent(componentType, componentName);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // 添加关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: #e74c3c;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 6px;
        cursor: pointer;
    `;
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    modalContent.style.position = 'relative';
    modalContent.appendChild(closeBtn);
}

// 获取成分详细内容
function getComponentDetailContent(componentType, componentName) {
    const details = {
        'subject': {
            title: '主语详解',
            content: `
                <h3>${componentName}</h3>
                <p><strong>定义：</strong>句子中执行动作或被描述的对象，是句子的核心成分之一。</p>
                <h4>主语的特点：</h4>
                <ul>
                    <li>通常位于句子开头</li>
                    <li>与谓语动词在人称和数上保持一致</li>
                    <li>回答"谁"或"什么"的问题</li>
                </ul>
                <h4>主语的识别方法：</h4>
                <ol>
                    <li>找到谓语动词</li>
                    <li>问"谁"或"什么"执行这个动作</li>
                    <li>答案就是主语</li>
                </ol>
                <h4>常见错误：</h4>
                <p>❌ 主谓不一致：He have a book. <br>✅ 正确：He has a book.</p>
            `
        },
        'predicate': {
            title: '谓语详解',
            content: `
                <h3>${componentName}</h3>
                <p><strong>定义：</strong>说明主语做什么或主语是什么的部分，是句子的核心。</p>
                <h4>谓语的构成：</h4>
                <ul>
                    <li><strong>简单谓语：</strong>由一个动词构成</li>
                    <li><strong>复合谓语：</strong>由助动词/情态动词+动词构成</li>
                    <li><strong>系表结构：</strong>系动词+表语</li>
                </ul>
                <h4>谓语的时态变化：</h4>
                <p>谓语动词会根据时间发生变化，这就是我们要学习的时态。</p>
                <h4>常见错误：</h4>
                <p>❌ 时态错误：I am go to school. <br>✅ 正确：I go to school. / I am going to school.</p>
            `
        },
        'object': {
            title: '宾语详解',
            content: `
                <h3>${componentName}</h3>
                <p><strong>定义：</strong>动作的承受者或动作的结果。</p>
                <h4>宾语的类型：</h4>
                <ul>
                    <li><strong>直接宾语：</strong>直接承受动作的对象</li>
                    <li><strong>间接宾语：</strong>动作的间接承受者（通常是人）</li>
                    <li><strong>复合宾语：</strong>宾语+宾语补语</li>
                </ul>
                <h4>宾语的识别：</h4>
                <p>在谓语动词后问"什么"或"谁"，答案就是宾语。</p>
                <h4>双宾语结构：</h4>
                <p>I gave <span style="color: #e74c3c;">him</span> <span style="color: #27ae60;">a book</span>.<br>
                间接宾语(him) + 直接宾语(a book)</p>
            `
        },
        'complement': {
            title: '补语详解',
            content: `
                <h3>${componentName}</h3>
                <p><strong>定义：</strong>补充说明主语或宾语的成分，使句意完整。</p>
                <h4>补语的类型：</h4>
                <ul>
                    <li><strong>主语补语（表语）：</strong>补充说明主语</li>
                    <li><strong>宾语补语：</strong>补充说明宾语</li>
                </ul>
                <h4>常见的补语形式：</h4>
                <ul>
                    <li>名词：We call him <span style="color: #f39c12;">Tom</span>.</li>
                    <li>形容词：The news made me <span style="color: #f39c12;">happy</span>.</li>
                    <li>不定式：I want you <span style="color: #f39c12;">to come</span>.</li>
                </ul>
                <h4>识别技巧：</h4>
                <p>补语与被补充的词之间有逻辑上的主谓关系。</p>
            `
        }
    };

    return details[componentType]?.content || '<p>暂无详细信息</p>';
}

// 句子分析交互
function initializeSentenceAnalysis() {
    const words = document.querySelectorAll('.word');
    const analysisItems = document.querySelectorAll('.analysis-item');

    words.forEach(word => {
        word.addEventListener('click', () => {
            // 高亮相同成分的词
            const componentType = word.getAttribute('data-component');
            highlightSameComponents(componentType);

            // 显示成分说明
            showComponentExplanation(componentType, word);
        });
    });

    // 句型模式交互
    const patternItems = document.querySelectorAll('.pattern-item');
    patternItems.forEach(item => {
        item.addEventListener('click', () => {
            // 高亮效果
            item.style.backgroundColor = '#e3f2fd';
            item.style.transform = 'scale(1.05)';

            // 显示句型详解
            showPatternExplanation(item);

            setTimeout(() => {
                item.style.backgroundColor = '';
                item.style.transform = '';
            }, 2000);
        });
    });
}

// 高亮相同成分
function highlightSameComponents(componentType) {
    // 清除之前的高亮
    document.querySelectorAll('.word').forEach(w => {
        w.style.boxShadow = '';
        w.style.transform = '';
    });

    // 高亮相同成分
    document.querySelectorAll(`[data-component="${componentType}"]`).forEach(word => {
        word.style.boxShadow = '0 0 10px rgba(33, 150, 243, 0.8)';
        word.style.transform = 'scale(1.1)';
    });

    // 2秒后恢复
    setTimeout(() => {
        document.querySelectorAll('.word').forEach(w => {
            w.style.boxShadow = '';
            w.style.transform = '';
        });
    }, 2000);
}

// 显示成分说明
function showComponentExplanation(componentType, element) {
    const explanations = {
        'subject': '主语：句子中执行动作或被描述的对象',
        'predicate': '谓语：说明主语做什么或主语是什么',
        'object': '宾语：动作的承受者或动作的结果',
        'complement': '补语：补充说明主语或宾语的成分',
        'adverbial': '状语：修饰动词、形容词或整个句子的成分'
    };

    // 创建提示框
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: absolute;
        background: #2c3e50;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        z-index: 1000;
        pointer-events: none;
        max-width: 200px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    tooltip.textContent = explanations[componentType] || '未知成分';

    // 定位提示框
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 10) + 'px';

    document.body.appendChild(tooltip);

    // 2秒后移除
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 2000);
}

// 显示句型详解
function showPatternExplanation(patternItem) {
    const formula = patternItem.querySelector('.pattern-formula').textContent;
    const name = patternItem.querySelector('.pattern-name').textContent;

    const explanations = {
        'S + V': '最简单的句型，只有主语和谓语。常用于描述状态或不及物动词。',
        'S + V + O': '最常见的句型，表示主语对宾语执行某个动作。',
        'S + V + C': '主系表结构，用系动词连接主语和表语，描述主语的状态或特征。',
        'S + V + O + O': '双宾语结构，有直接宾语和间接宾语，常用于给予类动词。',
        'S + V + O + C': '复合宾语结构，宾语补语补充说明宾语的状态或特征。'
    };

    // 创建说明框
    const explanation = document.createElement('div');
    explanation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 400px;
        border-left: 4px solid #607d8b;
    `;

    explanation.innerHTML = `
        <h4 style="margin-top: 0; color: #2c3e50;">${formula} - ${name}</h4>
        <p style="color: #7f8c8d; line-height: 1.6;">${explanations[formula] || '暂无详细说明'}</p>
        <button onclick="this.parentNode.remove()" style="background: #607d8b; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; float: right;">关闭</button>
    `;

    document.body.appendChild(explanation);

    // 3秒后自动关闭
    setTimeout(() => {
        if (explanation.parentNode) {
            explanation.parentNode.removeChild(explanation);
        }
    }, 3000);
}
