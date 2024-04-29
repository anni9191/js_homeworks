// Функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
function pad(str, symbol, count, addToStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string') {
      throw new Error('Перші два аргументи повинні бути рядками');
    }
  
    if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
      throw new Error('Третій аргумент повинен бути не від\'ємним цілим числом');
    }
  
    if (typeof addToStart !== 'boolean') {
      throw new Error('Четвертий аргумент повинен бути логічним значенням');
    }
  
    // Визначаємо, скільки символів потрібно додати
    const missingChars = Math.max(0, count - str.length);
    
    // Формуємо рядок символів, який потрібно додати
    const padding = symbol.repeat(missingChars);
  
    // Додаємо символи до початку або кінця рядка в залежності від значення addToStart
    return addToStart ? padding + str : str + padding;
  }
  
  // Наприклад:
  console.log(pad('qwerty', '+', 6, true)); // "+qwerty"
  console.log(pad('qwerty', '+', 6, false)); // "qwerty+"
  