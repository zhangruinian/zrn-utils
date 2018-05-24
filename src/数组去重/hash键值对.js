var array = [{value: 1}, {value: 1}, {value: 2}];

function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        //直接item 的话对象tostring都会是 object[object Object]
        /*"dd" + {a:1}
        "dd[object Object]"*/
        console.log(typeof item + JSON.stringify(item))
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}

// 对象的属性可以基于 Hash 表实现，因此对属性进行访问的时间复杂度可以达到O(1);
// filter 是数组迭代的方法，内部还是一个 for 循环，所以时间复杂度是 O(n)。
console.log(unique(array)); // [{value: 1}, {value: 2}]
