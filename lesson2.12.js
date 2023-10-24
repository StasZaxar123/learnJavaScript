// Операторы нулевого слияния и присваивания: '??', '??='

let user;
alert(user ?? "Аноним"); // Аноним (user не существует)

let user1 = "Иван";
alert(user1 ?? "Аноним"); // Иван (user1 существует)

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

