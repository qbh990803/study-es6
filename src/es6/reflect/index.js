// Reflect

/**
 * 设计目的
 */

// 将Object属于语言内部的方法放到Reflect上
const obj = {};
let newVal = '';

Reflect.defineProperty(obj, 'name', {
  get() {
    return newVal;
  },
  set(val) {
    console.log('set');
    newVal = val;
  }
})

obj.name = 'es';
console.log(obj.name);

// 修改某些Object方法的返回结果，让其变得更合理

// 老写法
try {
  // Object.defineProperty(target, props, attributes)
} catch (e) {
  console.log(e);
}

// 新写法
if (Reflect.defineProperty(target, props, attributes)) {
  // success
} else {
  // failure
}

// 让Object操作变成函数行为
console.log('assign' in Object); // true
console.log(Reflect.has(Object, 'assign')); // true

// Reflect对象的方法与Proxy对象的方法一一对应
let userInfo = {
  userName: 'Warner',
  age: 20,
  _password: '***'
}
userInfo = new Proxy(userInfo, {
  get(target, property) {
    if (property.startsWith('_')) {
      throw new Error('不可访问')
    } else {
      return Reflect.get(target, property);
    }
  },
  set(target, property, value) {
    if (property.startsWith('_')) {
      throw new Error('不可访问');
    } else {
      Reflect.set(target, property, value);
      return true;
    }
  },
  deleteProperty(target, property) {
    if (property.startsWith('_')) {
      throw new Error('不可访问');
    } else {
      Reflect.deleteProperty(target, property);
      return true;
    }
  },
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(item => !item.startsWith('_'));
  }
})


