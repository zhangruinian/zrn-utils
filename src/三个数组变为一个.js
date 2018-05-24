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
//[ { time: 1, key1: 'a', key2: 4 },
//   { time: 2, key1: 'b', key2: 5 },
//   { time: 3, key1: 'c', key2: 6 } ]