// 方向箭头数组 - 使用CSS类名
const directions = ['up', 'down', 'left', 'right'];

// 颜色数组
const colors = ['green', 'purple', 'red', 'blue'];

// 游戏状态
let gameStarted = false;
let currentDirections = [];
let currentColorSequences = [];
let fishPool = [];
let draggedFish = null;

// 语音合成功能
function speakMessage(message) {
    // 检查浏览器是否支持语音合成
    if ('speechSynthesis' in window) {
        // 停止当前正在播放的语音
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(message);

        // 设置语音参数
        utterance.lang = 'zh-CN'; // 中文
        utterance.rate = 0.9; // 语速稍慢一点
        utterance.pitch = 1.1; // 音调稍高一点，更活泼
        utterance.volume = 0.8; // 音量

        // 尝试选择中文语音
        const voices = window.speechSynthesis.getVoices();
        const chineseVoice = voices.find(voice =>
            voice.lang.includes('zh') || voice.lang.includes('CN')
        );
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }

        // 播放语音
        window.speechSynthesis.speak(utterance);
    } else {
        console.log('浏览器不支持语音合成功能');
    }
}

// 初始化语音功能
function initializeSpeech() {
    if ('speechSynthesis' in window) {
        // 在移动设备上，需要用户交互后才能使用语音合成
        // 预加载语音列表
        window.speechSynthesis.getVoices();
    }
}

// 确保语音列表加载完成
window.speechSynthesis.onvoiceschanged = function() {
    // 语音列表更新后可以重新设置语音
};



// 打乱数组的函数
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 生成网格的函数
function generateGrid() {
    const grid = document.getElementById('gameGrid');
    grid.innerHTML = ''; // 清空现有内容

    // 生成随机方向序列（第一行用）
    currentDirections = shuffleArray(directions);

    // 为第一列的每个格子生成4种颜色的不同排列
    currentColorSequences = [];
    for (let i = 0; i < 4; i++) {
        currentColorSequences.push(shuffleArray(colors));
    }

    // 生成5x5网格
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;

            // 第一个格子 (0,0) - 对角线
            if (row === 0 && col === 0) {
                cell.className += ' diagonal-cell';
                const directionText = document.createElement('span');
                directionText.className = 'direction-text';
                directionText.textContent = '方向';
                cell.appendChild(directionText);
            }
            // 第一行的其他格子 (0,1-4) - 显示方向
            else if (row === 0 && col > 0) {
                const direction = document.createElement('div');
                direction.className = `direction ${currentDirections[col - 1]}`;
                cell.appendChild(direction);
            }
            // 第一列的其他格子 (1-4,0) - 显示4个颜色圆点横向排列
            else if (col === 0 && row > 0) {
                const dotsContainer = document.createElement('div');
                dotsContainer.className = 'color-dots-container';

                // 为当前行创建4个颜色圆点
                const currentRowColors = currentColorSequences[row - 1];
                currentRowColors.forEach(color => {
                    const dot = document.createElement('div');
                    dot.className = `color-dot color-${color}`;
                    dotsContainer.appendChild(dot);
                });

                cell.appendChild(dotsContainer);
            }
            // 游戏区域格子 - 添加拖放支持
            else {
                cell.className += ' game-cell';
                cell.addEventListener('dragover', handleDragOver);
                cell.addEventListener('drop', handleDrop);
            }

            grid.appendChild(cell);
        }
    }
}

// 创建小鱼元素
function createFish(color, direction) {
    const fish = document.createElement('div');
    fish.className = `fish fish-${color} fish-${direction}`;
    fish.draggable = true;
    fish.dataset.color = color;
    fish.dataset.direction = direction;

    // 所有小鱼都使用同一个emoji
    fish.innerHTML = `<span class="fish-emoji">🐠</span>`;

    // 添加拖拽事件
    fish.addEventListener('dragstart', handleDragStart);
    fish.addEventListener('dragend', handleDragEnd);

    return fish;
}

// 生成所有小鱼 - 根据实际需求
function generateFishPool() {
    const fishContainer = document.getElementById('fishPool');
    if (!fishContainer) {
        // 创建小鱼池容器
        const container = document.createElement('div');
        container.id = 'fishPool';
        container.className = 'fish-pool';
        document.querySelector('.container').appendChild(container);
    }

    const pool = document.getElementById('fishPool');
    pool.innerHTML = '';
    fishPool = [];

    // 根据网格实际需求生成小鱼
    for (let row = 1; row < 5; row++) {
        for (let col = 1; col < 5; col++) {
            // 获取该位置需要的方向（来自第一行）
            const requiredDirection = currentDirections[col - 1];
            // 获取该位置需要的颜色（来自第一列对应行的对应位置）
            const requiredColor = currentColorSequences[row - 1][col - 1];

            // 创建对应的小鱼
            const fish = createFish(requiredColor, requiredDirection);
            fishPool.push(fish);
            pool.appendChild(fish);
        }
    }

    // 打乱小鱼池中的小鱼顺序，增加游戏难度
    const fishElements = Array.from(pool.children);
    const shuffledFish = shuffleArray(fishElements);
    pool.innerHTML = '';
    shuffledFish.forEach(fish => pool.appendChild(fish));
}

// 拖拽开始
function handleDragStart(e) {
    draggedFish = e.target;
    e.target.style.opacity = '0.5';
}

// 拖拽结束
function handleDragEnd(e) {
    e.target.style.opacity = '1';
    draggedFish = null;
}

// 拖拽悬停
function handleDragOver(e) {
    e.preventDefault();
}

// 放置小鱼
function handleDrop(e) {
    e.preventDefault();

    if (!draggedFish || !e.target.classList.contains('game-cell')) {
        return;
    }

    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    // 检查是否放置正确
    if (isCorrectPlacement(draggedFish, row, col)) {
        // 正确放置
        e.target.innerHTML = '';
        e.target.appendChild(draggedFish.cloneNode(true));
        e.target.classList.add('correct');

        // 从鱼池中移除
        draggedFish.remove();

        // 播放成功语音
        speakMessage("哇！恭喜你呀！杨晏清小朋友你太棒啦，你成功啦~~");

        // 检查是否游戏完成
        checkGameComplete();
    } else {
        // 错误放置，显示提示
        e.target.classList.add('incorrect');
        setTimeout(() => {
            e.target.classList.remove('incorrect');
        }, 1000);

        // 播放失败语音
        speakMessage("好可惜呀杨晏清，差一点就成功了呢，请多点耐心哦，继续加油！");
    }
}

// 检查放置是否正确
function isCorrectPlacement(fish, row, col) {
    const fishColor = fish.dataset.color;
    const fishDirection = fish.dataset.direction;

    // 检查方向是否正确（与第一行对应列的方向一致）
    const expectedDirection = currentDirections[col - 1];
    if (fishDirection !== expectedDirection) {
        return false;
    }

    // 检查颜色是否正确（与第一列对应行的对应位置颜色一致）
    const expectedColor = currentColorSequences[row - 1][col - 1];
    if (fishColor !== expectedColor) {
        return false;
    }

    return true;
}

// 检查游戏是否完成
function checkGameComplete() {
    const completedCells = document.querySelectorAll('.game-cell.correct');

    if (completedCells.length === 16) {
        setTimeout(() => {
            // alert('恭喜！杨晏清小朋友自己完成了所有小鱼游戏完成！');
        speakMessage("恭喜！杨晏清小朋友自己完成了所有小鱼的游戏！继续加油");
        }, 500);
    }
}

// 开始游戏
function startGame() {
    generateGrid();
    generateFishPool();
    gameStarted = true;

    // 更新按钮文字
    const button = document.querySelector('.refresh-btn');
    button.textContent = '重新开始';

    // 播放欢迎语音，同时激活移动设备的语音功能
    setTimeout(() => {
        speakMessage("杨晏清，游戏开始啦！把小鱼放到正确的位置吧！");
    }, 500);
}

// 页面加载时生成初始网格
document.addEventListener('DOMContentLoaded', function() {
    generateGrid();
    initializeSpeech();
});

// 添加触摸事件支持（移动端）
document.addEventListener('touchstart', function() {}, {passive: true});
