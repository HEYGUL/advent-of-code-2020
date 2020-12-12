const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = 'F10\n' +
      'N3\n' +
      'F7\n' +
      'R90\n' +
      'F11'

  const solution = solvePart1(input)

  expect(solution).toEqual(25)
})

test('solves part 2', () => {
  const input = ''

  const solution = solvePart2(input)

  expect(solution).toEqual()
})
