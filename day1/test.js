const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = '199\n200\n208\n210\n200\n207\n240\n269\n260\n263'

  const solution = solvePart1(input)

  expect(solution).toEqual(7)
})

test('solves part 2', () => {
  const input = '199\n200\n208\n210\n200\n207\n240\n269\n260\n263'

  const solution = solvePart2(input)

  expect(solution).toEqual(5)
})
