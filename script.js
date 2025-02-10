function convertRoman() {
    const roman = document.getElementById('romanInput').value.toUpperCase();  // Kiritilgan qiymatni katta harflarga aylantiramiz
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let total = 0;
    let prevValue = 0;
  
    // Rim raqamini o'ngdan chapga qarab tahlil qilamiz
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentChar = roman[i];
      const currentValue = romanValues[currentChar];
  
      if (!currentValue) { 
        document.getElementById('result').innerHTML = "Noto'g'ri rim raqami!";
        return;
      }
  
      // Agar kichik raqam katta raqamdan oldin kelsa, ayiramiz
      if (currentValue < prevValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
  
      prevValue = currentValue;  // Oldingi qiymatni yangilaymiz
    }
  
    document.getElementById('result').innerHTML = `Oddiy raqam: ${total}`;
  }
  