/**
 * Iterator
 * 如果要让一个对象是可遍历的，就要遵循可迭代协议，该协议要求对象要部署一个以 Symbol.iterator 为key的键值对，而value
 * 就是一个无参函数，这个函数返回的对象要遵守迭代器协议
*/

/**
 * 可迭代协议
 *  可迭代协议允许JavaScript对象去定义或定制它们的迭代行为，例如在一个for ... of 结构中什么值可以被循环(得到)。
 * 一些内置类型都是可迭代类型并且有默认的迭代行为，比如 Array、Map,另一些类型则不是(比如Object)。
 *  为了变成可迭代对象，一个对象必须实现 @@iterator 方法，意思是这个对象必须有一个 Symbol.iterator的属性
 */
/**
 * 迭代器协议
 * 迭代器协议必须满足以下条件：
 * 1.是个对象
 * 2.其次，这个对象包含一个无参数函数next
 * 3.next返回一个对象，对象包含 done 和 value 属性，其中 done 表示遍历是否结束，value 表示当前遍历的值 
 */


/**
 * 基本语法
 */
const authors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ]
  }
};

// authors[Symbol.iterator] = function () {
//   const allAuthors = this.allAuthors;
//   let keys = Reflect.ownKeys(allAuthors);
//   let values = [];
//   return {
//     next() {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]];
//           keys.shift();
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// Generator实现
authors[Symbol.iterator] = function* () {
  const allAuthors = this.allAuthors;
  let keys = Reflect.ownKeys(allAuthors);
  let values = [];
  while (true) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]];
        keys.shift();
        yield values.shift()
      } else {
        return false;
      }
    } else {
      yield values.shift()
    }
  }
}

for (const iterator of authors) {
  console.log(iterator);
}
