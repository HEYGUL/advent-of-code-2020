const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = '1 + (2 * 3) + (4 * (5 + 6))\n'

  const solution = solvePart1(input)

  expect(solution).toEqual(51)
})

test('solves part 1 - bis', () => {
  const input = '5 + (8 * 3 + 9 + 3 * 4 * 3)\n'

  const solution = solvePart1(input)

  expect(solution).toEqual(437)
})

test('solves part 1 - ter', () => {
  const input = '((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2\n'

  const solution = solvePart1(input)

  expect(solution).toEqual(13632)
})

test('solves part 2', () => {
  const input = '1 + (2 * 3) + (4 * (5 + 6))\n'

  const solution = solvePart2(input)

  expect(solution).toEqual(51)
})

test('solves part 2 - bis', () => {
  const input = '5 + (8 * 3 + 9 + 3 * 4 * 3)\n'

  const solution = solvePart2(input)

  expect(solution).toEqual(1445)
})
