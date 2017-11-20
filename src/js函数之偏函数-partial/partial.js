// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

// 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

// 直接用bind

function add(a, b) {
    return a + b;
}

var addOne = add.bind(null, 1);

addOne(2) // 3

// 然而使用 bind 我们还是改变了 this 指向，我们要写一个不改变 this 指向的方法。

// 似曾相识的代码 和curry很像
function partial(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        // 传入this 不改变this指向
        return fn.apply(this, newArgs);
    };
};

// demo

function add(a, b) {
    return a + b + this.value;
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1);

var value = 1;
var obj = {
    value: 2,
    addOne: addOne
}
obj.addOne(2); // ???
// 使用 bind 时，结果为 4
// 使用 partial 时，结果为 5