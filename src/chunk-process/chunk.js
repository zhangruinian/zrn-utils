/*function chunk(array, process, context) {
    setTimeout(function () {
        var item = array.shift()
        process.call(context, item)
        if (array.length > 0) {
            setTimeout(arguments.callee, 100)
        }
    }, 100)
}*/

function chunk(array, process, context) {
    setTimeout(function repeat() {
        var item = array.shift()
        process.call(context, item)
        if (array.length > 0) {
            setTimeout(repeat, 100)
        }
    }, 100)
}