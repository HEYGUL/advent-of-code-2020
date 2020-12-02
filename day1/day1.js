const _ = require('lodash')

module.exports = {

  solvePart1 (list) {
    const complementedList = list.map(input => 2020 - input)
    const values = _.intersection(list, complementedList)

    return _.reduce(values, (result, v) => result * v)
  },

  solvePart2 (list) {
    let result
    list.some((input1) =>
      list.some((input2) =>
        list.some((input3) => {
          if (input1 + input2 + input3 === 2020) {
            result = input1 * input2 * input3
            return true
          }
          return false
        })
      )
    )
    return result
  }

}
