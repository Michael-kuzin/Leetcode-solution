// class Task {
//     constructor(title = ) {
//       this.title = title;
//       this._done = false;
//       Task.count += 1;
//       console.log("Sodanie zadachi");
//     }
//
//     get done() {
//       return this._done === true ? 'Выполнена' : 'Не выполена';
//     }
//
//     set done(value) {
//       if (value !== undefined && typeof value === 'boolean') {
//         this._done = value;
//       } else {
//         console.error('Ошибка укажите значение true или false');
//       }
//     }
//
//     complete() {
//       this.done = 1;
//       console.log(`Задача "${this.title}" выполнена`);
//     }
//
//     static getDefaultTitle() {
//       return 'задача';
//     }
// }
//
// Task.count = 0;
//
// let task = new Task("Ybrat komnaty");
//
// console.log(task.title);





//
// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }
//
//   hide() {
//     this.$el.style.display = "none"
//   }
//
//   show() {
//     this.$el.style.display = "block"
//   }
// }
//
// class Box extends Component {
//   constructor(options) {
//     super(options.selector)
//
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.color = options.color
//   }
// }
//
// const box1 = new Box({
//   selector: '#boxq',
//   size: 100,
//   color: 'red'
// })









// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}
//
// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }
//
// class Student extends User {
//       constructor(name,surname,year){
//         super(name,surname,year)
//           this.year = year
//       }
//
//   getCourse() {
//     return 2020 - this.year
//   }
// }
//
// let student = new Student('Иван', 'Иванов', 2017);
//
// console.log(student.name);
// console.log(student.getFullName());
// console.log(student.year);
// console.log(student.getCourse());



// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' издает звук.');
//   }
// }
//
// class Dog extends Animal {
//   speak() {
//     console.log(this.name + ' лает.');
//   }
// }
//
// var d = new Dog('Митци');
// d.speak();


// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//
//   get area() {
//     return this.calcArea();
//   }
//
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//
// const square = new Rectangle(10, 10);
//
// console.log(square.area);
//
//
//
//
//
//
//
// class Worker {
//   constructor(name,surname,rate,days){
//     this.name = name,
//     this.surname = surname,
//     this.rate = rate,
//     this.days = days
//   }
//
//   getSalary() {
//     return this.rate * this.days
//   }
//
//
// }
//
// let worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
//
//
//
//
//
//
//
//
// class Task {
//   constructor(title = 'Задача') {
//     this._title = title;
//     this._done = false;
//     Task.count += 1;
//   }
//
//   get title() {
//     return this.title;
//   }
//
//   set title(value) {
//     this._title = value;
//   }
//
//   complete() {
//     this._done = true;
//   }
//
//   static getDefaultTitle() {
//     return 'Задача';
//   }
// }
//
// Task.count = 0;
//
//
//
// class SubTask extends Task {
//   constructor(title,parent){
//     super(title);
//     this._parent = parent
//   }
// }
//
// let task = new Task('Изучить JavaScript');
// let subtask = new SubTask('Изучить ES6',task);
//
// console.log(task);
// console.log(subtask);
//
//
//
//
//
//
// let Task = class {
//   constructor() {
//     console.log('Creating a subtask');
//   }
// }
//
// let SubTask = class extends Task {
//   constructor() {
//     super();
//     console.log('Creating a subtask');
//   }
// }
//
// let task = new Task();
// let subtask = new SubTask();
//
// console.log(task);
// console.log(subtask);




class Car {
  constructor(position,speed,name,type) {
    this.position = position,
    this.speed = speed,
    this.name = name,
    this.type = type
  }

run() {
  console.log('run');
  this.interval = setInterval( () => {
     this.position.x += this.speed;
     console.log(this.position);
   },1000)
  }

left() {
  console.log('left');
    this.position.y += this.speed;
 }

right() {
  console.log('right');
  this.position.y -= this.speed;
 }

stop() {
  console.log('stop');
  setTimeout(() => { clearInterval(this.interval)},5000);
}

}



let car = new Car({x:0,y:0,z:0},100,"BMW","JIP");
car.run();
car.left();
car.left();
car.left();
car.stop()
