const _ = require('lodash')

module.exports = {

  solvePart1(input) {
    const slopes = [
      { right: 1, down: 1 },
      { right: 3, down: 1 },
      { right: 5, down: 1 },
      { right: 7, down: 1 },
      { right: 1, down: 2 },
    ]
    let trees = 1
    slopes.forEach(slope => {
      trees *= treesForSlope(input, slope)
    })

    return trees
  },

  solvePart2(input) {
  }
}

function treesForSlope( input, { right, down }) {
  let trees = 0
  let currentPosition = { x: right, y: down }
  while (currentPosition.y < input.length) {
    trees += treeAt(input, currentPosition)
    currentPosition.x += right
    currentPosition.y += down
  }

  return trees
}

function treeAt(input, { x, y }) {
  const row = input[y]
  const column = row.charAt(x % row.length)

  const tree = column === '#' ? 1 : 0
  return tree
}
