// 给定一组有效的属性标识符和一组值，返回一个将属性与值关联的对象。
function zipObject(props, values) {
    return props.reduce((obj, prop, index) =>{
        obj[prop] = values[index]
        return obj
    },{})
}

console.log(zipObject(['a', 'b', 'c'], [1, 2])) // {a: 1, b: 2, c: undefined}
console.log(zipObject(['a', 'b'], [1, 2, 3])) // {a: 1, b: 2}