## Math.random

简单写法是这样

```js
var values = [1, 2, 3, 4, 5];

values.sort(function(){
    return Math.random() - 0.5;
});

console.log(values)
```
实际乱序效果并不能随人意, v8 在处理 sort 方法时，当目标数组长度小于 10 时，使用插入排序；反之，使用快速排序和插入排序的混合排序。数量小于10的时候并不完全乱序

## Fisher–Yates算法
```js
    function shuffle(a) {
        var j, x, i;
        // 此处第二个判断条件,i简写 等同于判断i > 0 
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    }
```
原理很简单，就是遍历数组元素，然后将当前元素与以后随机位置的元素进行交换，从代码中也可以看出，这样乱序的就会更加彻底。

如果利用 ES6，代码还可以简化成：
```js
function shuffle(a) {
    for (let i = a.length; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}
```

