const day5 = require('./day5')

test('returns the seat', () => {
  const boardingPass = 'FBFBBFFRLR'
  const result = day5.seatFromBoardingPass(boardingPass)

  expect(result).toEqual(357)
})

test('returns the seats for a list', () => {
  const boardingPasses = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL',
  ]
  const result = day5.solvePart1(boardingPasses)

  expect(result).toEqual(820)
})

