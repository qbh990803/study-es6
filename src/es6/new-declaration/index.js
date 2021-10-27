/**
 * 内容：新的声明方式
 * 章节：
 * 1.作用域
 * 2.let
 * 3.const
 */

/**
 * 1.作用域
 * 定义：变量存取的规则，这个规则就是作用域
 * 分类：全局作用域(global,window)、局部作用域(函数)、块状作用域({})、动态作用域(this)
 */

/**
 * 1.1全局作用域
 * 定义：变量在函数或者{}外定义，即为全局作用域，不过在函数或者代码块{}内未定义的变量也是拥有全局作用域的(不推荐)
 * NOTICE: 在函数或者代码块{}内未定义的变量实际上是做为window/global的属性存在，而不是全局变量。换句话说没有使用
 * var定义的变量虽然拥有全局作用域，但是它是可以被delete的，而全局变量不可以
 */
var course = "es";

// 此处可以调用 course 变量
function func() {
  // 函数内部可调用course变量
}

function myFunction() {
  age = 18;
  // 此处可调用 age 变量
}


/**
 *1.2(局部)函数作用域
 *定义：在函数内部定义的变量，就是局部作用域。函数作用域中，对外是封闭的，从外层的作用域无法直接访问函数内部的作用域
 */

function bar() {
  var testValue = 'inner';
}
console.log(testValue); // 报错：ReferenceError: testValue is not defined

// 如果想读取函数内部的变量，必须借助 return 或者 闭包
function bar1(value) {
  var testValue = 'inner';
  return testValue + value;
}
console.log(bar1('func'));

function bar2(value) {
  var testValue = 'inner';

  var result = testValue + value;

  function inner() {
    return result;
  }
}
console.log(bar2('func'));


/**
 * 1.3块状作用域
 * 定义：ES5中没有块状作用域的概念，ES6得到普及。{}就是块，里面的(let, const)变量拥有这个块状作用域，按照规则{}之外是无法访问这个变量的
 */
if (true) {
  let a = 1;
  console.log(a);
}

/**
 * 1.4动态作用域
 *定义：只能在执行阶段确定变量的作用域，就叫做动态作用域
 */

window.a = 3;

function test() {
  console.log(this.a);
}

test.bind({ a: 2 })()
test()

/**
 * 1.5静态作用域
 * 定义：变量的作用域在定义时就决定而不是在执行时决定，也就是说词法作用域取决于源码，通用静态分析就能确定，因此词法作用域也叫做静态作用域
 */

var staticTest = 1;

// 此处可调用 staticTest 变量
function testB() {
  // 函数内部可调用 staticTest 变量
}

/**
 * let
 * 声明变量
 * 特点：
 * 不属于顶层对象window
 * 不允许重复声明
 * 不存在变量提升
 * 暂时性死区
 * 块级作用域
 */

// let声明的全局变量不是全局对象window的属性
// 这就是意味着，你不可以通过window.变量名的方式访问这些变量，而var声明的全局变量时window的属性，是可以通过window.变量名的方式访问的
var a = 5;
console.log(window.a); // 5

let a1 = 5;
console.log(window.a); // undefined

// 用let定义变量不允许重复声明
var b = 1;
var b = 2;
console.log(b); // 2

let b = 1;
let b = 2;
console.log(b); //  VM131:1 Uncaught SyntaxError: Identifier 'a' has already been declared

// let声明的变量不存在变量提升

function foo() {
  console.log(a);
  let a = 1;
}
console.log(foo()); //  Uncaught ReferenceError: Cannot access 'a' before initialization

// let声明的变量具有暂时性死区
// 只要块级作用域内存在let声明，它所声明的变量就绑在了这个区域，不再受外部的影响

var a = 5;
if (true) {
  a = 6;
  let a;
} //  Uncaught ReferenceError: Cannot access 'a' before initialization


//let声明的变量拥有块级作用域
{
  let a = 5;
}
console.log(a); // undefined


/**
 * const
 * * const 声明的变量必须进行初始化，不然会抛出异常  Uncaught SyntaxError: Missing initializer in const declaration
 * * const 实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
 * 声明常量
 * 不属于顶层对象window
 * 不允许重复声明
 * 不存在变量提升
 * 暂时性死区
 * 块级作用域
 */

// ES5中用Object.defineProperty定义常量
Object.defineProperty(window, 'PI', {
  value: 3.3,
  writable: false,
})
console.log(PI); // 3.3
PI = 5;
console.log(PI); // 3.3

// const定义常量
const PI = 3.3;
console.log(PI); // 3.3
PI = 5;
console.log(PI); // Uncaught TypeError: Assignment to constant variable

// const 声明的对象，但对象属性的值可以改变
const obj = {
  name: 'Jack'
}
obj.name = 'Lucy';
console.log(obj.name); // Lucy
