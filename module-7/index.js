// Задание 1

// let categories = document.querySelector('ul#categories').children.length;
// console.log(`В списке ${categories} категории`);
// let items = document.querySelectorAll('.item');
// items.forEach(item => console.log(`Категория: ${item.children[0].textContent}
// Количество элементов: ${item.querySelector('ul').children.length} `));



// Задание 2

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// let ul = document.querySelector('ul#ingredients');
// ingredients.forEach(el => ul.appendChild(document.createElement('li')).textContent=el);

// console.log(ul);




// Задание 3

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   alt: 'White and Black Long Fur Cat',
  // },
  // {
  //   url:
  //     'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  // },
  // {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// // Вариант без insertAdjacentHTML()
// const gallery = document.querySelector('#gallery');

// const img = image => {
// const li = document.createElement('li');
// const imageItem = document.createElement('img');

// imageItem.setAttribute('src', image.url);
// imageItem.setAttribute('alt', image.alt);
// imageItem.classList.add('img');
// li.appendChild(imageItem);
//   return li;
// }
// const imgList = images.map(image => img(image));
// gallery.append(...imgList);
// console.log(gallery);

// // Вариант с insertAdjacentHTML()

// const gallery = document.querySelector('#gallery');
// let image = images.map(el => `<li><img src="${el.url}" alt="${el.alt}" class="img"></li>`).join('');
// const cards = gallery.insertAdjacentHTML("beforeend", image);
// console.log(gallery);



// Задание 4
  
// const deletedNumber = document.querySelector('button[data-action="decrement"]');
// const addedNumber = document.querySelector('button[data-action="increment"]');
// const counterValue = document.querySelector("#value");

// deletedNumber.addEventListener("click", decrement => {counterValue.textContent -= 1});
// addedNumber.addEventListener("click", increment => {counterValue.textContent = Number(counterValue.textContent) + 1});

// // Почему decrement(т.е. -=1) работает и в такой записи, а increment(+=) только с Number?



// Задание 5

// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// inputName.addEventListener('input', input);

// function input (ev) {
//     const inputTxt = ev.target.value.length;
//     inputTxt === 0 ? outputName.textContent : outputName.textContent=ev.target.value;
// }


// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
// на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным. Для добавления стилей, используй CSS-классы valid и invalid.

  
// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', blur);
// input.addEventListener('focus', focus);

// function blur(ev) {
//   const inputValue = ev.target.value.length;
//   const length = +ev.target.getAttribute('data-length');
//   length === inputValue ? input.classList.add('valid') : input.classList.add('invalid');
// }
// function focus() {
//   input.classList.remove('invalid', 'valid');
// }



// Задание 7

// const input = document.querySelector('#font-size-control');
// const textSize = document.querySelector('#text');

// input.addEventListener('input', (ev) => textSize.style.fontSize = `${ev.target.value}px`);


// // ?????
// // const inputValueRef = document.querySelector("#validation-input");
// // const refreshButtonRef = document.querySelector(".btn-task06");
// // refreshButtonRef.addEventListener("click", clearInput);
// // inputValueRef.addEventListener("blur", blur);
 
// // function clearInput() {
// //   inputValueRef.value = "";
// //   inputValueRef.classList.remove("invalid", "valid");
// // }
// // function blur() {
// //   const eT = event.target;
// //   if (eT.value.length === 6) {
// //     inputValueRef.classList.remove("invalid");

// //     inputValueRef.classList.add("valid");
// //   } else if (eT.value.length === 0) {
// //     inputValueRef.classList.remove("invalid", "valid");
// //   } else {
// //     inputValueRef.classList.add("invalid");
// //   }
// // }





// Задание 8 - дополнительное, выполнять не обязательно

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр 
// amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их
//  в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.







