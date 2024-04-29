function myFuncIsNaN(value) {

    // Перевірка, чи аргумент є числом
    if (typeof value !== 'number') {
        return false;
    }
    
    // Перевірка, чи є аргумент NaN
    // NaN не дорівнює нічому, навіть самому собі, тому NaN !== NaN
    return value !== value;
}

// Напріклад
console.log(myFuncIsNaN(NaN)); // true
console.log(myFuncIsNaN("someinfo")); // false
console.log(myFuncIsNaN(1988)); // false
