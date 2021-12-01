const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = 'L.LL.LL.LL\n' +
      'LLLLLLL.LL\n' +
      'L.L.L..L..\n' +
      'LLLL.LL.LL\n' +
      'L.LL.LL.LL\n' +
      'L.LLLLL.LL\n' +
      '..L.L.....\n' +
      'LLLLLLLLLL\n' +
      'L.LLLLLL.L\n' +
      'L.LLLLL.LL'

  const solution = solvePart1(input)

  expect(solution).toEqual(26)
})

test('solves part 2', () => {
  const input = ''

  const solution = solvePart2(input)

  expect(solution).toEqual()
})
