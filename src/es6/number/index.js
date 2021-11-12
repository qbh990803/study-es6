/**
 * Number
 *
 */

// 1.二进制与八进制
// ES6提供了二进制和八进制数值的新写法，分别用前缀 ob(oB) 和 0o(0O) 表示
const a = 0b0101;
console.log(a); // 5

const b = 0o777;
console.log(b); // 551

// 2.新增方法

// Number.isFinite()
// 用来检查一个数值是否为有限的(finite), 既不是Infinity
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

// Number.isNaN()
// 用来检测一个值是否为NaN
Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9 / NaN); // true
Number.isNaN('true' / 0); // true
Number.isNaN('true' / 'true') // true

// Number.isInteger()
// 用来判断一个数值是否为整数
Number.isInteger(25) // true
Number.isInteger(25.1) // false
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

// Number.isSafeInteger()
// 用来判断一个数值是否为安全整数(-(2^53 - 1) 至 2^53 - 1之间)
Math.pow(2, 53) // 9007199254740992

Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

// Number.parseInt()
// ES6将全局方法 parseInt() 移植到 Number对象 上面，行为完全保持不变，这样做的目的，是逐步减少全局性方法，使语言逐步模块化
parseInt('12.34') // ES5写法 
Number.parseInt('12.34') // ES6写法

// Number.parseFloat()
// ES6将全局方法 parseFloat 移植到 Number对象上面，行为完全保持不变，这样做的目的，是逐步减少全局性的方法，使语言局部模块化
parseFloat("123.45#"); // ES5写法
Number.parseFloat("123.45#"); // ES6写法

// Number.MAX_SAFE_INTEGER
// 表示最大的正数
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 // true
Number.MAX_SAFE_INTEGER === 9007199254740991 // true

// Number.MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER // true
  - Number.MIN_SAFE_INTEGER === -9007199254740991 // true

// 3.Math扩展

// Math.trunc()
// 用于去除一个数的小数部分，返回整数
Math.trunc(5.5); // 5
Math.trunc(-5.5); // -5
Math.trunc(true); // 1
Math.trunc(false); // 0
Math.trunc(NaN); // NaN
Math.trunc(null); // NaN
Math.trunc() // NaN

// Math.sign()
// 用来判断一个是到底是整数、负数、还是零。对于非数值，会将其先转换为数值。
// 它会返回5种值
// 1. 参数为正数， 返回 +1
// 2. 参数为负数， 返回 -1
// 3. 参数为0， 返回0
// 4. 参数为-0， 返回 -0
// 5. 其它值。返回 NaN
Math.sign(5); // 1
Math.sign(-5); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(true); // 1
Math.sign(false); // 0
Math.sign(NaN); // NaN

// Math.cbrt()
// 用于计算一个数的立方根
Math.cbrt(8); // 2
Math.cbrt(NaN); // NaN







