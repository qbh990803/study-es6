// Promise

/**
 * Ajax原理
 */

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

/**
 * 回调地狱
 */

ajax(
  'static/a.json',
  res => {
    console.log(res);

    ajax(
      'static/b.json',
      res => {
        console.log(res);

        ajax(
          'static/c.json',
          res => console.log(res)
        )
      }
    )
  }
);

/**
 * 用Promise解决回调地狱问题
 */
function getPromise(url) {
  return new Promise((resolve, reject) => {
    ajax(
      url,
      res => resolve(res),
      error => reject(error)
    );
  })
}

getPromise('static/a.json')
  .then((response) => {
    console.log(response);
    return getPromise('static/b.json');
  })
  .then(response => {
    console.log(response);
    return getPromise('static/c.json');
  })
  .then(response => {
    console.log(response);
  })

/**
 * 基本语法
 * Promise构造函数接受一个函数为参数，该函数的两个参数分别是resolve和reject.
 * 1.处理结果正常的话，调用resolve(处理结果值)，将Promise对象的状态从 ‘未完成’ 变成 ‘成功’，在异步操作成功时调用，并将异步操作的结果，作为参数返回出去
 * 2.处理结果错误的话，调用reject(Error对象)，将Promise对象的状态从 ‘未完成’ 变成 ‘失败’，在异步操作失败时调用，并将异步操作的结果，作为参数返回出去
 */

// 构造函数
const promise = new Promise(function (resolve, reject) {
  // ... some code
  if ('异步操作成功') {
    resolve();
  } else {
    reject();
  }
})

// Promise.prototype.then()
// 这段代码创建了一个Promise对象，定义了处理 onFulfilled 和 onRejected 的函数(handler) 然后返回这个Promise对象
// 这个Promise对象会在变为 resolve 和 reject 的时候分别调用相对应注册的回调函数
// 当 handler 返回一个正常值的时候，这个值会传递给 Promise 对象 的 onFulfilled方法
// 当 handler 中产生异常的时候，这个值会传递给 Promise 对象 的 onRejected 方法
const promise1 = new Promise(function (resolve, reject) {
  resolve('传递给then的值');
})
promise1.then(function (value) {
  console.log(value);
}, function (error) {
  console.log(error);
})

// Promise.prototype.catch()
// 捕获异常是程序质量保障最基本的要求，可以使用Promise对象的 catch 方法来捕获异步操作过程中出现的任何异常
function test() {
  return new Promise((resolve, reject) => {
    reject(new Error('es'));
  })
}
test().catch(error => console.log(error.message));

/**
 * 静态方法
 */

// Promise.resolve()
// Promise.resolve(42) 是下面代码的语法糖

new Promise(function (resolve, reject) {
  resolve(42)
})

// Promise.reject()
// Promise.reject(new Error('出错了')) 是下面代码的语法糖
new Promise(function (resolve, reject) {
  reject(new Error('出错了'));
})

// Promise.all()
// Promise.all()生成并返回一个新的Promise对象，所以它可以使用Promise对象的所有方法，参数传递promise数组，当promise数组中所有的Promise对象都变为resolve的时候，该方法才返回，新创建的Promise则会使用这些promise的值
// 如果参数中的任何一个promise为reject的话，则整个Promise.all()调用会立即终止，并返回一个reject的新的Promise对象
// 由于参数数组中的每个元素都是由 Promise.resolve包装的，所以Promise.all可以处理不同类型的Promise对象
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(function (res) {
  console.log(res); // [1,2,3]
})

// Promise.race()
// Promise.race(iterable)方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
const p4 = Promise.resolve(1);
const p5 = Promise.resolve(2);
const p6 = Promise.resolve(3);

Promise.race([p4, p5, p6]).then(function (resolve) {
  console.log(resolve); // 1
})

