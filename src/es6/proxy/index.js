/**
 * Proxy
 * 在ES6中新增了一个非常强大的功能是 Proxy,它可以自定义一些常用行为如查找、赋值、枚举、函数调用等。
 * 通过 Proxy 这个名称也可以看出来它包含了 “代理” 的含义，只要有代理的诉求都可以用 Proxy 来实现。
 *
 */

/**
 * 基本语法
 * @param {object} target - 用 Proxy包装的目标对象(可以是任意类型的对象，包括原生数组，函数，甚至是另一个代理)
 * @param {object} handler -一个对象，其属性是当执行一个操作时定义代理的行为函数
 */
// const p = new Proxy(target, handler);

/**
 * get
 * 拦截对象属性的读取。比如proxy.foo和proxy['foo']
 */
const arr = [1, 2, 3];
const newArr = new Proxy(arr, {
  get(target, property) {
    return property in target ? target[property] : 'error'
  }
});
console.log(newArr[1]);
console.log(newArr[10]);
console.log(arr[10], 'get');

/**
 * set
 * 拦截对象属性的设置，比如proxy.foo = v 或者 proxy['foo'] = v, 返回一个布尔值
 */
const arr1 = [];
const newArr2 = new Proxy(arr1, {
  set(target, property, value) {
    if (typeof value === 'number') {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  }
});
newArr2.push(1);
newArr2.push(2);
console.log(newArr2);
arr.push('333');
console.log(arr, 'set');

/**
 * has
 * 拦截propKey in proxy的操作，返回一个布尔值
 */
const range = {
  start: 1,
  end: 5
};
const newRange = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});
console.log(3 in newRange);
console.log(6 in newRange);

/**
 * ownKeys
 * 拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、
 * for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys() 返回的结果仅包括
 * 目标对象自身的可遍历的属性。
 */
const obj = {
  name: 'Simon',
  [Symbol('age')]: 23
};
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.keys(obj));
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key);
  }
}

const userInfo = {
  userName: 'Simon',
  age: 23,
  _password: '***'
}
const newUserInfo = new Proxy(userInfo, {
  ownKeys(target) {
    return Object.keys(target).filter(item => !item.startsWith('_'));
  }
});
console.log(Object.keys(newUserInfo));

/**
 * deleteProperty
 * 拦截 delete proxy[propKey]的操作，返回一个布尔值
 */
const userInfo1 = {
  userName: 'Warner',
  age: 20,
  _password: '***'
}
const newUserInfo1 = new Proxy(userInfo1, {
  get(target, property) {
    if (property.startsWith('_')) {
      throw new Error('不可访问');
    } else {
      return target[property];
    }
  },
  set(target, property, value) {
    if (property.startsWith('_')) {
      throw new Error('不可访问');
    } else {
      target[property] = value;
      return true;
    }
  },
  deleteProperty(target, property) {
    if (property.startsWith('_')) {
      throw new Error('不可访问');
    } else {
      delete target[property];
      return true;
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter(item => !item.startsWith('_'));
  }
});

// 获取
console.log(newUserInfo1.age);
try {
  console.log(newUserInfo1._password);
} catch (error) {
  console.log(error.message);
}

// 修改
newUserInfo1.age = 23;
console.log(newUserInfo1.age);
try {
  newUserInfo1._password = '123';
} catch (error) {
  console.log(error.message);
}

// 删除
try {
  delete newUserInfo1._password;
} catch (error) {
  console.log(error.message);
}

/**
 * apply
 * 拦截Proxy实例作为函数调用的操作(proxy(...args)、Function.prototype.apply()、Function.prototype.call())
 */
function sum(...args) {
  const result = args.reduce((prevValue, currentValue) => prevValue + currentValue);
  return result;
}
const newSum = new Proxy(sum, {
  apply(target, _thisArg, args) {
    return target(...args) * 2;
  }
});
console.log(sum(2, 2), 111);
console.log(newSum(2, 2), 222);

/**
 * construct
 * 拦截Proxy实例作为构造函数调用的操作
 */
class User {
  constructor(name) {
    this.name = name;
  }
}
const newUser = new Proxy(User, {
  construct(target, args) {
    console.log('construct');
    return new target(...args);
  }
})
console.log(new newUser('Simon').name);
console.log(new User('Simon').name);




