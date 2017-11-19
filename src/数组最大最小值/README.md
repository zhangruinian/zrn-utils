## 原始方法
循环遍历一遍

```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result =  Math.max(result, arr[i]);
    }
    console.log(result);
```
## reduce (es5)

既然是通过遍历数组求最终值,那可以使用reduce方法

```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    
    function max(prev, next) {
        return Math.max(prev, next);
    }
    console.log(arr.reduce(max));

```
## 排序

如果我们先对数组进行一次排序(降序)，那么最大值就是第一个值

```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    
    arr.sort(function(a,b){return b - a;});
    console.log(arr[0])
```
## eval

Math.max 支持传多个参数来进行比较，那么我们如何将一个数组转换成参数传进 Math.max 函数呢？eval 便是一种 
```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    
    var max = eval("Math.max(" + arr + ")");
    console.log(max)
```
## apply

```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    console.log(Math.max.apply(null, arr))
```
## ES6 ...扩展运算符

```js
    var arr = [6, 4, 1, 8, 2, 11, 23];
    console.log(Math.max(...arr))
```