/**
 *
 * @param n
 * @returns {any}
 */
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

console.log(formatNumber(3)) // 03
console.log(formatNumber(0)) // 00
console.log(formatNumber(11)) // 11

// 现在有了es6的padStart函数 直接用原生即可

function leftPadding(n) {
    n = n.toString()
    return n.padStart(2,0)
}

console.log(leftPadding(2)) // 02
console.log(leftPadding(12)) // 12