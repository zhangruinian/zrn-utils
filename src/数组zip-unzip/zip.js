// 创建一组元素，根据原始数组中的位置进行分组。
function zip(...arrays) {
    var maxLength = Math.max(...arrays.map(x => x.length))
    // 只是new Array(maxLength) 填充的是 empty 不能直接遍历
    return Array.from({length: maxLength})
        .map((_, i) => {
            return Array.from({
                length: arrays.length
                // k i的顺序 两重循环, k是传入参数个数 外部下标 可能传入很多
            }, (_, k) => arrays[k][i])
        })
}

console.log(zip(['a', 'b'], [1, 2], [true, false]))
// [['a', 1, true], ['b', 2, false]]
console.log(zip(['a'], [1, 2], [true, false]))
// [['a', 1, true], [undefined, 2, false]]