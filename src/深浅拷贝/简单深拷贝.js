// 在拷贝的时候判断一下属性值的类型，如果是对象，我们递归调用深拷贝函数

var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
// 无法处理null等
// 深拷贝使用递归,性能会有影响,要根据实际情况进行选择