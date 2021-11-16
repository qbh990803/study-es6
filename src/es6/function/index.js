// function

/**
 * 默认参数
 * 函数参数是从左到右解析，如果没有默认值会解析成undefined
 */

// 对于函数而言，经常会用到参数，关于参数的默认值通常都是写在函数体中(ES5)
function foo(x, y) {
  y = y || 'world';
  console.log(x, y);
}

// ES6默认参数写法
function foo(x, y = 'world') {
  console.log(x, y);
}

// 如果想让某个参数使用默认值，我们可以使用 undefined 进行赋值
function f(x, y = 7, z = 42) {
  return z * 0.5;
}
f(1, undefined, 43); // 51

// 在ES6中我们不仅可以给参数默认赋值，同时参数赋值支持参数的逻辑运算进行赋值
function f(x, y = 7, z = x + y) {
  return z * 0.5;
}
f(1, 7) // 4

/**
 * name属性
 * name属性返回该函数的函数名
 */
function foo() {
  console.log(foo.name);
}
foo() // foo

/**
 * length属性
 * length属性是统计第一个默认参数前面的变量数
 */

// 在函数体中，有时候需要判断函数有几个参数，ES5中可以通过 arguments 判断
function foo(a, b = 1, c) {
  console.log(arguments.length);
}
foo(1, 2) // 2

// ES6中用Function.length判断
function foo2(a, b = 1, c) {
  console.log(foo.length);
}
foo2(1, 2, 3) // 1

/**
 * Rest参数
 *
 */

// 在写函数的时候，部分情况下我们不是很确定参数有多少个，比如求和运算(ES5)
function sum() {
  let num = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    num += item;
  })
  return num;
}
console.log(sum(1, 2, 3));

// ES6求和运算
function sum1(...items) {
  let num = 0;
  items.forEach(function (item) {
    num += item;
  })
  return num;
}
console.log(sum1(1, 2, 3));

/**
 * 箭头函数
 * 箭头函数中this指向定义时所在的对象，而不是调用时所在的对象
 * 箭头函数不可以当作构造函数
 * 箭头函数不可以使用arguments对象
 */

// ES5声明函数
function hello() {
  console.log('say hello');
}

// ES6 箭头函数
const hello = () => console.log('say hello');

// 如果只有一个参数，可以省略括号，如果大于一个参数一定要带括号
const sayHello = name => console.log('say hello', name);

// 如果返回值是表达式可以省略 return 和 {}
const pow = x => x * x;

// 如果返回值是对象，一定要用括号包起来
const person = (name) => ({
  name,
  age: 23,
  address: 'BeiJing'
})