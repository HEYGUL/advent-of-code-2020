const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = '.#.\n' +
      '..#\n' +
      '###'

  const solution = solvePart1(input)

  expect(solution).toEqual(112)
})

test('solves part 2', () => {
  const input = '.#.\n' +
      '..#\n' +
      '###'

  const solution = solvePart2(input)

  expect(solution).toEqual(848)
})
