function randomNum(length) {
    let text = '';
    if (length < 5) {
      length = 5;
    }
    const len = Math.floor(Math.random() * (length - 4 + 1) + 4);
    for (let i = 0; i < len; i++) {
      text += Math.floor(Math.random() * 10);
    }
    return text;
  }
  
  module.exports = { randomNum };
  