const day6 = require('./day6')

test('returns 11', () => {
  const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

  const result = day6.solvePart1(input)

  expect(result).toEqual(11)
})

test('returns 6', () => {
  const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

  const result = day6.solvePart2(input)

  expect(result).toEqual(6)
})

test('returns 1', () => {
  const input = `ab
ac

`

  const result = day6.solvePart2(input)

  expect(result).toEqual(1)
})
