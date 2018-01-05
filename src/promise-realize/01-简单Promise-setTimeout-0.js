function Promise(fn) {
    var callback = null
    // 实例方法 then
    this.then = function (cb) {
        callback = cb
    }
    // 私有方法 resolve
    function resolve(value) {
        setTimeout((function () {
            callback(value)
        }), 0)
    }
    fn(resolve)
}


function getUserId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1)
        }, 1500)
    })
}

function showUserId(id){
    console.log(id)
}
getUserId().then(showUserId)