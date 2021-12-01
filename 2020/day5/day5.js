const _ = require('lodash')

module.exports = {

  seatFromBoardingPass(boardingPass) {
    let rowMin = 0, rowMax = 127;
    let columnMin = 0, columnMax = 7;

    boardingPass.slice(0, 7).split('').forEach(half => {
      const result = computeSeat(half, 'F', rowMin, rowMax)
      rowMin = result.min
      rowMax = result.max
    })
    boardingPass.slice(-3).split('').forEach(half => {
      const result = computeSeat(half, 'L', columnMin, columnMax)
      columnMin = result.min
      columnMax = result.max
    })

    return rowMin * 8 + columnMin
  },

  solvePart1(input) {
    const allSeats = input.map(module.exports.seatFromBoardingPass)
    const sortedSeats = allSeats.sort((a, b) => a < b ? -1 : 1).slice(1)
    sortedSeats.forEach((seat, index) => {
      console.log(index, seat, sortedSeats[index+1])
      if (sortedSeats[index+1] - 1 !== seat && index !== sortedSeats.length - 1) {
        console.log('found', seat)
        missingSeat = seat+1
      }
    })
    console.log(allSeats.indexOf(missingSeat))
    return missingSeat
  },

  solvePart2(input) {
  }
}

function computeSeat(half, delimiter, min, max) {
  let resultMin = min
  let resultMax = max

  if (half === delimiter) {
    resultMax = resultMin + Math.floor((resultMax - resultMin)/2)
    resultMin = resultMin
  } else {
    resultMax = resultMax
    resultMin = resultMin + Math.ceil((resultMax - resultMin)/2)
  }
  return { min: resultMin, max: resultMax }
}
