"use strict"
// import pokemon from "./pokemons.js"

let body = document.querySelector("body");
// body.style.margin = '0 auto';
let box = document.createElement("div");
body.append(box);
// box.style.margin = '0 auto';
// body.append(img);
// let img = document.createElement('img');
// ______________STYLES
// box.style.width = "50px"
// box.style.height = "50px"
// box.style.backgroundColor = "orange"
// box.style.margin = "0 auto"
box.setAttribute("class", "box")
// box.style.margin = '0 auto';
// img.setAttribute('src', './racoon.webp');
// img.setAttribute('alt', 'racoon');
// box.setAttribute('class', 'bluebox');
// box.classList.add('box', 'box2');
// box.classList.remove('box2');
for (let i = 0; i < 20; i++) {
	let smallBox = document.createElement("div");
    box.append(smallBox);
    box.style.margin = '0 auto';
    smallBox.classList.add("smallBox");
    smallBox.style.width = '40px';
    smallBox.style.height = '40px';
    smallBox.style.display = 'inline-block';
    smallBox.style.marginRight = '20px';
    smallBox.style.borderRadius = '50%';

    smallBox.style.backgroundColor = 
    `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255,)},${Math.round(Math.random() * 255)} )`;
}
