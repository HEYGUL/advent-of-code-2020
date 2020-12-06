const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const answers = input.split('\n\n')

    const unique = answers.map(str => {
      const array = str.replace(/(?:\r\n|\r|\n)/g, '').split('')
      return _.uniq(array).length
    })

    return _.sum(unique)
  },

  solvePart2 (input) {
    const answers = input.split('\n\n')

    const unique = answers.map((str, index) => {
      const arrays = str.split('\n').map(s => s.split(''))

      let intersections = arrays[0]
      arrays.forEach(arr => {
        intersections = _.intersection(arr, intersections)
      })

      console.log(`Group ${index}: ${intersections.length}`)
      return intersections.length
    })

    return _.sum(unique)
  }
}
