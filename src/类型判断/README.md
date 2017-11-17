## 前言
简单的有判断数字还是字符串，进阶一点的有判断数组还是对象，再进阶一点的有判断日期、正则、错误类型，再再进阶一点还有比如判断 `plainObject`、`空对象`、Window 对象等等。
## typeof
es6之前的六种数据类型分别是

```js
    Undefined、Null、Boolean、Number、String、Object
```
typeof判断并不是一一对应,而且返回的都是小写字符串
```js
    undefined、object、boolean、number、string、object
```
 typeof 却能检测出函数类型：
 ```js
function a() {}
console.log(typeof a); // function
```
object还有很多细分类型

如 Array、Function、Date、RegExp、Error 等。typeof检测都是'object'

## Object.prototype.toString
更好的判断方法

返回由 "[object " 和 class 和 "]" 三个部分组成的字符串,class是要判断的对象的内部属性。

```js
    // class属性至少14种
    var number = 1;          // [object Number]
    var string = '123';      // [object String]
    var boolean = true;      // [object Boolean]
    var und = undefined;     // [object Undefined]
    var nul = null;          // [object Null]
    var obj = {a: 1}         // [object Object]
    var array = [1, 2, 3];   // [object Array]
    var date = new Date();   // [object Date]
    var error = new Error(); // [object Error]
    var reg = /a/g;          // [object RegExp]
    var func = function a(){}; // [object Function]
    // 但是window在低版本和其他浏览器兼容不一 故不可用来判断
    window 宿主对象              // [object Window]
    Math                      //[object Math]
    Math.pi                     // [object Number]
    JSON                       // [object JSON]
    function a() {
        console.log(Object.prototype.toString.call(arguments)); 
                                // [object Arguments]
    }
```
不过实际情况并不会 去检测Math,JSON

## 数组的简单判断

老版本jquery

```js
    // type函数是之前写好的
    var isArray = Array.isArray || function( obj ) {
        return type(obj) === "array";
    }
```




