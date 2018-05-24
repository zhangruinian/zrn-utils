var after = function (fn, afterFn) {
    return function () {
        var res = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return res
    }
}


function a() {
    console.log('a')
}

var afterTest = after(a, function () {
    console.log('最后')
})

afterTest()