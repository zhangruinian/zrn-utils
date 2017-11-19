## 扁平化定义
> 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

```js
    var arr = [1, [2, [3, 4]]];
    console.log(flatten(arr)) // [1, 2, 3, 4]
```
## 递归

我们最一开始能想到的莫过于循环数组元素，如果还是一个数组，就递归调用该方法：但是每种递归怎么用和处理要搞清楚本质

```js
    // 方法 1
    var arr = [1, [2, [3, 4]]];
    
    function flatten(arr) {
        var result = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (Array.isArray(arr[i])) {
                // 重点
                result = result.concat(flatten(arr[i]))
            }
            else {
                result.push(arr[i])
            }
        }
        return result;
    }
    
    console.log(flatten(arr))
```
## reduce

既然是对数组进行处理，最终返回一个值，我们就可以考虑使用 reduce 来简化代码：
```js
    // 方法3
    var arr = [1, [2, [3, 4]]];
    
    function flatten(arr) {
        return arr.reduce(function(prev, next){
            return prev.concat(Array.isArray(next) ? flatten(next) : next)
        }, [])
    }
    
    console.log(flatten(arr))
```
## ...扩展运算符

ES6 增加了扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中

### 扁平一层

```js
    var arr = [1, [2, [3, 4]]];
    console.log([].concat(...arr)); // [1, 2, [3, 4]]
```

### 扁平所有

```js
  
    var arr = [1, [2, [3, 4]]];
    
    function flatten(arr) {
        // 判断条件,直到扁平的没有数组不是ture了返回 arr一直在被扁平
        while (arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr);
        }
    
        return arr;
    }
   
    console.log(flatten(arr))
```
