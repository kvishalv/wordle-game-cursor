# 🎮 Wordle Game

A fully functional web-based Wordle game built with HTML, CSS, and JavaScript. Guess the 5-letter word in 6 attempts or fewer!

![Wordle Game](https://img.shields.io/badge/Game-Wordle-green) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Features

- **Classic Wordle Gameplay**: 6 attempts to guess a 5-letter word
- **Visual Feedback**: Color-coded hints for each letter
  - 🟩 **Green**: Correct letter in correct position
  - 🟨 **Yellow**: Correct letter in wrong position
  - ⬜ **Gray**: Letter not in the word
- **Interactive Keyboard**: On-screen QWERTY keyboard with visual feedback
- **Word Validation**: Comprehensive dictionary with 1000+ valid words
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Beautiful transitions and visual effects
- **New Game**: Start fresh with a new random word

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local development server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wordle-game-cursor.git
   cd wordle-game-cursor
   ```

2. **Start the local server**
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

### Alternative: Direct File Access
Simply open `index.html` directly in your web browser (some features may be limited due to CORS restrictions).

## 🎮 How to Play

1. **Start the Game**: The game begins with a randomly selected 5-letter word
2. **Make Your Guess**: Type a 5-letter word using the on-screen keyboard or your physical keyboard
3. **Submit**: Press ENTER or click the ENTER button to submit your guess
4. **Analyze Feedback**: Use the color-coded feedback to make your next guess:
   - **Green tiles**: Letter is correct and in the right position
   - **Yellow tiles**: Letter is correct but in the wrong position
   - **Gray tiles**: Letter is not in the word
5. **Win or Lose**: Guess the word in 6 attempts or fewer to win!

## 🎨 Game Features

### Visual Design
- Modern, clean interface with gradient background
- Smooth animations for letter entry and feedback
- Responsive layout that adapts to different screen sizes
- Color-coded keyboard that updates based on previous guesses

### Game Mechanics
- **Word List**: Over 1000 valid 5-letter words
- **Random Selection**: Each game features a different random word
- **Attempt Tracking**: Clear indication of remaining attempts
- **Game Over States**: Win/lose detection with appropriate messaging
- **New Game**: Easy reset to start a fresh game

### Keyboard Support
- **Physical Keyboard**: Full keyboard support for typing
- **Virtual Keyboard**: Click-to-type on-screen keyboard
- **Special Keys**: ENTER to submit, BACKSPACE to delete
- **Visual Feedback**: Keyboard keys change color based on letter status

## 🛠️ Technical Details

### File Structure
```
wordle-game-cursor/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript game logic
└── README.md           # This file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox/grid, animations, and responsive design
- **Vanilla JavaScript**: No external dependencies, pure JavaScript implementation

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Game Rules

1. **Word Length**: All words are exactly 5 letters long
2. **Valid Words**: Only words from the game's dictionary are accepted
3. **Attempts**: You have exactly 6 attempts to guess the word
4. **Feedback**: Each guess provides color-coded feedback for each letter
5. **No Hints**: The game doesn't provide additional hints beyond the color feedback

## 🔧 Customization

### Adding New Words
Edit the `wordList` array in `script.js` to add more words:

```javascript
this.wordList = [
    'ABOUT', 'ABOVE', 'ABUSE', // ... existing words
    'NEWWORD', 'ANOTHER'       // ... your new words
];
```

### Styling Changes
Modify `style.css` to customize:
- Colors and themes
- Animations and transitions
- Layout and spacing
- Typography

### Game Mechanics
Adjust game parameters in `script.js`:
- `maxAttempts`: Change number of allowed attempts
- Word length: Modify the 5-letter constraint
- Feedback timing: Adjust animation durations

## 🐛 Troubleshooting

### Common Issues

**Game not loading**
- Ensure all files are in the same directory
- Check browser console for JavaScript errors
- Try refreshing the page

**Keyboard not working**
- Ensure JavaScript is enabled in your browser
- Check that the page is served from a web server (not file://)

**Styling issues**
- Clear browser cache and refresh
- Check that `style.css` is loading correctly

## 📱 Mobile Support

The game is fully responsive and works great on mobile devices:
- Touch-friendly keyboard buttons
- Responsive grid layout
- Optimized for both portrait and landscape orientations
- Smooth touch interactions

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Bug Reports**: Report any issues you encounter
2. **Feature Requests**: Suggest new features or improvements
3. **Code Contributions**: Submit pull requests for bug fixes or new features
4. **Documentation**: Help improve this README or add code comments

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the original Wordle game by Josh Wardle
- Built with modern web technologies
- Designed for accessibility and user experience

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about the problem

---

**Enjoy playing Wordle! 🎉**

*Happy guessing!*