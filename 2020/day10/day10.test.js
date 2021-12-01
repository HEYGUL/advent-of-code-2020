const day10 = require('./day10')

test('solves part 1', () => {
  const input = '16\n' +
      '10\n' +
      '15\n' +
      '5\n' +
      '1\n' +
      '11\n' +
      '7\n' +
      '19\n' +
      '6\n' +
      '12\n' +
      '4\n'

  const solution = day10.solvePart1(input)

  expect(solution).toEqual(35)
})

test('solves part 1', () => {
  const input = '28\n' +
      '33\n' +
      '18\n' +
      '42\n' +
      '31\n' +
      '14\n' +
      '46\n' +
      '20\n' +
      '48\n' +
      '47\n' +
      '24\n' +
      '23\n' +
      '49\n' +
      '45\n' +
      '19\n' +
      '38\n' +
      '39\n' +
      '11\n' +
      '1\n' +
      '32\n' +
      '25\n' +
      '35\n' +
      '8\n' +
      '17\n' +
      '7\n' +
      '9\n' +
      '4\n' +
      '2\n' +
      '34\n' +
      '10\n' +
      '3\n'

  const solution = day10.solvePart1(input)

  expect(solution).toEqual(220)
})

test('solves part 2 - ter', () => {
  const input = '5\n' +
      '1\n' +
      '7\n' +
      '6\n' +
      '4\n'

  const solution = day10.solvePart2(input)

  expect(solution).toEqual(4)
})

test('solves part 2', () => {
  const input = '16\n' +
      '10\n' +
      '15\n' +
      '5\n' +
      '1\n' +
      '11\n' +
      '7\n' +
      '19\n' +
      '6\n' +
      '12\n' +
      '4\n'

  const solution = day10.solvePart2(input)

  expect(solution).toEqual(8)
})

test('solves part 2 bis', () => {
  const input = '28\n' +
      '33\n' +
      '18\n' +
      '42\n' +
      '31\n' +
      '14\n' +
      '46\n' +
      '20\n' +
      '48\n' +
      '47\n' +
      '24\n' +
      '23\n' +
      '49\n' +
      '45\n' +
      '19\n' +
      '38\n' +
      '39\n' +
      '11\n' +
      '1\n' +
      '32\n' +
      '25\n' +
      '35\n' +
      '8\n' +
      '17\n' +
      '7\n' +
      '9\n' +
      '4\n' +
      '2\n' +
      '34\n' +
      '10\n' +
      '3\n'

  const solution = day10.solvePart2(input)

  expect(solution).toEqual(19208)
})
