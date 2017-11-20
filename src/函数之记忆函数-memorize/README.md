## 概念
函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。
> 本质上是牺牲算法的空间复杂度换取更优的时间复杂度,在客户端js代码的执行时间复杂度往往成为瓶颈,所以这种牺牲空间换取时间的做法提升程序执行效率的做法是非常可取的

特别是在递归调用中,希望调用的的是记忆功能的函数

## 第一版

```js
    // 第一版 (来自《JavaScript权威指南》)
    // 闭包很实用很常见
    function memorize(f) {
        var cache = {};// 将结果保存在闭包内
        return function(){
            var key = arguments.length + Array.prototype.join.call(arguments, ",");
            if (key in cache) {
                return cache[key]
            }
            else {
                return cache[key] = f.apply(this, arguments)
            }
        }
    }
```
JSON.stringify对类数组对象之后变为对象,并不是数组字符串
## 改进权威指南的key
```js
    function memorize(f) {
            var cache = {};// 将结果保存在闭包内
            return function(...res){
                // 也可以这样
                /*
                 var key = JSON.stringify(Array.prototype.slice.call(arguments))
                 */
                var key = res.length + JSON.stringify(res)
                if (key in cache) {
                    return cache[key]
                }
                else {
                    return cache[key] = f.apply(this, arguments)
                }
            }
        }
```

## 实例测试验证
```js
    var add = function(a, b, c) {
      return a + b + c
    }
    
    var memoizedAdd = memoize(add)
    
    console.time('use memoize')
    for(var i = 0; i < 100000; i++) {
        memoizedAdd(1, 2, 3)
    }
    console.timeEnd('use memoize')
    
    console.time('not use memoize')
    for(var i = 0; i < 100000; i++) {
        add(1, 2, 3)
    }
    console.timeEnd('not use memoize')
```
## 第二版

因为第一版使用了 join 方法，我们很容易想到当参数是对象的时候，就会自动调用 toString 方法转换成 [Object object]，
再拼接字符串作为 key 值。我们写个 demo 验证一下这个问题：
```js
    var propValue = function(obj){
        return obj.value
    }
    
    var memoizedAdd = memoize(propValue)
    
    console.log(memoizedAdd({value: 1})) // 1
    console.log(memoizedAdd({value: 2})) // 1
```
 
```js
    // 第二版 (来自 underscore 的实现)
    var memorize = function(func, hasher) {
        var memory = function(key) {
             // 执行记忆函数的时候, 先获得缓存
            var cache = memory.cache;
             // 获得缓存地址
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
             // 如果缓存没有命中, 则需要调用函数执行
            if (!cache[address]) {
                cache[address] = func.apply(this, arguments);
            }
            return cache[address];
        };
        // 初始化记忆函数的缓存
        memory.cache = {};
        return memory;
    };
```

underscore 默认使用 function 的第一个参数作为 key，如果要支持多参数,自定义存储的key值
那就的传递hasher函数,一般可以默认用`JSON.stringify()`参数是对象的问题也可以得到解决，因为存储的是对象序列化后的字符串

## 适用场景

递归调用,斐波那契数列等,如果需要大量重复的计算，或者大量计算又依赖于之前的结果，便可以考虑使用函数记忆

