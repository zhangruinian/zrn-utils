
function formatNumber(str) {
    return [...str].reduce((acc,cur,index) =>{
        return (index % 3 ? cur : (cur + ',')) + acc
    })
}

console.log(formatNumber('3256642'))
/*
function formatNumber(str) {
    return [...str].reduce((acc, cur, index) => {
        return (index % 3 ? acc : (acc + ',')) + cur
    })
}


console.log(formatNumber("1234567890"))
123, 456, 789, 0*/
