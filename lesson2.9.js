//Операторы сравнения

/*
Больше/меньше: a > b, a < b.
Больше/меньше или равно: a >= b, a <= b.
Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==.
Один знак равенства a = b означал бы присваивание.
Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
*/

//Все операторы сравнения возвращают значение логического типа:
//true,false

alert(2 > 1);//true
alert(2 == 1);//false
alert(2 != 1);// true

let result = 5 > 4;
alert(result);//true

// Сравнение строк
//Строки сравниваются посимвольно в лексикографическом порядке.
alert('Я' > 'А'); // true
alert('Коты' > 'Кода'); // true
alert('Сонный' > 'Сон'); // true
/*
примерах выше сравнение 'Я' > 'А' завершится на первом шаге,
тогда как строки 'Коты' и 'Кода' будут сравниваться посимвольно:
К равна К.
о равна о.
т больше, чем д. На этом сравнение заканчивается. Первая строка больше.
Используется кодировка Unicode, а не настоящий алфавит
*/

//Сравнение разных типов

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

//Строгое сравнение
//Использование обычного сравнения == может вызывать проблемы
alert( 0 == false ); // true
alert( '' == false ); // true
//поэтому используют оператор строгого неравенства 
alert( 0 === false ); // false, так как сравниваются разные типы

//Сравнение с null и undefined
alert( null === undefined ); // false
alert( null == undefined ); // true

//Странный результат сравнения null и 0
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//Несравненное значение undefined
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


//Как избежать проблем
/*
Относитесь очень осторожно к любому сравнению с undefined/null, 
кроме случаев строгого равенства ===.

Не используйте сравнения >= > < <= с переменными,
которые могут принимать значения null/undefined, разве что вы полностью уверены в том, что делаете.
Если переменная может принимать эти значения, то добавьте для них отдельные проверки.
*/

//Task1
/*
5 > 4 = true
"ананас" > "яблоко" = true -> false. "а" меньше, чем "я"
"2" > "12" = true -> т.к. "2" больше, чем первый символ второй "1".
undefined == null = true
undefined === null = false
null == "\n0\n" → false Аналогично (4)
null === +"\n0\n" → false Строгое сравнение разных типов.
*/