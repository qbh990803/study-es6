// class

/**
 * ES5,ES6声明类的方式
 */

// ES5声明类
// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.walk = function () {
//   console.log('I am walking');
// }

// const dog = new Animal('dog');
// console.log(dog);

// ES6声明类
// class Animal {
//   constructor(type) {
//     this.type = type;
//   }
//   walk() {
//     console.log('I am walking');
//   }
// }

// const monkey = new Animal('monkey');
// console.log(monkey);

/**
 * Setters& Getters
 */

let _age = 1;
class Animal {
  constructor(type) {
    this.type = type;
  }

  get age() {
    return _age;
  }

  set age(val) {
    if (val > 1 && val < 10) {
      _age = val;
    }
  }
}

/**
 * 静态方法
 */

// ES5实现静态方法
function Animal(type) {
  this.type = type;
  this.walk = function () {
    console.log('I am walking');
  }
}

Animal.eat = function () {
  console.log('I am eating');
}

// ES6实现静态方法
class Animal {
  constructor(type) {
    this.type = type;
  }
  walk() {
    console.log('I am walking');
  }
  static eat() {
    console.log('I am eating');
  }
}

/**
 * 继承
 */

// ES5实现继承

function Animal(type) {
  this.type = type;
}

Animal.prototype.walk = function () {
  console.log('I am walking');
}

Animal.eat = function (food) {
  console.log('I am eating');
}

function Dog() {
  Animal.call(this, 'dog');
  this.run = function () {
    console.log('I am run');
  }
}

Dog.prototype = Animal.prototype;

// ES6实现继承
class Animal {
  constructor(type) {
    this.type = type;
  }
  walk() {
    console.log('I am walking');
  }
  static eat(food) {
    console.log('I am eating');
  }
}

class Dog extends Animal {
  run() {
    console.log('I am run');
  }
}