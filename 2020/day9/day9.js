const _ = require('lodash')

function computePossibleSums (array, sum) {
  let found = false

  for (let i = 0; i < array.length && !found; i++) {
    for (let j = i + 1; j < array.length && !found; j++) {
      found = (array[i] + array[j] === sum)
    }
  }
  return found
}

module.exports = {

  solvePart1 (input) {
    const numbers = input.split('\n').map(s => parseInt(s, 10))
    const headerCount = 127

    let index = headerCount
    let numberIsValid = true
    let currentNumber

    do {
      currentNumber = numbers[index]
      numberIsValid = computePossibleSums(numbers.slice(index - headerCount, index), currentNumber)
      index++
    } while (numberIsValid)

    return currentNumber
  },

  solvePart2 (input) {
    const invalidNumber = module.exports.solvePart1(input)
    const numbers = input.split('\n').map(s => parseInt(s, 10))

    let index = 0
    let found = false
    let rangeCount = 2

    do {
      rangeCount = 2
      let currentSum
      do {
        currentSum = _.sum(numbers.slice(index, index + rangeCount))
        rangeCount++
      } while (currentSum < invalidNumber && (index + rangeCount) < numbers.length)
      found = (currentSum === invalidNumber)
      index++
    } while (!found)

    return _.min(numbers.slice(index - 1, index + rangeCount - 2)) + _.max(numbers.slice(index - 1, index + rangeCount - 2))
  }
}
