const day1 = require('./day1')

test('returns 514579 with sample list', () => {
  const sampleList = [
    1721,
    979,
    366,
    299,
    675,
    1456
  ]

  const result = day1.solvePart1(sampleList)

  expect(result).toEqual(514579)
})

test('returns 241861950 with sample list', () => {
  const sampleList = [
    1721,
    979,
    366,
    299,
    675,
    1456
  ]

  const result = day1.solvePart2(sampleList, 3)

  expect(result).toEqual(241861950)
})
