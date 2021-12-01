const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const numbers = input.split(',').map(s => parseInt(s, 10))

    let index = numbers.length - 1
    const spoken = _.clone(numbers)

    while (index < 2020) {
      const lastNumber = spoken[index]
      const lastLastIndex = _.lastIndexOf(spoken, lastNumber, index - 1)
      if (lastLastIndex < 0) {
        spoken[index + 1] = 0
      } else {
        spoken[index + 1] = index - lastLastIndex
      }
      index++
    }
    return spoken[index - 1]
  },

  solvePart2 (input) {
    const numbers = input.split(',').map(s => parseInt(s, 10))

    let index = numbers.length
    const spoken = _.clone(numbers)
    const turns = new Array(30000000)
    spoken.forEach((n, index) => {
      turns[n] = [index + 1]
    })

    while (index < 30000000) {
      const lastNumber = spoken[index - 1]
      const lastNumberTurns = turns[lastNumber]

      const nextNumber = (lastNumberTurns && lastNumberTurns.length > 1)
        ? lastNumberTurns[1] - lastNumberTurns[0]
        : 0

      const nextNumberTurns = turns[nextNumber]
      if (nextNumberTurns) {
        turns[nextNumber] = [
          nextNumberTurns.pop(),
          index + 1
        ]
      } else {
        turns[nextNumber] = [index + 1]
      }

      spoken.push(nextNumber)

      index++
    }
    return spoken[index - 1]
  }
}
