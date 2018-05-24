// 通过从数组中创建每个可能的对创建一个新的数组。

function XProd(a, b) {
    return a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), [])
}

console.log(XProd([1, 2], ['a', 'b'])) // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

