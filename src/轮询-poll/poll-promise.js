// 与非promise的区别, 只需要传入判断条件,将回调处理函数放到promise.then()和catch中
// 加深对promise的学习和使用, 最外层都是返回psomise((resolve,reject) =>{
//  然后里面进行具体逻辑处理
// })
function poll(judge, timeout = 20000, interval = 1000) {
    var endTime = Number(new Date()) + timeout

    return new Promise(function (resolve, reject) {
        (function p() {
            if (judge()) {
                resolve()
            }
            else if (Number(new Date()) < endTime) {
                setTimeout(p, interval)
            }
            else {
                reject('timed out for ' + judge + ': ' + arguments)
            }
        })()
    })
}

poll(function () {
    return document.getElementById('lightbox').offsetWidth > 0
}).then(function () {
    // Done
}).catch(function () {
    // Fail
})