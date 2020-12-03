const day3 = require('./day3')

test('', () => {
  const sampleList = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ]


  const result = day3.solvePart1(sampleList)

  expect(result).toEqual(336)
})

