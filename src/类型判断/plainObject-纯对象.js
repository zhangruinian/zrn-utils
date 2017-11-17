//  plainObject 来自于 jQuery，可以翻译成纯粹的对象，所谓"纯粹的对象"，
// 就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。
// 之所以要判断是不是 plainObject，是为了跟其他的 JavaScript对象
// 如 null，数组，宿主对象（documents）等作区分，因为这些用 typeof 都会返回object。

// jquery的判断中认为一个没有原型的对象也是一个纯粹的对象

// 下面是vue的判断方法源码 简单判断

/*function isPlainObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}*/



// 以下为jquery判断方法

var toString = Object.prototype.toString
var hasOwn = Object.prototype.hasOwnProperty

function isPlainObject(obj) {
    var proto, Ctor;

    // 排除掉明显不是obj的以及一些宿主对象如Window
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    /**
     * getPrototypeOf es5 方法，获取 obj 的原型
     * 以 new Object 创建的对象为例的话
     * obj.__proto__ === Object.prototype
     */
    proto = Object.getPrototypeOf(obj);

    // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
    if (!proto) {
        return true;
    }

    /**
     * 以下判断通过 new Object 方式创建的对象
     * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
     * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
     */
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

    // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
    return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}

/*注意：我们判断 Ctor 构造函数是不是 Object 构造函数，用的是 hasOwn.toString.call(Ctor)，
这个方法可不是 Object.prototype.toString，不信我们在函数里加上下面这两句话：

console.log(hasOwn.toString.call(Ctor)); // function Object() { [native code] }
console.log(Object.prototype.toString.call(Ctor)); // [object Function]
发现返回的值并不一样，这是因为 hasOwn.toString 调用的其实是 Function.prototype.toString，毕竟 hasOwnProperty 可是一个函数！

而且 Function 对象覆盖了从 Object 继承来的 Object.prototype.toString 方法。
函数的 toString 方法会返回一个表示函数源代码的字符串。具体来说，包括 function关键字，形参列表，大括号，以及函数体中的内容。*/

function Person(name){this.name = name}

console.log(typeof Person) // function

console.log(typeof  new Person('A')) // object

console.log(isPlainObject({})) // true

console.log(isPlainObject(new Object)) // true

console.log(isPlainObject(Object.create(null)));

console.log(isPlainObject(Object.assign({a: 1}, {b: 2})));

console.log(isPlainObject(new Person('yayu'))); // true 但是在jquery中是false

console.log(isPlainObject(Object.create({}))); // true jquery中false