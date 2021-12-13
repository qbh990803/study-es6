// module

/**
 * 模块化前的开发问题
 * 
 * 全局变量污染: 各个文件的变量都挂载到window对象上，污染全局变量
 * 变量重名：不同文件中的变量如果重名，后面的会覆盖前面的，造成程序运行错误
 * 文件依赖顺序：多个文件之间存在依赖关系，需要保证一定的加载顺序问题严重。
 */

/**
 * 模块化的发展
 * 
 * 无模块化 ——> CommonJS规范 ——> AMD规范 ——> CMD规范 ——> ES6规范
 * 
 * CommonJS规范(Node中的模块化规范)
 *  CommonJS的诞生给js模块化发展有了重要的启发，CommonJS非常受欢迎，但是局限性很明显：
 *  CommonJS基于Node原生api在服务端可以实现模块同步加载，但是仅仅局限于服务端，客户端如果同步
 *  加载依赖的话时间消耗非常大，所以需要一个在客户端基于CommonJS但是对于加载模块做改进的方案，
 *  于是AMD规范诞生了
 * AMD规范
 *  异步模块定义，允许指定回调函数，AMD是RequireJS在推广过程中对模块化定义的规范化产出。它采用
 *  异步方式加载模块，模块的加载不影响它后面的语句执行。所有依赖这个模块的语句，都定义在一个回调
 *  函数中，等到所有依赖加载完成之后(前置依赖)，这个回调函数才会运行。
 * CMD规范
 *  同样是受到CommonJS的启发，国内(阿里)诞生了一个CMD(Common Module Definition)规范。该规范
 *  借鉴了CommonJS规范和AMD规范，在两者基础上做了改进。CMD是SeaJS在推广过程中对模块化定义的产出。
 *  AMD推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。
 * ES6规范
 *  到了2015年，ES6规范中，终于将模块化纳入JavaScript标准，从此js模块化被官方扶正，也是未来js的
 *  标准，在ES6中，我们可以使用import关键字引入模块，通过export关键字导出模块，功能较之于前几个
 *  方案更为强大，也是我们所推崇的，但是由于ES6目前无法在浏览器中执行，所以我们只能通过babel将不被
 *  支持的import编译为当前受到广泛支持的require
 */

/**
 * export
 * 
 * 模块功能主要由两个命令组成：export和import。export命令用于规范模块的对外接口，import命令用于输入其他模块
 * 提供的功能。
 * 
 * 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，
 * 就必须用export关键字输出变量
 */

// 导出变量或者常量
// export const name = 'Simon';
// export const address = 'BeiJing City';

// 或者
// const name = 'Simon';
// const address = 'BeiJing City';
// export {
//   name,
//   address
// }

/**
 * as
 *
 * 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名
 */
// const name = 'Simon';
// const address = 'BeiJing City';
// export {
//   name as cname,
//   address as addr,
// }

/**
 * export default
 *
 * 使用import命令的时候，用户需要知道所要加载的变量名或者函数名，否则无法加载。但是，用户
 * 肯定希望快速上手，未必愿意读文档，去了解模块有哪些属性和方法。
 *
 * 为了给用户提供方便，让他们不用去阅读文档就能加载模块，就要用到export default命令，为模块
 * 指定默认输出
 */
// const name = 'Simon';
// const address = 'BeiJing City';
// const list = [1, 2, 3];

// export {
//   name, address
// }
// export default list;

/**
 * import
 *
 * 使用export命令定义了模块对外的接口后，其他js文件就可以通过import命令加载这个模块
 */

// 1.直接导入
// const name = 'hello';
// const address = 'BeiJing City';
// const list = [1, 2, 3];

// export {
//   name as cname,
//   address as addr,
// }

// export default list;

// 则导入
// import list, { cname, addr } from 'A'

// 2.修改导入名称
// import list, {
//   cname as name,
//   addr
// } from A

// 批量导入
// import list, * as mod from A



import moduleA, * as moduleB from "./static/moduleA.js";

console.log(moduleA, moduleB);