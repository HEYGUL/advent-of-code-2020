const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = 'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)\n' +
      'trh fvjkl sbzzf mxmxvkd (contains dairy)\n' +
      'sqjhc fvjkl (contains soy)\n' +
      'sqjhc mxmxvkd sbzzf (contains fish)'

  const solution = solvePart1(input)

  expect(solution).toEqual(5)
})

test('solves part 2', () => {
  const input = ''

  const solution = solvePart2(input)

  expect(solution).toEqual()
})
