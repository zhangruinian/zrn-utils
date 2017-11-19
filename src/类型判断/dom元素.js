isElement = function(obj) {
    // 多加了一个obj的判断,因为如果调用函数时没有传入参数时 obi.nodeType会报错
    // 也是为了函数的健壮性等
    return !!(obj && obj.nodeType === 1);
};