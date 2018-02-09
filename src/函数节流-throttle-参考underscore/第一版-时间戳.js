/*
原理: 
使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。*/
/**
 * 节流
 * @param {function}func
 * @param {number} wait
 * @returns {Function}
 */
function throttle(func, wait) {
    var context, args
    var previous = 0
    return function () {
        var now = +new Date()
        context = this
        args = arguments
        // 因为一开始的数字必定大于wait 所以时间戳的会在开始就执行一次
        // 缺点是事件停止触发后就不再执行
        if(now - previous > wait) {
            func.apply(context, args)
            previous = now
        }
    }
}
