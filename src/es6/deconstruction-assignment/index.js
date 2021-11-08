/**
 * 解构赋值
 * 在ES6中新增了变量的赋值方式：解构赋值。允许按照一定的模式，从数组和对象中提取值，对变量进行赋值。
 * TIP:解构赋值重点在赋值，赋值的元素是要拷贝出来赋值给变量，赋值的元素本身不会被改变。
 */

/**
 * 数组解构赋值
 *
 */

// 1.赋值元素可以是任意可遍历的对象
const [one, two, three] = [1, 2, 3];
const [a, b, c] = 'abc';
const [set1, set2] = new Set(['set1', 'set2']);
console.log(one, two, three);
console.log(a, b, c);
console.log(set1, set2);

// 2.被赋值的变量还可以是对象的属性，不局限于单独的变量
const names = {};
[names.firstName, names.lastName] = 'Kobe Bryant'.split(" ");
console.log(names);

// 3.解构赋值可以在循环体中应用，可以配合entries使用
const userInfo = {
  name: 'John',
  age: 30
}
for (const [key, value] of Object.entries(userInfo)) {
  console.log(`${key}: ${value}`);
}

// 4.可以跳过赋值元素
const [color, , action] = ['yellow', 'lucky', 'running'];
console.log(color, action);

// 5.rest参数
// TIP: 我们可以用rest来接受赋值数组的剩余元素，不过要确保这个rest参数是放在被赋值变量的最后一个位置上
const [score1, score2, ...rest] = [80, 60, 59, 24, 88, 67, 90];
console.log(rest);

// 6.默认值
const [goods, price, classification = 'T shit'] = ['cloth', '$100'];
console.log(goods, price, classification);

/**
 * 对象解构赋值
 * 如果我们有一个Object想把里面的属性分别拿出来而无需通过调用属性的方式赋值给指定的变量。具体的做法是在赋值
 * 的左侧声明一个和Object结构等同的模板，然后把关心的属性value指定为新的变量即可。
 * TIP：在这个结构赋值过程中，左侧的模板结构要与右侧的Object一致。但属性的顺序无需一致。
 */
const desk = {
  width: 100,
  height: 80,
  weight: 30
}
const { width, height } = desk;
console.log(width, height);

// 1.默认值
const { specification = 'seven people' } = { brand: 'Mercedes', mode: 'cross country' };
console.log(specification);

// 2.rest运算符
const { fileName, ...fileRest } = { fileName: 'study es6', type: 'video', size: '5G' };
console.log(fileRest);

// 3.嵌套对象
// 如果一个Array或者Object比较复杂，它嵌套了Array或者Object,那只要被赋值的结构和右侧赋值的元素一致就好。
const centralBusinessDistrict = {
  name: '恒大SOHO',
  basicProperty: {
    builders: '恒大',
    layer: 40,
  }
}
const { basicProperty: { builders, layer } } = centralBusinessDistrict;
