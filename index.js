
let sumArr = function (arr) {
    return arr.reduce(function(pre,cur){return pre+cur})
}

let covArr = function (arr) {
    return sumArr(arr) / arr.length;
}

const utils = {
    sumArr,
    covArr
}

module.exports = utils