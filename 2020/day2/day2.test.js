const day2 = require('./day2')

test('returns 2 for part 1 sample list', () => {
  const sampleList = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: cicicicicicicicic",
  ]

  const result = day2.solvePart1(sampleList)

  expect(result).toEqual(2)
})

test('returns 1 for part 2 sample list', () => {
  const sampleList = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc",
  ]

  const result = day2.solvePart2(sampleList)

  expect(result).toEqual(1)
})


