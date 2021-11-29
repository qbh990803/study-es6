// Object

/**
 * 属性简洁表示法
 */

// 在ES6之前Object属性必须是key-value形式
let name = 'Simon';
let age = 23;
let obj = {
  name: name,
  age: age,
  study: function () {
    console.log(this.name + '正在学习');
  }
}

// 在ES6之后是可以用简写的形式来表示
let name = 'Simon';
let age = 23;
let obj = {
  name,
  age,
  study: function () {
    console.log(this.name + '正在学习');
  }
}

/**
 * 属性名表达式
 */

// 在ES6中可以用变量或者表达式来定义Object的key
let s = 'school';
let obj = {
  foo: 'bar',
  [s]: 'BeiJing'
}

/**
 * Object.is()
 */

// 判断两个对象是否相等

let obj1 = {
  name: 'Simon',
  age: 23
}

let obj2 = {
  name: 'Warner',
  age: 23
}

console.log(obj1 === obj2); // false
console.log(Object.is(obj1, obj2)); // false

let obj2 = obj1;
console.log(Object.is(obj1, obj2)); // true

/**
 * Object.assign()
 * 
 * 基本语法
 * Object.assign(target, ...sources)
 * target: 目标对象(必选)
 * sources: 源对象(可选)
 */

// 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象

const target = {
  a: 1,
  b: 2
}

const source = {
  b: 4,
  d: 5
}

const returnTarget = Object.assign(target, source);

console.log(target); // {a: 1, b: 4, d: 5}
console.log(returnTarget); // {a: 1, b: 4, d: 5}

// 源对象个数为0直接返回目标对象
let s = Object.assign({ a: 1 }) // {a: 1}

// 目标对象不是对象，则自动转为对象

let t = Object.assign(2); // Number {2}
let s = Object.assign(2, { a: 2 }) // Number {2, a: 2}

// 对于引用数据类型属于浅拷贝
let target = {
  a: {
    b: {
      c: 1
    },
    e: 4,
    f: 5,
    g: 6
  }
}
let source = {
  a: {
    b: {
      c: 1
    },
    e: 2,
    f: 3
  }
}
Object.assign(target, source)
console.log(target); // { a: { b: {c: 1}, e: 2, f: 3 } }

/**
 * 对象的遍历方式
 * 如何遍历对象中每个key和value的值？
 */

let obj = {
  name: 'Simon',
  age: 23,
}

// Object.keys()用于返回对象所有的key组成的数组
Object.keys(obj).forEach(key => console.log(key, obj[key]))

// Object.getOwnPropertyNames()用于返回对象所有的key组成的数组
Object.getOwnPropertyNames(obj).forEach(key => console.log(key, obj[key]))

// Reflect.ownKeys用于返回对象所有的key组成的数组
Reflect.ownKeys(obj).forEach(key => console.log(key, obj[key]))

