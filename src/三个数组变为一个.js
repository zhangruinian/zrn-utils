let a1 = [1, 2, 3],
    a2 = ['a', 'b', 'c'],
    a3 = [4, 5, 6]
temp = []

for (var i = 0; i < a1.length; i++) {
    temp.push({
        time: a1[i],
        key1: a2[i],
        key2: a3[i]
    })
}
console.log(temp)