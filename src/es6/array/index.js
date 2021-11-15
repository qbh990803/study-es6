/**
 * Array
 * 在ES6中新增了很多实用的原生API，方便开发者对 Array 的操作性更强，如for...of、from、of、fill、find、findIndex
 */


/**
 * ES5中数组遍历的方式
 */

const arr = [1, 2, 3, 4, 5];

// for循环
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach
// forEach没有返回值，只是针对每个元素调用func
// forEach代码块中不能使用break 、continue，它会抛出异常
arr.forEach((item, index, array) => {
  if (arr[index] === 2) {
    // continue;
  }
  console.log(item, index, array);
})

// map
// map返回一个新的数组，每个元素为调用func的结果
const result = arr.map(item => {
  const newItem = item + 1;
  return newItem;
})
console.log(arr, result);

// filter
// filter返回符合func条件的元素数组
const result1 = arr.filter(item => {
  return item === 2;
})
console.log(arr, result1);

// some 
// some返回Boolean，判断是否有元素符合func条件
const result2 = arr.some(item => item === 4);
console.log(arr, result2);

// every
// every返回Boolean，判断每一个元素都符合func条件
// every的代码块中不能使用 break、continue，它会抛出异常
const result3 = arr.every(item => item === 2);
console.log(arr, result3);

// reduce() 
// reduce() 接受一个函数作为累加器
const sum = arr.reduce((prev, cur, index, array) => {
  return prev + cur;
})
console.log(sum, 'sum');

// ES6中数组遍历方法

// for ... of
// 在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

for (let item of arr) {
  console.log(item)
}

for (let item of arr.values()) {
  console.log(item)
}

for (let item of arr.keys()) {
  console.log(item)
}

for (let [index, item] of arr.entries()) {
  console.log(index, item)
}

// Array.from()
// Array.from()从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

const strArr = Array.from('foo');

// Array.of()
// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
//  Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

// Array.prototype.fill()
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引

arr.fill(0, 1, 2)

// Array.prototype.find()
// find() 方法返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined
const found = arr.find(item => item === 2);

// Array.prototype.findIndex()
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。其实这个和 find() 是成对的，不同的是它返回的是索引而不是值。
const found1 = arr.findIndex(item => item === 3);

// Array.prototype.copyWithin()
// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
const letterArr = ['a', 'b', 'c', 'd', 'e'];
console.log(letterArr.copyWithin(0, 3, 4)); // ['d', 'b', 'c', 'd', 'e]