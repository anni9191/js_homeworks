var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для валідації email адрес, де '^[a-zA-Z0-9]+' — Початок адреси повинен містити принаймні один символ (літера або цифра).
// '(\.[a-zA-Z0-9]+)?' — Необов'язковий другий сегмент, який також може містити крапку, після якої йдуть літери або цифр.
// '@[a-zA-Z]+' — Символ @, за яким слідує домен, що складається тільки з літер.
// '\.[a-zA-Z]{2,}$' — Крапка, після якої йде домен верхнього рівня, що складається принаймні з двох літер.
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

var trustedEmails = arr
    .map(obj => obj.email) // Витягуємо email адреси
    .filter(email => emailRegex.test(email)); // Фільтруємо email адреси за допомогою регулярного виразу

console.log(trustedEmails);
