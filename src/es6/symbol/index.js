/**
 * Symbol
 *
 * ES6引入了一种原始的数据类型 Symbol, 表示独一无二的值，它是 JavaScript 语言的第七种数据类型，前六种是：
 * Number、String、Boolean、null、undefined、object。
 *
 * Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型。一种是原来的字符串，另一种就是新增
 * 的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
 */

// 声明方式
// Symbol可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
// NOTICE: Symbol函数前面不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似字符串的数据类型。
const s1 = Symbol();
const s2 = Symbol();
const s3 = Symbol('foo');
console.log(s1 === s2); // false

// Symbol.for()
// Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建一个以该字符串为名称的Symbol值，并注册到全局。
// NOTICE: Symbol.for()和Symbol()这两种写法，都会生成新的Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次都调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已存在，如果不存在才会新建一个值。
const s4 = Symbol.for('foo');
const s5 = Symbol.for('foo');
console.log(s4 === s5); // true

// Symbol.keyFor()
// Symbol.keyFor() 返回一个已登记的Symbol类型值的key
const s6 = Symbol('test keyFor');
const s7 = Symbol.for('test keyFor');
console.log(Symbol.keyFor(s6)); // undefined
console.log(Symbol.keyFor(s7)); // test keyFor


// 属性遍历
const s8 = Symbol('imooc');
class User {
  constructor(name) {
    this.name = name
    this[s8] = 'imooc.com'
  }
  getName() {
    return this.name + this[s8]
  }
}
const user = new User('Simon');
console.log(user.getName());

for (let key in user) {
  console.log(key, 'in');
}

for (let key of Object.keys(user)) {
  console.log(key, 'keys');
}

for (let key of Object.getOwnPropertySymbols(user)) {
  console.log(key, 'getOwnPropertySymbols');
}

for (let key of Reflect.ownKeys(user)) {
  console.log(key, 'Reflect');
}




