function booleanToString (b) {
  const a = JSON.stringify(b)
  const f = JSON.parse(b)
  console.log(f)
}
booleanToString(true)

//  function c (d) {
//     d.toString()
//     console.log(d)
//  }
// c(true)

console.log(true.toString())

function betterThanAverage (classPoints, yourPoints) {
  for (i = 0; i < classPoints.length; i++) {
    const sum = classPoints[i] += classPoints
    const avg = sum / classPoints.length
    return yourPoints > avg
  }
}

function test (a) {
  for (i = 0; i < a; i++) {
    const sum += a[i]
    return sum
  }
}

test([2,3])

console.log(betterThanAverage([2, 3], 5))
