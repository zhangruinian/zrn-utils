function formatNumber(str) {
    let arr = [],
        count = str.length

    while (count >= 3) {
        arr.unshift(str.slice(count - 3, count))
        count -= 3
    }

    // 如果是不是3的倍数就另外追加到上去
    str.length % 3 && arr.unshift(str.slice(0, str.length % 3))

    return arr.toString()

}
console.log(formatNumber("1234567890")) // 1,234,567,890