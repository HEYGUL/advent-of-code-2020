const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = 'Player 1:\n' +
      '9\n' +
      '2\n' +
      '6\n' +
      '3\n' +
      '1\n' +
      '\n' +
      'Player 2:\n' +
      '5\n' +
      '8\n' +
      '4\n' +
      '7\n' +
      '10\n'

  const solution = solvePart1(input)

  expect(solution).toEqual(306)
})

test('solves part 2', () => {
  const input = 'Player 1:\n' +
      '9\n' +
      '2\n' +
      '6\n' +
      '3\n' +
      '1\n' +
      '\n' +
      'Player 2:\n' +
      '5\n' +
      '8\n' +
      '4\n' +
      '7\n' +
      '10\n'

  const solution = solvePart2(input)

  expect(solution).toEqual(291)
})
