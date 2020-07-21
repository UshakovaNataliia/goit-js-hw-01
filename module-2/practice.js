// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['Джаз', 'Блюз'];
// console.log(styles);
// styles.push('Рок-н-ролл')
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)]=('Классика');
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);


// Отсортировать по убыванию
// let arr = [5, 2, 1, -10, 8];
// arr.sort().reverse(); //вариант 1
// arr.sort((a, b) => b-a); - !условие сортировки (вариант 2)
// console.log(arr);
// or
// const arr = [5,2,1,-10,8]; const narr = []; for (let i = 0; i < arr.length; i++){  if(arr[i] < arr[i+1]){narr.push(arr[i]);}else{narr.unshift(arr[i]);}}


// Функция, которая вернет максимальное число из переденных ей аргументов
// const max = function() {
// Variant1 
   // console.log(Math.max(...arguments));
    
// Variant2 
// let max =0;
//  for(let el of [...arguments]) {
//  el > max ? max = el : '';
//  }
//  console.log(max)
// }
//    max(1,2,3,4,5,6,7,8)

   
// ___________Вебинар №4_____________________

// 1.
// function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//  }
 
//  ask(
//    "Вы согласны?",
//    function() { alert("Вы согласились."); },
//    function() { alert("Вы отменили выполнение."); }
//  );
// 1) Function declaration => expression
// 2)If => тернарником
// 3) В вызове сделать стрелочные функции

// const ask = function(question, yes, no) {
// confirm(question) ? yes() : no();
// }
//  ask(
//    "Вы согласны?",
// () => alert("Вы согласились."),
// () => alert("Вы отменили выполнение.")
//  );

// 2.
// Напишите функцию hello(), которая при вызове будет принимать переменную 
// name (например, «Василий») и
// выводить строку (в нашем случае «Привет, Василий»).  
// В случае отсутствующего аргумента выводить «Привет, гость»

// console.log();
// const hello = function (ask = 'Василий') {
//    console.log('Привет, ' , ask)
//  } 
//  hello();

// 3.
// Создайте функцию repeat(str, n), которая возвращает строку, 
// состоящую из n повторений строки str. n — по умолчанию 2, 
// str — пустая строка

//  const repeat = function(str=' ', n=2) {
//    console.log(str.repeat(n));
//  }
// repeat('hello');