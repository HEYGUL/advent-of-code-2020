const { solvePart1, solvePart2 } = require('./')

describe('Part I', () => {
  [
    { input: '0,3,6', expected: 436 },
    { input: '2,1,3', expected: 10 },
    { input: '1,3,2', expected: 1 },
    { input: '1,2,3', expected: 27 },
    { input: '2,3,1', expected: 78 },
    { input: '3,2,1', expected: 438 },
    { input: '3,1,2', expected: 1836 },
    { input: '14,8,16,0,1,17', expected: 240 }
  ].forEach(({ input, expected }) => {
    test('solves part 1', () => {
      const solution = solvePart1(input)

      expect(solution).toEqual(expected)
    })
  })
})

describe('Part II', () => {
  [
    { input: '0,3,6', expected: 175594 },
    { input: '2,1,3', expected: 3544142 },
    { input: '1,3,2', expected: 2578 },
    { input: '1,2,3', expected: 261214 },
    { input: '2,3,1', expected: 6895259 },
    { input: '3,2,1', expected: 18 },
    { input: '3,1,2', expected: 362 },
    { input: '14,8,16,0,1,17', expected: 505 }
  ].forEach(({ input, expected }) => {
    test('solves part 2', () => {
      const solution = solvePart2(input)

      expect(solution).toEqual(expected)
    })
  })
})
