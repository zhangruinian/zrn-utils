/**
 * getMonth返回的是 从0开始 new Date()的第二个参数month也是从0开始
 * 月份month本来从0开始 现在要设置为当前后的一个月的0天又返回到了当前月
 * @param year
 * @param month
 * @returns {number}
 */
const getDatesOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

console.log(getDatesOfMonth(2018,1)) // 31
console.log(getDatesOfMonth(2018,2)) // 28
console.log(getDatesOfMonth(2018,4)) // 30