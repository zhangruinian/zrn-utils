## 扩展视野
* 也有hash键值对来去重,但是需要typeof 和JSON.stringify对象序列化
* es6的set那更是简单不过
* The default conversion from an object to string is "[object Object]"
    
```js
    Function objects:
    stringify(function (){}) -> [object Function]
    Array objects:
    stringify([]) -> [object Array]
    RegExp objects
    stringify(/x/) -> [object RegExp]
    Date objects
    stringify(new Date) -> [object Date]
    … several more …
    and Object objects!
    stringify({}) -> [object Object]
    
    function stringify (x) {
        console.log(Object.prototype.toString.call(x));
    }
```
## 去重底层知识
indexOf 底层还是使用 === 进行判断，因为 NaN ==== NaN的结果为 false，所以使用 indexOf 查找不到 NaN 元素

Set 认为尽管 NaN === NaN 为 false，但是这两个元素是重复的。