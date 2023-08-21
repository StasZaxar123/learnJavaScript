//Логические операторы

// || (ИЛИ)
result = a || b;

//булевыми значениями.
alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false

// Если значение не логического типа, то оно к нему приводится
//Например, число 1 будет воспринято как true, а 0 – как false:
if (1 || 0) { // работает как if( true || false )
	alert('truthy!');
}

let hour = 9;
if (hour < 10 || hour > 18) {
	alert('Офис закрыт.');
}

let hour1 = 12;
let isWeekend = true;
if (hour < 10 || hour1 > 18 || isWeekend) {
	alert('Офис закрыт.'); // это выходной
}

alert(null || 1); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно,возвращается последнее значение

//&& (И)

alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false

let hour2 = 12;
let minute = 30;
if (hour2 == 12 && minute == 30) {
	alert('The time is 12:30');
}

if (1 && 0) { // вычисляется как true && false
	alert("не сработает, так как результат ложный");
}

// И «&&» находит первое ложное значение
result = value1 && value2 && value3;

//Когда все значения верны, возвращается последнее
alert(1 && 2 && 3); // 3

// Оператор НЕ представлен восклицательным знаком !.
result = !value;
// Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.
alert(!true); // false
alert(!0); // true
//В частности, двойное НЕ !! используют для преобразования значений к логическому типу:
alert(!!"non-empty string"); // true
alert(!!null); // false
//=
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

// Task1
alert(null || 2 || undefined);//2

// Task2
alert(alert(1) || 2 || alert(3));//2 -> 1, 2

//Task3
alert(1 && null && 2);//null


//Task4
alert(alert(1) && alert(2));//1, undefined.

// Task5
alert(null || 2 && 3 || 4);//4 _>3
// Приоритет оператора && выше, чем ||, поэтому он выполнится первым.
// Результат 2 && 3 = 3, поэтому выражение приобретает вид:
// null || 3 || 4
// Теперь результатом является первое истинное значение: 3.

//Task6
let age
if (age >= 14 && age <= 90);

//Task7
if (-1 || 0) alert('first');// Результат -1 || 0 = -1, в логическом контексте true
if (-1 && 0) alert('second');//-1 && 0 = 0,  в логическом контексте false
if (null || -1 && 1) alert('third');// вычисления: null || -1 && 1  ->  null || 1  ->  1

//Task8

let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
	let pass = prompt('Пароль?', '');

	if (pass === 'Я главный') {
		alert('Здравствуйте!');
	} else if (pass === '' || pass === null) {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}

} else if (userName === '' || userName === null) {
	alert('Отменено');
} else {
	alert("Я вас не знаю");
}