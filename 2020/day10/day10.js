const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const adapters = input.split('\n').filter(s => !_.isEmpty(s)).map(s => parseInt(s, 10)).sort((a, b) => a < b ? -1 : 1)

    const differences = adapters.map((adapter, index) => {
      if (index === adapters.length - 1) {
        return 3
      } else {
        return adapters[index + 1] - adapter
      }
    })
    const oneDifferenceCount = differences.filter(diff => diff === 1).length + 1
    const threeDifferenceCount = differences.filter(diff => diff === 3).length
    return oneDifferenceCount * threeDifferenceCount
  },

  solvePart2 (input) {
    let adapters = input.split('\n').filter(s => !_.isEmpty(s)).map(s => parseInt(s, 10)).sort((a, b) => a > b ? 1 : -1)
    adapters = _.concat([0], adapters, [_.max(adapters) + 3])

    let possibilities = 1
    let successiveNumbers = 1
    adapters.forEach((adapter, index) => {
      if (adapters[index + 1] - adapters[index] === 1) {
        successiveNumbers++
      } else {
        possibilities = possibilities * getMultiplier(successiveNumbers)
        successiveNumbers = 1
      }
    })

    return possibilities
  }
}

function getMultiplier (n) {
  switch (n) {
    case 3:
      return 2
    case 4:
      return 4
    case 5:
      return 7
    default:
      return 1
  }
}
