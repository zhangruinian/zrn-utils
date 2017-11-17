// Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身
function isWindow( obj ) {
    return obj != null && obj === obj.window;
}

