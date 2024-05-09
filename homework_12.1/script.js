const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName) {
    //Шукаємо клієнта з вказаною назвою
    const client = company.clients.find(client => client.name === companyName);
    
    //Перевіряємо, чи знайдено клієнта
    if (client && client.type === 'subCompany') {
      return client;
    } else {
      return "Дочірня компанія не знайдена";
    }
  }
  
  //Можна використовувати:
  console.log(findValueByKey('Клієнт 1')); //Виведе інформацію про 'Клієнт 1'
  console.log(findValueByKey('Клієнт 2')); //Виведе інформацію про 'Клієнт 2'
  console.log(findValueByKey('Неіснуюча Компанія')); //Виведе "Дочірня компанія не знайдена"
  