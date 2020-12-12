const _ = require('lodash')

function moveInDirection (direction, units) {
  const values = { east: 0, north: 0 }

  switch (direction) {
    case 'N': values.north = units
      break
    case 'S': values.north -= units
      break
    case 'E': values.east = units
      break
    case 'W': values.east -= units
      break
  }
  return values
}

function directionFromFacing (facing) {
  const angle = facing % 360
  if (angle === 0) {
    return 'E'
  } else if (angle === 90 || angle === -270) {
    return 'N'
  } else if (angle === 180 || angle === -180) {
    return 'W'
  } else if (angle === 270 || angle === -90) {
    return 'S'
  }
}

// y' = y*cos(a) + x*sin(a)
// x' = - y*sin(a) + x*cos(a)
function rotateWaypointAnticlockwise (degrees, point) {
  const radians = Math.PI * degrees / 180
  const n = point.n * Math.cos(radians) + point.e * Math.sin(radians)
  const e = -1 * (point.n * Math.sin(radians)) + point.e * Math.cos(radians)
  return { e: Math.round(e), n: Math.round(n) }
}

// y' = y*cos(a) - x*sin(a)
// x' = y*sin(a) + x*cos(a)
function rotateWaypointClockwise (degrees, point) {
  const radians = Math.PI * degrees / 180
  const n = point.n * Math.cos(radians) - point.e * Math.sin(radians)
  const e = point.n * Math.sin(radians) + point.e * Math.cos(radians)
  return { e: Math.round(e), n: Math.round(n) }
}

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n')
    let east = 0; let north = 0
    let facing = 0

    lines.forEach(line => {
      const direction = line.charAt(0)
      const units = parseInt(line.slice(1), 10)
      let forward, values

      // noinspection FallThroughInSwitchStatementJS
      switch (direction) {
        case 'F':
          forward = directionFromFacing(facing)
          values = moveInDirection(forward, units)
          north += values.north
          east += values.east
          break

        case 'N':
        case 'S':
        case 'E':
        case 'W':
          values = moveInDirection(direction, units)
          north += values.north
          east += values.east
          break
        case 'L':
          facing += units
          break
        case 'R':
          facing -= units
          break
      }
    })

    return Math.abs(east) + Math.abs(north)
  },

  solvePart2 (input) {
    const lines = input.split('\n')
    let east = 0; let north = 0
    let waypoint = { n: 1, e: 10 }

    lines.forEach(line => {
      const direction = line.charAt(0)
      const units = parseInt(line.slice(1), 10)

      switch (direction) {
        case 'F':
          north += (waypoint.n * units)
          east += (waypoint.e * units)
          break
        case 'N':
          waypoint.n += units
          break
        case 'S':
          waypoint.n -= units
          break
        case 'E':
          waypoint.e += units
          break
        case 'W':
          waypoint.e -= units
          break
        case 'L':
          waypoint = rotateWaypointAnticlockwise(units, waypoint)
          break
        case 'R':
          waypoint = rotateWaypointClockwise(units, waypoint)
          break
      }
    })

    return Math.abs(east) + Math.abs(north)
  }
}
