var array = [1, 2, 1, 1, '1'];

// 即便是forEach和filter也是es5的 find方法是es6的
function unique(array) {
    var res = array.filter(function(item, index, array){

        return array.indexOf(item) === index;
        // 不相等那就是有重复,下面得是吧重复的值给删除掉的操作
        // return array.indexOf(item) ===  array.lastIndexOf(item);
    })
    return res;
}

console.log(unique(array));