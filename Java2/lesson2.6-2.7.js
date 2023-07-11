// Взаимодействие: alert, prompt, confirm

//alert - показывает сообщение.
alert('alert');// окно с кнопкой ОК

//prompt - показывает сообщение и запрашивает ввод текста от пользователя
// Синтаксис: result = prompt(title,[default]);
//Квадратные скобки вокруг означают, что параметр факультативный, необязательный.
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old`);

//confirm - question и двумя кнопками: OK и Отмена.
//Результат – true, если нажата кнопка OK. В других случаях – false.
//Синтаксис: result = confirm(question);
let isBoss = confirm('Are you the Boss here?');
alert(isBoss);// true, если нажата OK

//Task 1
let name = prompt('What is you name?', "anonymous");
alert(`Hi ${name}`);

//Преобразование типов

//Строковое преобразование
let value = true;
alert(typeof value);//boolean
value = String(value);//теперь value это строка "true"
alert(typeof value);// string

//Численное преобразование
alert("6" / "2");// 3, строки преобразуются в числа

let str = "123";
alert(typeof str);// string
let num = Number(str);// становится числом 123
alert(typeof num);// number

let age1 = Number("Любая строка вместо числа");
alert(age1);// NaN, преобразование не удалось

//Правила численного преобразования:
alert(Number("   123   		")); // 123
alert(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
alert(Number(null));// 0
alert(Number(true));        // 1
alert(Number(false));       // 0
alert(Number(undefined));// NaN

//Логическое преобразование

// Правило преобразования:
// 0, null, undefined, NaN, ""	false
// любое другое значение	true

alert(Boolean(1));// true
alert(Boolean(0));// false
alert(Boolean("Привет!"));// true
alert(Boolean(""));// false
alert(Boolean("0")); // true
alert(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)




