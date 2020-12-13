const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = '939\n' +
      '7,13,x,x,59,x,31,19'

  const solution = solvePart1(input)

  expect(solution).toEqual(295)
})

test('solves part 2', () => {
  const input = '939\n' +
      '7,13,x,x,59,x,31,19'

  const solution = solvePart2(input)

  expect(solution).toEqual(1068781)
})

test('solves part 2 - 1', () => {
  const input = '939\n' +
      '1789,37,47,1889'

  const solution = solvePart2(input)

  expect(solution).toEqual(1202161486)
})
