// 1. Перебрать все элементы и получить новый модифицированный массив
// Используя цикл:

let names = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNames = [];
for (let i = 0, totalNames = names.length; i < totalNames; i = i + 1) {
    upperCaseNames[i] = names[i].toUpperCase();
}
// Без цикла:

let namesS = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNamesS = namesS.map(name => name.toUpperCase());
// Примечание: если вы используете map, вы не можете ввести break или continue или return
// во время цикла. Для этого случая вы должны использовать every или some.

//=======================================================================================
// 2. Перебрать все элементы и выполнить действие
// Используя циклы:
let namesSS = ["Jack", "Jecci", "Ram", "Tom"];
function print(name) {
    console.log(name);
}
for (let i = 0, totalNames = namesSS.length; i < totalNames; i = i + 1) {
    print(namesSS[i])
}

// без цикла
let namesSSS = ["Jack", "Jecci", "Ram", "Tom"];
namesSSS.forEach(name => print(name));

//=======================================================================================
// 3. Фильтрация массива
// Используя стандартный цикл for:

function isOdd(n) {
    return n % 2;
}

let numbers = [1, 2, 3, 4, 5];
let odd = [];
for (let i = 0, total = numbers.length; i < total; i = i + 1) {
    let number = numbers[i];
    if (isOdd(number)) {
        odd.push(number);
    }
}

// Использование filter:
let numbersS = [1, 2, 3, 4, 5, 6, 7]
let oddS = numbersS.filter(n => n % 2); // single line

//=======================================================================================
// 4. Создание вывода с элементами массива
// Сумма чисел:

let numbersSSS = [1, 2, 3, 4, 5]
let resultS = 0;
for (let i = 0, total = numbersSSS.length; i < total; i = i + 1) {
    resultS = resultS + numbersSSS[i];
}

// Использование reduce:
let numbersSSSS = [1, 2, 3, 4, 5, 6, 7];
function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Приведенный выше код может быть еще более упрощенным:
let numbersCC = [1, 2, 3, 4, 5, 6, 7, 10];
let resultCC = numbersCC.reduce((acc, val) => acc + val, 0);

//=======================================================================================
// 5. Проверка, содержит ли массив значение
let namesCC = ["ram", "raj", "rahul"];
for (let i = 0, totalNames = namesCC.length; i < totalNames; i = i + 1) {
    if (namesCC[i] === "rahul") {
        console.log("%c found rahul", "color:red");
    }
}

// Использование some:
let namesCCC = ["ram", "raj", "rahul"];
let isRahulPresent = namesCCC.some(name => name === "rahul");
if (isRahulPresent) {
    console.log("%c found rahul", "color:red");
}
// %c в операторе console применяет стиль к тексту консоли.

//=======================================================================================
// 6. Проверить, соответствует ли каждый элемент в массиве условию
// Используя цикл for:

let numCC = [1, 2, 3, 4, 5, 0];
for (let i = 0, total = numCC.length; i < total; i = i + 1) {
    if (numCC <= 0) {
        console.log("0 present in array");
    }
}

// Использование every:
let numCCC = [1, 2, 3, 4, 5, 0];
let isZeroFree = numCCC.every(e => e > 0);
if (!isZeroFree) {
    console.log("0 present in array");
}
