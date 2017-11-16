function throttle(func, wait, options) {
    var timeout, context, args
    var previous = 0
    if (!options) options = {}

    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime()
        timeout = null
        func.apply(context, args)
        if (!timeout) context = args = null
    }

    var throttled = function () {
        var now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
    }
    // 加入取消
    throttled.cancel = function () {
        clearTimeout(timeout)
        previous = 0
        timeout = null
    }

    return throttled
}

// 取消的使用方法
/*
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

var setUseAction = throttle(getUserAction, 10000);

container.onmousemove = setUseAction

document.getElementById("button").addEventListener('click', function(){
    setUseAction.cancel();
})*/
