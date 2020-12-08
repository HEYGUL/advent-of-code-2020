const day8 = require('./day8')

test('returns 5', () => {
  const input = 'nop +0\n' +
      'acc +1\n' +
      'jmp +4\n' +
      'acc +3\n' +
      'jmp -3\n' +
      'acc -99\n' +
      'acc +1\n' +
      'jmp -4\n' +
      'acc +6\n'

  const solution = day8.solvePart1(input)

  expect(solution).toEqual(5)
})

test('returns 8', () => {
  const input = 'nop +0\n' +
      'acc +1\n' +
      'jmp +4\n' +
      'acc +3\n' +
      'jmp -3\n' +
      'acc -99\n' +
      'acc +1\n' +
      'jmp -4\n' +
      'acc +6\n'

  const solution = day8.solvePart2(input)

  expect(solution).toEqual(8)
})
