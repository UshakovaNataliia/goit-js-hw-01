// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// 5)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const a = [1, 2, 3, 4, 5];

// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// // 1) 
// let c = a.concat(b);
// console.log(c);
// // 2)
// a.push(1, 2, 3);
// console.log(a);
// // 3)
// b.reverse('');
// console.log(b);
// // 4)
// let d = [1, 2, 3, 4, 5];
// d = d.slice(0, 3);
// console.log(d);
// 5)
// let f = [1, 2, 3, 4, 5];
// f.splice(1, 2);
// console.log(f);



// 1) Вибираємо випадкове число (від 0 до довжини масива);
// const a = [1, 2, 3, 4, 5];
// let b = Math.floor(Math.random() * a.length);
// console.log(a[b]);

// 2)// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив 
// -) З масивів робимо строки
// let a = prompt('Enter data');

// let b = a.split(' ');
// console.log(b);
// b.reverse('');
// console.log(b);

// b.toString(' ');
// console.log(b);

// a.toString(' ');
// console.log(b);

// console.log(a, b);





// 29.07

// let creaturesArr = [];
// class Creature {
//     constructor(type, planet, status, sex) {
//         this.type = type;
//         this.planet = planet;
//         this.status = status;
//         this.sex = sex;
//     }
    // get show() {
    //     return (`This ${this.type} is from ${this.planet} and has ${this.status} status`)
    // }
    // set changePlanet (str) {
    //     this.planet = str;
    //     return this.planet
    // }
    // static intro() {
    //     console.log("There is a billions types of creatures all around the world!")
    // }
//     static checkCreatures() {
//         console.log(creaturesArr)
//     }
// }
// class Human extends Creature {
// constructor(name, type, planet, status, sex, nationality) {
//         super(type,planet, status, sex);
//         this.name = name;
//         this.nationality = nationality;
// }
// addToCreaturesList() {
//     creaturesArr.push({name : this.name, planet:this.planet, nationlity: this.nationality})
// }
// }
// let Adam = new Human('Adam', 'human', 'Mars', 'three-dimensional', 'male', 'Ukrainian');
// Adam.addToCreaturesList();
// let Eva = new Human('Eva', 'human', 'Venus', 'three-dimensional', 'female', 'Ukrainian');
// Eva.addToCreaturesList();
// Creature.checkCreatures();




// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
let currentYear = new Date().getFullYear();
class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    getFullName() {
        return  (`${this._name} ${this._surname}`)
    }
}
class Student extends User {
    constructor (name, surname, year) {
        super(name, surname);
        this._year = year;
    }
    getCourse(){
        return (currentYear - this._year);
    }
    get name(){
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get year(){
        return this._year;
    }
}
// Вот так должен работать наш класс:
let student = new Student('Иван', 'Иванов', 2017);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2017console.log(worker.getCourse()); 
console.log(student.getCourse());//выведет 3 - третий курс, так как текущий год 2020
