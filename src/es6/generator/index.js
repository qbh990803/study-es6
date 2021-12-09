// Generator

/**
 * 基本语法
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

/**
 * 方法
 */

// 1.Generator.prototype.next()
// 方法返回一个包含done和value的对象，该方法也可以通过接受一个参数用以向生成器传值
// 语法：gen.next(value)
// 参数： value 向生成器传递的值
// 返回值：返回的对象包含两个属性
// done: 1.如果迭代器超过迭代序列的末尾，则值为true,在这种情况下，value可选地指定迭代器的返回值 2.如果迭代器能够生成序列中的下一个值，则值为false。这相当于没有完全指定done属性
// value: 迭代器返回的任意JavaScript值。当done的值为true时可以忽略该值
function* gen1() {
  yield 1;
  yield 2;
  yield 3;
}

var g1 = gen1(); // "Generator { }"
g1.next();      // "Object { value: 1, done: false }"
g1.next();      // "Object { value: 2, done: false }"
g1.next();      // "Object { value: 3, done: false }"
g1.next();      // "Object { value: undefined, done: true }"

// 2.Generator.prototype.return()
// 方法返回给定的值并结束生成器
// 语法：gen.return(value)
// 参数：value(需要返回的值)
// 返回值：返回该函数参数中给定的值
function* gen2() {
  yield 1;
  yield 2;
  yield 3;
}
const g2 = gen2();

g2.next() // {value: 1, done: false}
g2.return('foo') // {value: 'foo', done: true}
g2.next() // {value: undefined, done: true}

// 3.Generator.prototype.throw()
// 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有done及value两个属性的对象
// 语法：gen.throw(exception)
// 参数：用于抛出的异常，使用Error的实例对调试非常有帮助
// 返回值：返回的对象包含两个属性
// done: 1.如果迭代器超过迭代序列的末尾，则值为true,在这种情况下，value可选地指定迭代器的返回值 2.如果迭代器能够生成序列中的下一个值，则值为false。这相当于没有完全指定done属性
// value: 迭代器返回的任意JavaScript值。当done的值为true时可以忽略该值
function* gen3() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

const g3 = gen3();
g3.next(); // { value: 42, done: false }
g3.throw(new Error("Something went wrong")); // "Error caught!"

// 应用场景

// 1.异步编程
function ajax(url, successCallback, failCallback) {
  // 1.创建XMLHttpRequest对象
  let xmlHttp = null;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    // 兼容早期浏览器
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 2.发送请求
  xmlHttp.open('GET', url, true);
  xmlHttp.send();

  // 3.服务端响应
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      const data = JSON.parse(xmlHttp.responseText);
      successCallback && successCallback(data);
    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      failCallback && failCallback(xmlHttp.statusText);
    }
  }
}
function request(url) {
  ajax(url, res => {
    g4.next(res);
  })
}
function* gen4() {
  const res1 = yield request('static/a.json');
  console.log(res1);
  const res2 = yield request('static/b.json');
  console.log(res2);
  const res3 = yield request('static/c.json');
  console.log(res3);
}
const g4 = gen4();
g4.next();

// 2.7的倍数
function* count(x = 1) {
  while (true) {
    if (x % 7 === 0) {
      yield x;
    }
    x++;
  }
}
const c = count();
console.log(c.next().value); // 7
console.log(c.next().value); // 7
console.log(c.next().value); // 7