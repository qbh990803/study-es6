/**
 * String
 *
 */

// 1.Unicode表示法

// ES6加强了对Unicode的支持，允许采用 \uxxxx 表示一个字符，其中 xxxx 表示字符的 Unicode 码点 
console.log('\u0061'); // a

// 这种表示法只限于 \u0000 ~ \uFFFF 之间的字符。超出这个范围的字符，必须使用两个双字节的形式表示
console.log('\uD842\uDFB7'); // 𠮷
console.log('\u20BB7'); // " 7"

// 如果直接在 \u 后面跟上超过 0xFFFF 的数值(比如'\u20BB7')， JavaScript 会理解成 \u20BB + 7。 由于 \u20BB 是一个不可打印的字符。所以只会显示一个空格，后面跟个7。
// ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
console.log('\u{20BB7}');

// JavaScript有六种方法表示一个字符
console.log('\z' === 'z'); // true
console.log('\172' === 'z'); // true
console.log('\x7A' === 'z'); // true
console.log('\u007A' === 'z'); // true
console.log('\u{7A}' === 'z'); // true

// 2.遍历器接口
for (const iterator of 'Simon') {
  console.log(iterator);
}

// 3.模板字符串
const fullName = 'Simon';
const age = 23;
console.log('My name is ' + fullName + ' and I am ' + age + ' years old');
console.log(`My name is ${fullName} and I am ${age} years old`);

// 4.扩展方法

// String.prototype.fromCodePoint()
// 用于从 Unicode 码点返回对应的字符，并且可以识别大于 0xFFFF的字符
console.log(String.fromCharCode('0x20BB7')); // ES5 => ஷ
console.log(String.fromCodePoint('0x20BB7')); // ES6 => 𠮷

// String.prototype.includes()
// ES5中可以使用indexOf方法来判断一个字符串是否包含在另一个字符串中，indexOf返回出现的下标位置，如果不存在返回 -1
// ES6提供了includes方法判断一个字符串是否包含另一个字符串中，返回Boolean类型的值
const str = 'JavaScript';
console.log(str.indexOf('Java'));
console.log(str.includes('Script'));

// String.prototype.startsWith()
// 判断参数字符串是否在原字符串的头部，返回Boolean类型的值
const str1 = 'python';
console.log(str1.startsWith('py'));

// String.prototype.endsWith()
// 判断参数字符串是否在原字符串的尾部，返回Boolean类型的值
const str2 = 'php';
console.log(str2.endsWith('p'));

// String.prototype.repeat()
// 返回一个新的字符串，表示将原字符串重复n次
const str3 = 'Java';
console.log(str3.repeat(3));