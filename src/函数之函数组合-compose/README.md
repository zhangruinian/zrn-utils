## 函数组合compose概念
将两个或者更多的函数组合成一个函数，让代码从右向左运行，而不是由内而外运行，可读性大大提升。这便是函数组合。

## 举列

```js
// 不好的例子,由内向外,会产生更多的嵌套，类似于 fn3(fn2(fn1(fn0(x))))
var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'HELLO, ' + x; };

var greet = function(x){
    return hello(toUpperCase(x));
};

greet('kevin');

```
## 初次优化
```js
    var compose = function(f,g) {
        return function(x) {
            return f(g(x));
        };
    };
    
    var greet = compose(hello, toUpperCase);
    greet('kevin');
```
目前只可以支持两个参数,下面接着支持多参数的

## underscore版compose

```js
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};
```
## redux版compose简洁实现

```js
    // 箭头函数this, return已经加上
    function compose(...funcs) {
      if (funcs.length === 0) {
        return arg => arg
      }
    
      if (funcs.length === 1) {
        return funcs[0]
      }
    
      return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)))
      /* return funcs.reduce(function(a,b){
            return function(...args){
                // 终于理解了,返回的函数结果变为a,然后下一个变为b 
                return a(b(...args))
            }
       }) */
    }
```
## pointfree

> Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。即不使用所要处理的值，只合成运算过程。

好处
> pointfree 模式能够帮助我们减少不必要的命名，让代码保持简洁和通用，更符合语义，更容易复用，测试也变得轻而易举。柯里化和组合容易帮助实现

