// Функція генерує випадкові числа в діапазоні від 100 до 1000
function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const totalCount = evenCount + oddCount;
    const evenPercentage = (evenCount / totalCount) * 100;
    const oddPercentage = (oddCount / totalCount) * 100;
  
    console.log(`Кількість згенерованих чисел: ${totalCount}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
  }
