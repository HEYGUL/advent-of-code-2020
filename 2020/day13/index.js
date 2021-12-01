const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n')

    const currentTime = parseInt(lines[0], 10)
    const waitingTimes = lines[1].split(',').map(bus => {
      if (bus === 'x') return null
      const busNumber = parseInt(bus, 10)
      return {
        busNumber,
        waitingTime: busNumber - (currentTime - (busNumber * Math.trunc(currentTime / busNumber)))
      }
    })
    const result = _.minBy(_.compact(waitingTimes), 'waitingTime')
    return result.waitingTime * result.busNumber
    // 59-(939 - (15*59))
  },

  solvePart2 (input) {
    const lines = input.split('\n')
    const busNumbers = lines[1].split(',').map(bus => parseInt(bus, 10) || 0)
    let index = 1
    let currentValue = busNumbers[0]

    while (true) {
      let found = true
      for (let i = 0; i < busNumbers.length; i++) {
        if (busNumbers[i] === 0) {
          continue
        }
        if (((currentValue + i) % busNumbers[i]) !== 0) {
          found = false
          break
        } else {
          index *= busNumbers[i]
        }
      }

      if (found) {
        return currentValue
      }
      currentValue += index
      index = 1
    }
  }
}
