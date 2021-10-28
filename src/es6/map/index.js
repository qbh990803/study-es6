/**
 * Map
 * ES6提供了Map数据结构，它类似于对象，也是键值对的集合，但是 “键” 的范围不限于字符串，各种类型的值(包括对象) 都可以
 * 当作键，也就是说，Object结构提供了 “字符串-值” 的对应，Map结构提供了 “值-值” 的对应，是一种更完善的 Hash结构实现
 * 。如果你需要 “键值对” 的数据结构， Map 比 Object 更合适。
 *
 */

//基本语法

/**
 * 实例化
 * iterable可以是一个数组或者其他iterable对象，其元素为键值对，每个键值对都会添加到新的Map
 */
// const map = new Map([iterable]);

/**
 * 添加数据
 */
const map1 = new Map();
const keyString = 'hello';
const keyNumber = 1;
const keyBoolean = false;
const keySymbol = Symbol();
const keyObject = { name: 'Mike' };
const keyNull = null;
const keyUndefined = undefined;
const keyFunction = function () { };
const keyArray = [];
map1.set(keyString, 'world');
map1.set(keyNumber, 2);
map1.set(keyBoolean, true);
map1.set(keySymbol, Symbol('world'));
map1.set(keyObject, { age: 23 });
map1.set(keyNull, null);
map1.set(keyUndefined, undefined);
map1.set(keyFunction, function () { });
map1.set(keyArray, [1, 2]);
console.log(map1);

/**
 * 删除数据
 */
const name = 'name';
const age = 'age';
const map2 = new Map([
  [name, 'Jack'],
  [age, 14]
]);

// 删除单个数据
map2.delete(name);
console.log(map2);
// 删除全部数据
map2.clear();
console.log(map2);

/**
 * 统计数据
 */
const height = 'height';
const weight = 'weight';
const map3 = new Map([
  [height, 180],
  [weight, '75kg']
])

// 元素个数
console.log(map3.size);
// 是否含有某个元素
console.log(map3.has(weight));

/**
 * 查询数据
 */
const sex = 'sex';
const map4 = new Map([[sex, 1]]);
console.log(map4.get(sex));

// 遍历方法

/**
 * 遍历方法
 * keys() 返回一个新的iterator对象。它包含按照顺序插入Map对象中每个元素的key值
 * values() 返回一个新的iterator对象。它包含按照顺序插入Map对象中每个元素的value值
 * entries() 返回一个新的包含 [key,value] iterator对象，返回的迭代器的迭代顺序与 Map 对象插入的顺序相同。
 * forEach() 将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数
 * for of 可以直接遍历每个成员
 */
const map5 = new Map([
  ['color', 'blur'],
  ['identity', 'student']
]);
console.log(map5.keys());
console.log(map5.values());
console.log(map5.entries());
console.log(map5.forEach((value, key) => console.log(value, key)));
for (const [key, value] of map5) {
  console.log(key, value);
}

// Map 与 Object 的区别

/**
 * 1.键的类型：一个 Object 的键只能是 字符串 或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象，基本类型。
 * 2.键的顺序：Map中的键值是有序的，而添加到对象中的键则不是，因此，当对它进行遍历时，Map 对象是按照插入顺序返回键值。
 * 3.键值对的统计：你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对只能手动计算。
 * 4.键值对的遍历: Map 可直接进行迭代，而Object的迭代需要先获取它的键值组，然后进行迭代。
 * 5.性能：Map 在涉及频繁增删键值对的场景下会有些性能优势。
 */


/**
 * WeakMap
 *定义：一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * 与Map的区别：
 * 1.没有clear()方法
 * 2.没有size方法
 * 3.键是弱引用
 */

/**
 * 实例化
 *Iterable 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。null 会被当做 undefined。
 */
const student = { name: 'Jack' };
const wm = new WeakMap([
  [student, 1]
]);
console.log(wm);

// 添加数据
const wm1 = new WeakMap();
wm1.set({ height: 180 }, 1);
console.log(wm1);

// 删除数据
const width = { width: 30 };
const area = { area: 40 };
const wm2 = new WeakMap([
  [width, 0],
  [area, 1]
]);
wm2.delete(width);
console.log(wm2);

// 统计数据
const dogName = { name: 'Luck' };
const wm3 = new WeakMap([
  [dogName, 1]
]);
console.log(wm3.has(dogName));

// 查询数据
const finish = { action: 'swim' };
const wm4 = new WeakMap([[finish, 3]]);
console.log(wm4.get(finish));


/**
 * 遍历
 */
const dog = {
  name: 'LaiFu',
  color: 'black'
}
const cat = {
  name: 'MiMi',
  color: 'yellow'
}
const wm5 = new Map([
  [dog, 0],
  [cat, 1]
]);
console.log(wm5.keys());
console.log(wm5.values());
console.log(wm5.entries());
console.log(wm5.forEach((value, key) => console.log(value, key)));
for (const [key, value] of wm5) {
  console.log(key, value);
}



