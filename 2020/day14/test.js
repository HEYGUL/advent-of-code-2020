const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = 'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\n' +
      'mem[8] = 11\n' +
      'mem[7] = 101\n' +
      'mem[8] = 0'

  const solution = solvePart1(input)

  expect(solution).toEqual(165)
})

test('solves part 2', () => {
  const input = 'mask = 000000000000000000000000000000X1001X\n' +
      'mem[42] = 100\n' +
      'mask = 00000000000000000000000000000000X0XX\n' +
      'mem[26] = 1'

  const solution = solvePart2(input)

  expect(solution).toEqual(208)
})
