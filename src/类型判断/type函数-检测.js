// 如果是基本类型就使用typeof 引用类型就用toString,所有结果均转为小写
function type(val){
    // 字符串拼凑的方法
    // return Object.prototype.toString.call(val).split(' ')[1].split(']')[0].toLowerCase();

    // 正则匹配的方法
    var reg = /(\w+)]$/
    var matches = reg.exec(Object.prototype.toString.call(val))[1]
    // console.log(matches.toLowerCase())
    return matches.toLowerCase()
}
type('[]')

// 基于type函数封装类型的直接判断

function isFunction(val){
    return type(val) === 'function'
}

console.log(isFunction('a'))
console.log(isFunction())
