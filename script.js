class WordleGame {
    constructor() {
        this.wordList = [
            'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
            'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
            'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
            'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD',
            'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW',
            'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD',
            'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRASS', 'BRAVE', 'BREAD', 'BREAK', 'BREED',
            'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE', 'CALIF',
            'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP',
            'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN',
            'CLEAR', 'CLICK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH', 'COAST', 'COULD', 'COUNT',
            'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN',
            'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY',
            'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS',
            'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE',
            'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT',
            'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT',
            'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH',
            'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FROST', 'FRUIT',
            'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND',
            'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS',
            'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN',
            'IDEAL', 'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES',
            'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE',
            'LEAST', 'LEAVE', 'LEGAL', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL',
            'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA',
            'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED',
            'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE',
            'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE',
            'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER',
            'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH',
            'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'PLAYS', 'PLAZA', 'PLOT', 'PLUG', 'PLUS',
            'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE',
            'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE',
            'RAPID', 'RATIO', 'REACH', 'READY', 'REALM', 'REBEL', 'REFER', 'RELAX', 'REPAY', 'REPLY',
            'RIGHT', 'RIGID', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL',
            'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SETUP', 'SEVEN', 'SHALL',
            'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK',
            'SHOOT', 'SHORT', 'SHOWN', 'SIDED', 'SIGHT', 'SILLY', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED',
            'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNAKE', 'SNOW',
            'SOLAR', 'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED',
            'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START',
            'STATE', 'STEAM', 'STEEL', 'STEEP', 'STEER', 'STEPS', 'STICK', 'STILL', 'STOCK', 'STONE',
            'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR',
            'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEETH', 'TERRY',
            'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK',
            'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER', 'TIMES', 'TITLE',
            'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREAT',
            'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST',
            'TRUTH', 'TWICE', 'TWIST', 'TYLER', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER',
            'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL',
            'VOCAL', 'WASTE', 'WATCH', 'WATER', 'WAVES', 'WAYS', 'WEIRD', 'WELSH', 'WHEEL', 'WHERE',
            'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE',
            'WORST', 'WORTH', 'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
        ];
        
        this.currentWord = '';
        this.currentGuess = '';
        this.guesses = [];
        this.attempts = 0;
        this.maxAttempts = 6;
        this.gameOver = false;
        this.won = false;
        
        this.initializeGame();
        this.setupEventListeners();
    }
    
    initializeGame() {
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.currentGuess = '';
        this.guesses = [];
        this.attempts = 0;
        this.gameOver = false;
        this.won = false;
        
        this.createGameBoard();
        this.createKeyboard();
        this.updateAttempts();
        this.clearMessage();
    }
    
    createGameBoard() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        
        for (let row = 0; row < this.maxAttempts; row++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'row';
            rowElement.id = `row-${row}`;
            
            for (let col = 0; col < 5; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.id = `cell-${row}-${col}`;
                rowElement.appendChild(cell);
            }
            
            gameBoard.appendChild(rowElement);
        }
    }
    
    createKeyboard() {
        const keyboard = document.getElementById('keyboard');
        keyboard.innerHTML = '';
        
        const keyboardLayout = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
        ];
        
        keyboardLayout.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.className = 'keyboard-row';
            
            row.forEach(key => {
                const keyElement = document.createElement('button');
                keyElement.className = 'key';
                keyElement.textContent = key;
                keyElement.id = `key-${key}`;
                
                if (key === 'ENTER' || key === 'BACKSPACE') {
                    keyElement.classList.add('wide');
                }
                
                keyElement.addEventListener('click', () => this.handleKeyPress(key));
                rowElement.appendChild(keyElement);
            });
            
            keyboard.appendChild(rowElement);
        });
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (this.gameOver) return;
            
            const key = e.key.toUpperCase();
            
            if (key === 'ENTER') {
                this.submitGuess();
            } else if (key === 'BACKSPACE') {
                this.removeLetter();
            } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
                this.addLetter(key);
            }
        });
        
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.initializeGame();
        });
    }
    
    addLetter(letter) {
        if (this.currentGuess.length < 5) {
            this.currentGuess += letter;
            this.updateCurrentRow();
        }
    }
    
    removeLetter() {
        if (this.currentGuess.length > 0) {
            this.currentGuess = this.currentGuess.slice(0, -1);
            this.updateCurrentRow();
        }
    }
    
    updateCurrentRow() {
        const rowIndex = this.attempts;
        const row = document.getElementById(`row-${rowIndex}`);
        
        for (let i = 0; i < 5; i++) {
            const cell = document.getElementById(`cell-${rowIndex}-${i}`);
            if (i < this.currentGuess.length) {
                cell.textContent = this.currentGuess[i];
                cell.classList.add('filled');
            } else {
                cell.textContent = '';
                cell.classList.remove('filled');
            }
        }
    }
    
    submitGuess() {
        if (this.currentGuess.length !== 5) {
            this.showMessage('Please enter a 5-letter word!', 'error');
            return;
        }
        
        if (!this.wordList.includes(this.currentGuess)) {
            this.showMessage('Not a valid word!', 'error');
            return;
        }
        
        this.guesses.push(this.currentGuess);
        this.processGuess();
        
        if (this.currentGuess === this.currentWord) {
            this.won = true;
            this.gameOver = true;
            this.showMessage('Congratulations! You won!', 'success');
            this.showGameOver();
        } else if (this.attempts >= this.maxAttempts - 1) {
            this.gameOver = true;
            this.showMessage(`Game Over! The word was: ${this.currentWord}`, 'error');
            this.showGameOver();
        } else {
            this.attempts++;
            this.currentGuess = '';
            this.updateAttempts();
        }
    }
    
    processGuess() {
        const guess = this.currentGuess;
        const word = this.currentWord;
        const result = [];
        
        // Create a copy of the word to track used letters
        const wordLetters = word.split('');
        
        // First pass: mark correct letters
        for (let i = 0; i < 5; i++) {
            if (guess[i] === word[i]) {
                result[i] = 'correct';
                wordLetters[i] = null; // Mark as used
            }
        }
        
        // Second pass: mark present letters
        for (let i = 0; i < 5; i++) {
            if (result[i] === 'correct') continue;
            
            const letterIndex = wordLetters.indexOf(guess[i]);
            if (letterIndex !== -1) {
                result[i] = 'present';
                wordLetters[letterIndex] = null; // Mark as used
            } else {
                result[i] = 'absent';
            }
        }
        
        // Update visual feedback
        this.updateRowFeedback(this.attempts, result);
        this.updateKeyboardFeedback(guess, result);
    }
    
    updateRowFeedback(rowIndex, result) {
        for (let i = 0; i < 5; i++) {
            const cell = document.getElementById(`cell-${rowIndex}-${i}`);
            cell.classList.add(result[i]);
        }
    }
    
    updateKeyboardFeedback(guess, result) {
        for (let i = 0; i < 5; i++) {
            const key = document.getElementById(`key-${guess[i]}`);
            const currentClass = result[i];
            
            // Only update if the new status is better (correct > present > absent)
            if (!key.classList.contains('correct')) {
                key.classList.remove('present', 'absent');
                key.classList.add(currentClass);
            }
        }
    }
    
    updateAttempts() {
        document.getElementById('attempts').textContent = `Attempts: ${this.attempts}/${this.maxAttempts}`;
    }
    
    showMessage(message, type) {
        const messageElement = document.getElementById('game-message');
        messageElement.textContent = message;
        messageElement.className = `game-message ${type}`;
        
        if (type === 'error') {
            setTimeout(() => this.clearMessage(), 2000);
        }
    }
    
    clearMessage() {
        const messageElement = document.getElementById('game-message');
        messageElement.textContent = '';
        messageElement.className = 'game-message';
    }
    
    showGameOver() {
        const overlay = document.createElement('div');
        overlay.className = 'game-over';
        overlay.innerHTML = `
            <div class="game-over-content">
                <h2>${this.won ? '🎉 You Won!' : '😞 Game Over'}</h2>
                <p>${this.won ? 'Great job!' : `The word was: ${this.currentWord}`}</p>
                <button onclick="this.parentElement.parentElement.remove(); game.initializeGame();">Play Again</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    handleKeyPress(key) {
        if (this.gameOver) return;
        
        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BACKSPACE') {
            this.removeLetter();
        } else {
            this.addLetter(key);
        }
    }
}

// Initialize the game when the page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new WordleGame();
});
