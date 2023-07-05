"use strict"; // последующий код работает в современном режиме
/*
(function() {
	'use strict';

	...ваш код...
})()
*/
alert("Я JavaScript!");
alert('Мир');
/* Закомментировали код - временно отключили участок кода
alert (3+
	4
	+	10)
*/
alert('Hello');
// Это комментарий
[1, 2].forEach(alert);// And it is comment
/*
It is многострочный comments
*/
let message;
message = 'Hello123'; // сохранить строку 'Hello' в переменной с именем message

let message1;
message1 = 'Hello!';
alert(message); // показывает содержимое переменной

let user = 'John', age = 25, message2 = 'Hello2';

let user2 = 'John';
let age2 = 25;
let message3 = 'Hello2';

let message4;
message4 = 'Hello4';
message5 = 'World5'; // значение изменено
alert(message4);

let hello = 'Hello world!';
let message6;
// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;
// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message6); // Hello world!

const myBirthday = '18.04.1982';
//Переменные const, называются «константами». Их нельзя изменить.
//const myBirthday = '01.01.2001'; ошибка, константу нельзя перезаписать!
