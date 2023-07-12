const date = new Date().toISOString()
console.log(date)

const notes = [
  { id: 'A', title: 'Note A' },
  { id: 'B', title: 'Note B' },
  { id: 'A', title: 'tes aja sih' }
]
const withoutBracket = notes.filter((n) => n.id === 'A')
const withBracket = notes.filter((n) => n.id === 'A')[0]
console.log(withoutBracket)
console.log(withBracket)

const a = [{
  x: 1,
  b: 2,
  c: 3,
  n:
100
}]
const x = 20
a[0] = {
  ...a[0], x
}
const newA = a[0]
console.log(newA)
console.log(a)
