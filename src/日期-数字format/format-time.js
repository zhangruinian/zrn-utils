function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * Y: year
 * M: month
 * D: day
 * H: hour
 * m: minutes
 * S: seconds
 */
/**
 * 可根据需要传递pattern得到自己想要的结果
 * @param date 日期对象
 * @param pattern
 * @returns {string}
 */
const formatTime = (date = new Date(), pattern = 'Y/M/D') => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return pattern
        .replace('Y', year)
        .replace('M', formatNumber(month))
        .replace('D', formatNumber(day))
        .replace('H', formatNumber(hour))
        .replace('m', formatNumber(minutes))
        .replace('S', formatNumber(seconds))
}

console.log(formatTime()) // 2018/04/10
console.log(formatTime(new Date(2018, 3, 21))) // 2018/04/21
console.log(formatTime(new Date(1822333333333),'Y-M-D H:m:S')) // 2027-10-01 03:42:13
console.log(formatTime(new Date(2018, 3, 21), 'Y年M月D日')) // 2018年04月21日


