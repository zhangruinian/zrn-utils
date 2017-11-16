/*
原理: 
当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，
直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。*/
/**
 * 节流
 * 会在 n(wait) 秒后第一次执行
 * 第二种事件停止触发后依然会再执行一次事件
 * @param {function}func
 * @param {number} wait
 * @returns {Function}
 */
function throttle(func, wait) {
    var context, args, timeout
    return function () {
        context = this
        args = arguments
        if(!timeout){
            timeout = setTimeout(function () {
                // 进行垃圾回收和清空
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}
