// Об'єкт та його властивості
var services = {
    "Групова екскурсія": "25 EUR",
    "Eкскурсія для міні-групи": "50 EUR",
    "Персональна екскурсія": "120 EUR",
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                total += parseFloat(this[service]);
            }
        }
        return total;
    },
    minPrice: function() {
        let min = Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                min = Math.min(min, parseFloat(this[service]));
            }
        }
        return min;
    },
    maxPrice: function() {
        let max = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                max = Math.max(max, parseFloat(this[service]));
            }
        }
        return max;
    }
};

// Послуги, які можуть додаватися по ходу роботи:
services['Тематична екскурсія'] = "200 EUR";

// Виводимо результати через консоль
console.log("Загальна вартість екскурсій: " + services.price() + " EUR");
console.log("Мінімальна вартість екскурсії: " + services.minPrice() + " EUR");
console.log("Максимальна вартість екскурсії: " + services.maxPrice() + " EUR");

