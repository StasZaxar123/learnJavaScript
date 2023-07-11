let message;
message = 'Hello123'; // сохранить строку 'Hello' в переменной с именем message

let message1;
message1 = 'Hello!';
alert(message1); // показывает содержимое переменной

let user = 'John', age0 = 25, message2 = 'Hello2';

let user2 = 'John';
let age2 = 25;
let message3 = 'Hello2';

let message4;
message4 = 'Hello4';
message5 = 'World5'; // значение изменено
alert(message5);

let hello = 'Hello world!';
let message6;
// копируем значение 'Hello world' из переменной hello в переменную message
message6 = hello;
// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message6); // Hello world!

const myBirthday = '18.04.1982';
//Переменные const, называются «константами». Их нельзя изменить.
//const myBirthday = '01.01.2001'; ошибка, константу нельзя перезаписать!

//практика использования констант в качестве псевдонимов для трудно запоминаемых значений
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...когда нам нужно выбрать цвет
let color4 = COLOR_ORANGE;
alert(color4);

//Задача 1
let name = "Джон";
let admin;
admin = name;
alert(admin);//"Джон"

//Задача 2
let NameMyPlanet = "Земля"; //let ourPlanetName = "Земля";
let CurrentUser = "Текущий посетитель"; //let currentUserName = "Джон";

//Task 3
const BIRTHDAY = '18.04.1982';
//BIRTHDAY использовать заглавные буквы т.к. значение известно до выполнения скрипта и не меняется
const age = someCode(BIRTHDAY)
//age нижнем регистре т.к. сегодня у нас один возраст, а через год уже совсем другой.
