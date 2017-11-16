var array = [1, 1, '1',2];

function unique(array) {
    var res = [];
    //有这种循环的地方都可以用forEach替代 函数式风格
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}

console.log(unique(array));