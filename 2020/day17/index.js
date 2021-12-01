const _ = require('lodash')

function cubeFrom ({ x, y, z }) {
  return `${x}_${y}_${z}`
}

function coordFrom (node) {
  return node.split('_').map(s => parseInt(s, 10))
}

function getNeighbors (cube) {
  const [x, y, z] = coordFrom(cube)
  const neighbors = new Set()
  const Offsets = [-1, 0, 1]
  for (const xOffset of Offsets) {
    for (const yOffset of Offsets) {
      for (const zOffset of Offsets) {
        const neighbor = cubeFrom({
          x: x + xOffset,
          y: y + yOffset,
          z: z + zOffset
        })
        neighbors.add(neighbor)
      }
    }
  }
  neighbors.delete(cube)
  return neighbors
}

function nextStep (universe, getNeighbors) {
  const newUniverse = new Set()
  const cubes = {}

  for (const activeNode of universe) {
    const neighbors = getNeighbors(activeNode)

    let activeNeighborCount = 0
    for (const neighbor of neighbors) {
      if (universe.has(neighbor)) {
        activeNeighborCount += 1
      }

      if (neighbor in cubes) {
        cubes[neighbor] += 1
      } else {
        cubes[neighbor] = 1
      }
    }

    if (activeNeighborCount === 2 || activeNeighborCount === 3) {
      newUniverse.add(activeNode)
    }
  }

  for (const cube in cubes) {
    if (cubes[cube] === 3) { newUniverse.add(cube) }
  }

  return newUniverse
}

function initialUniverse (lines, getCubeKey) {
  const set = new Set()
  for (let x = 0; x < lines.length; x += 1) {
    for (let y = 0; y < lines[0].length; y += 1) {
      const cubeKey = getCubeKey({ x, y, z: 0, w: 0 })
      if (lines[x][y] === '#') {
        set.add(cubeKey)
      }
    }
  }
  return set
}

function cube4dFrom ({ x, y, z, w }) {
  return `${x}_${y}_${z}_${w}`
}

function getNeighbors4d (node) {
  const [x, y, z, w] = coordFrom(node)
  const neighbors = new Set()
  const Offsets = [-1, 0, 1]
  for (const xOffset of Offsets) {
    for (const yOffset of Offsets) {
      for (const zOffset of Offsets) {
        for (const wOffset of Offsets) {
          const neighbor = cube4dFrom({
            x: x + xOffset,
            y: y + yOffset,
            z: z + zOffset,
            w: w + wOffset
          })
          neighbors.add(neighbor)
        }
      }
    }
  }
  neighbors.delete(node)
  return neighbors
}

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n').filter(l => !_.isEmpty(l))
    let universe = initialUniverse(lines, cubeFrom)

    for (let i = 0; i < 6; i++) {
      universe = nextStep(universe, getNeighbors)
    }
    return universe.size
  },

  solvePart2 (input) {
    const lines = input.split('\n').filter(l => !_.isEmpty(l))
    let universe = initialUniverse(lines, cube4dFrom)

    for (let i = 0; i < 6; i++) {
      universe = nextStep(universe, getNeighbors4d)
    }
    return universe.size
  }
}
