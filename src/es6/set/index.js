/**
 *在Javascript里通常用 Array 和 Object 来存储数据。但是在频繁操作数据的过程中
 *查找或者统计必须要手动实现，并不能简单的直接使用.比如如何保证 Array 是去重的，
 *如何统计 Object 的数据总数等，必须自己手动实现类似的需求，不是很方便。在ES6中
 *为了解决上述痛点，新增了数据结构 Set 和 Map ,它们分别对应传统数据结构的 “集合”
 * 和 “字典”
 */


/**
 * Set实例
 * 初始化参数必须是可遍历的，可以是数组或者自定义遍历的数据结构
 * Set 类似于数组，但是成员的值都是唯一的，没有重复的值
 */
const s = new Set(); // 空的Set实例
const s1 = new Set([1, 2, 3]); // 有初始化参数的Set实例
console.log(s);
console.log(s1);


/**
 * 添加
 */
const addTest = new Set([1, 2]);

// 添加重复的值无效
addTest.add(1);
console.log(addTest);

// 连续添加等同于链式调用添加 
addTest.add(3);
addTest.add(4);

// 链式调用添加
addTest.add(3).add(4);


/**
 * 删除
 */
const deleteTest = new Set([1, 2]);

// 删除指定的值
deleteTest.delete(1);
console.log(deleteTest);

// 删除全部的值
deleteTest.clear();
console.log(deleteTest);


/**
 *  统计数据
 */
const statisticalTest = new Set(['hello', 'goodbye']);

// 是否含有某个值
console.log(statisticalTest.has('hello'));

// 数据总数
console.log(statisticalTest.size);


/**
 * 数组去重
 */
const arr = [1, 2, 3, 7, 2, 7, 4];
const newArr = Array.from(new Set(arr));
console.log(newArr);


/**
 * 数组合并去重
 */
const arr1 = [1, 2, 3];
const arr2 = [2, 5];
const newArr1 = new Set([...arr1, ...arr2]);
console.log(newArr1);


/**
 * 交集
 */
const intersectionArr1 = [1, 2, 3];
const intersectionArr2 = [2, 3];
const intersectionArr = intersectionArr1.filter(item => new Set(intersectionArr2).has(item));
console.log(intersectionArr);


/**
 * 差集
 */
const differenceSetArr1 = [1, 2, 3];
const differenceSetArr2 = [2, 3];
const differenceSetArr = differenceSetArr1.filter(item => !(new Set(differenceSetArr2).has(item)));
console.log(differenceSetArr);


/**
 * 遍历
 */
const traverseTest = new Set(['hello', 'es6']);

// keys 返回键名的遍历器
console.log(traverseTest.keys());

// values 返回键值的遍历器
console.log(traverseTest.values());

// entries 返回键值对的遍历器
console.log(traverseTest.entries());

// forEach 使用回调函数遍历每个成员
traverseTest.forEach(element => {
  console.log(element);
});

// for of 可以直接遍历每个成员
for (const iterator of traverseTest) {
  console.log(iterator);
}


/**
 * WeakSet
 * WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再
 * 引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象该存在于WeakSet之中
 * 结构与Set类似，也是不重复的值的集合。但是，它与Set有两个区别
 * 1.WeakSet成员只能是对象，而不能是其它类型的值。
 * 2.WeakSet没有size属性没法遍历它的成员。
 */

const weakSetTest = new WeakSet();
weakSetTest.add(1); // TypeError: Invalid value used in weak set
