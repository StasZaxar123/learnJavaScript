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
let name = prompt('What is you name?', "Hi anonymous");
alert(`Hi ${name}`);