//Типы данных
// Не будет ошибкой
let message = "hello";
message = 123456;

//Number (+-9007199254740991) 
let n = 123;
n = 12.345;
alert(n);

alert(1 / 0); // Infinity
alert(Infinity); // Infinity
alert("не число" / 2); // NaN, такое деление является ошибкой
//Значение NaN «прилипчиво». Любая математическая операция с NaN возвращает NaN:
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("не число" / 2 - 1); // NaN

//Тип BigInt дает возможность работать с целыми числами произвольной длины.>(+-9007199254740991) 
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//String(строка) должна быть заключена в кавычки\
//В JavaScript существует три типа кавычек.
let str = "Двойные";
let str2 = 'Одинарные';
let phrase = `Обратные`;//позволяют встраивать переменные ${str}`;

let name = "Иван";
alert(`Привет, ${name}`);// Вставим переменную = Привет, Иван!
alert(`результат: ${1 + 2 + 3 + 4 + 5}`); //Вставим выражение = результат: 15

//boolean (Булевый тип) - может принимать только два значения: true (истина) и false (ложь).
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater);// true (результатом сравнения будет "да")

//Значение <null>
let age = null; //указано, что значение переменной age неизвестно.

// Значение <undefined> - «значение не было присвоено».
let age1;
alert(age1); // выведет "undefined"

let age3 = 123;
age3 = undefined;
alert(age3);// "undefined"
/*Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения,
а undefined – для проверок, была ли переменная назначена.
*/

//Тип object (объект) – особенный.
//В объектах  хранят коллекции данных или более сложные структуры.
//Тип symbol (символ) используется для создания уникальных идентификаторов в объектах.

//Оператор typeof возвращает тип аргумента.
//Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
typeof 4 // Выведет "number"
typeof(4) // Также выведет "number"
typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"

//Вызов typeof x возвращает строку с именем типа:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2) Это официально признанная ошибка в typeof
typeof alert // "function"  (3)

//Task 1
let name1 = "Ilya";
alert (`hello ${1}`);// hello 1
alert (`hello ${"name"}`);//hello name
alert (`hello ${name1}`);//hello Ilya