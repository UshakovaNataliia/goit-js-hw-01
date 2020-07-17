//________________task-1________________

// let name = "«Генератор зашитного поля»";
// let price = 1000;
// price = 2000;
// let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(message);



//________________task-2________________

// let total = 100;
// let ordered = 50;
// ordered = 130;
// ordered = 80;
// const check = ordered < total;

// if (check) {
// 	console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
// 	alert("На складе недостаточно товаров!");
// }



//________________task-3________________

// const ADMIN_PASSWORD = "jqueryismyjam";
// const password = prompt("Введите пароль");
// let message;

// if (password === ADMIN_PASSWORD) {
//     message = "Добро пожаловать!";
// alert(message);
// } else if (password == null) {
//     message = "Отменено пользователем!";
// alert(message);  
// } else {
//     message = "Доступ запрещен, неверный пароль!";
// alert(message);
// }



//________________task-4________________

// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let message;
// const droids = prompt('Количество дронов');
// const numberOfDroids = Number(droids);

// if (numberOfDroids) {
//  totalPrice = numberOfDroids * pricePerDroid;
//  if (totalPrice > credits) {
//     message = "Недостаточно средств на счету!";
//  }
//  if (totalPrice <= credits) {
//     credits -= numberOfDroids * pricePerDroid;
//     message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов`;
//  }
// } else if (droids === null) {
//    message = "Отменено пользователем!";
// } else {
//    message = "Введите число!";
// }
// alert(message);



//________________task-5________________

// let cost;
// const country = prompt('Введите Вашу страну');

// switch (country.toLocaleLowerCase(2)) {
//   case 'китай':
//     cost = 100;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`); 
//     break;

//   case 'чили':
//     cost = 250;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`); 
//     break;

//   case 'австралия':
//     cost = 170;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`); 
//     break;

//   case 'индия':
//     cost = 80;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`); 
//     break;

//   case 'ямайка':
//     cost = 120;
//     alert(`Доставка в ${country} будет стоить ${cost} кредитов`); 
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }



// ________________ task-6________________

// let input;
// let total = 0;
// let message;

// while (input !== null) {
// input = prompt("Введите число");
// !isNaN(input) ? (total += +input) : message = 'Было введено не число, попробуйте еще раз';
// message = `Общая сумма чисел равна ${total}`;
// } 
// alert(message);