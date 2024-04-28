function myFunctionIsNaN(value) {
    //Проверяем является ли значение, которое мы передаем не числом, т е нашим NaN 
    return typeof value === "number" && isNaN(value);
}

//Например, как мы можем использовать:
console.log(myFunctionIsNaN("1988")); // false
console.log(myFunctionIsNaN(NaN)); //true
console.log(myFunctionIsNaN("something")); // false
