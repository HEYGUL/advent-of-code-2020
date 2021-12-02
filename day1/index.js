const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n').map(s => parseInt(s))

    const increases = lines.filter((line, index) => {
      if (index === 0) return undefined

      return line > (lines[index - 1])
    })

    return increases.length
  },

  solvePart2 (input) {
    const lines = input.split('\n').map(s => parseInt(s))

    const increases = lines.filter((line, index) => {
      if (index < 3) return undefined

      return (line + lines[index - 1] + lines[index - 2] > lines[index - 1] + lines[index - 2] + lines[index - 3])
    })

    return increases.length
  }
}
