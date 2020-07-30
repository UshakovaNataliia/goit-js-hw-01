'use strict';

// 1)Создать масив в котором запишется каждый элемент исходного масива *2;
// const numbers = [1, 2, 3, 4, 5];
// const mul = numbers.map(acc => acc * 2);
// console.log(mul);
// 2)Создать масив в котором поочерёдно перечисляется длина элементов исходного масива
// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let quantity = arr.map(acc => acc.length, []);
// console.log(quantity);
// 3)Посчитайте все лайки пользователей
// const tweets = [
//        { id: "000", likes: 5, tags: ["js", "nodejs"] },
//        { id: "001", likes: 2, tags: ["html", "css"] },
//        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//        { id: "003", likes: 8, tags: ["css", "react"] },
//        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//      ];
// const likeSum = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// console.log(likeSum);
// 4)Найдите все обьекты у которых есть тег 'js'(массив tweets);
// const getTags = tweets.filter(acc => acc.tags.includes('js'), {});
// console.log(getTags);
// 5)Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
// let numbers = [1, 2, 3, 4, 5, 6]; 
// 1 вариант 
// const a = numbers.filter((x) => x % 2 !==0);
// const sum = a.reduce((x,value) => x + value, 0);
// console.log(sum);
// 2 вариант
// let a = numbers.reduce((acc, value) => {value%2 !== 0 ? acc+=value : ''; return acc}, 0);
// console.log(a);
// 3 вариант
// const fn = function (...arr) {
//      let sum = arr.reduce((acc, el) => {
//           el%2!==0 ? acc+=el :  '';
//           return acc
//       }, 0);
//    return sum
//     };
//   console.log(fn(1, 2, 3, 4, 5))
  
// 6)Отсортируйте масив по возрасту юзеров;
// let items = [
//   {name: "Миша", age: 23},
//   {name: "Вася", age: 44},
//   {name: "Саша", age: 2},
//   {name: "Рома", age: 99},
//   {name: "Ашот", age: 19}
// ];
// console.log(items.sort((a, b) => a.age - b.age));

// 7) Замените каждый елемент массива на 0; (Метод fill)
// let x = [1, 2, 3, "a", "b", "c"]; 
// console.log(x.fill(0));
// 8) Проверьте есть ли хотя бы один элемент больше 30? Верните true/false
//  const arr = [10, 20, 30, 40];
//  const findNumber = arr.some(number => number > 30);
//  console.log(findNumber);
// 9) Найдите короля района
// let items = [
//   {name: "Миша", age: 23 , isTheKingOfNeighbourhood: false},
//   {name: "Вася", age: 44 , isTheKingOfNeighbourhood: false},
//   {name: "Саша", age: 2 , isTheKingOfNeighbourhood: false},
//   {name: "Рома", age: 99 , isTheKingOfNeighbourhood: false},
//   {name: "Ашот", age: 19 , isTheKingOfNeighbourhood: true}];
//   const findKing = items.filter(item => item.isTheKingOfNeighbourhood);
//   console.log(findKing);
// 10) Поменяйте статус юзера на "неактивен", если daysInactive больше 10;
//   const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: true },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];

// 11) Создайте ф-цию которая принимает строку и возвращает её записанную "Заборчиком" (ПрИвЕт)

