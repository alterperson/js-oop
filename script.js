'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height
  this.width = width
  this.bg = bg
  this.fontSize = fontSize
  this.render = function (selector, height, width, bg, fontSize, text) {

    let newElem;

    if (selector.substr(0, 1) === '.') {
      newElem = document.createElement('div')
      newElem.classList.add(selector.substr(1))
      document.body.append(newElem)
      newElem.textContent = prompt(text)
    }

    else if (selector.substr(0, 1) === '#') {
      newElem = document.createElement('p')
      newElem.classList.add(selector.substr(1))
      document.body.append(newElem)
      newElem.textContent = prompt(text)
    }

    newElem.style.cssText = `
      height: ${height};
      width: ${width};
      background: ${bg};
      font-size: ${fontSize}px;
    `
  }
}

const newElem = new DomElement()

newElem.render('.best', '100px', '100px', 'green', '14')















// const Person = function(name) {
//   this.name = name
// }

// Person.prototype.sayHello = function () {
//   console.log('Привет, меня зовут ' + this.name);
// }

// const person1 = new Person('Vadim')

// console.log(Person.prototype.isPrototypeOf(person1));

// console.log(person1 instanceof Person);


// const Student = function (name, role) {
//   Person.call(this, name)
//   this.role = role
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

// const newStudent = new Student('Vadim', 'student')

// console.log(newStudent);

















// const worker = {
//   workplace: 1,
//   dinner: 1,
//   goToWork: function () {
//     console.log('Иду на работу');
//   },
//   leaveWork: function () {
//     console.log('Ухожу с работы');
//   },
//   work: function () {
//     console.log('Работаю');
//   },
//   sayHello: function () {
//     console.log('Привет, меня зовут ' + this.name);
//   }
// }

// const frontendDev = Object.create(worker)
// const backendDev = Object.create(worker)

// frontendDev.dinner = 2
// frontendDev.role = 'Frontend Developer'
// backendDev.role = 'Backend Developer'

// frontendDev.work =  function () {
//   console.log('Пишу на JavaScript');
// }
// backendDev.work =  function () {
//   console.log('Пишу на NodeJS');
// }

// const developer1 = Object.create(frontendDev)
// const developer2 = Object.create(frontendDev)
// const developer3 = Object.create(backendDev)
// const developer4 = Object.create(backendDev)

// developer1.name = 'Vadim'
// developer2.name = 'Dima'
// developer3.name = 'Anna'
// developer4.name = 'Katya'

// console.log(developer1.__proto__.__proto__.hasOwnProperty('workplace'));
// console.log(frontendDev.isPrototypeOf(developer4));













// const man = {
//   hands: 2,
//   legs: 2,
//   eyes: 2,
//   walk: function () {
//     console.log('Я хожу');
//   },
//   talk: function () {
//     console.log('Я говорю');
//   }
// }

// const newMan = Object.create(man);
// const newWoman = Object.create(man);

// newMan.name = 'Vadim'
// newMan.age = 25

// newWoman.name = 'Anna'
// newWoman.age = 23

// console.log(newMan);
// console.log(newWoman);