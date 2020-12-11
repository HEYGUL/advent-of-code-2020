const _ = require('lodash')

function occupiedSeatsIn (seats) {
  return _.countBy(normalizedSeats(seats))['#'] || 0
}

function emptySeats (seats) {
  return 8 - occupiedSeatsIn(seats)
}

function applyRule (adjacentSeats, currentSeat) {
  switch (currentSeat) {
    case '.':
      return currentSeat
    case 'L':
      return emptySeats(adjacentSeats) === 8 ? '#' : 'L'
    case '#':
      return emptySeats(adjacentSeats) <= 3 ? 'L' : '#'
  }
}

function adjacentSeats (seats, rowIndex, colIndex) {
  const adjacentSeats = []
  let row = rowIndex; let col = colIndex

  // left
  do {
    col--
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push(seats[row][col] || '.')

  // right
  row = rowIndex
  col = colIndex
  do {
    col++
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // down
  row = rowIndex
  col = colIndex
  do {
    row++
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // up
  row = rowIndex
  col = colIndex
  do {
    row--
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // bottom-right
  row = rowIndex
  col = colIndex
  do {
    row++
    col++
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // bottom-left
  row = rowIndex
  col = colIndex
  do {
    row++
    col--
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // upper-right
  row = rowIndex
  col = colIndex
  do {
    row--
    col++
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  // upper-Left
  row = rowIndex
  col = colIndex
  do {
    row--
    col--
  } while (row >= 0 && row < seats.length && col >= 0 && col < seats[0].length && seats[row][col] === '.')
  adjacentSeats.push((seats[row] && seats[row][col]) || '.')

  return [adjacentSeats]
}

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n')
    let seats = lines.map(l => l.split(''))
    const newSeats = _.cloneDeep(seats)

    do {
      seats = _.cloneDeep(newSeats)

      seats.forEach((row, rowIndex) => {
        row.forEach((column, colIndex) => {
          newSeats[rowIndex][colIndex] = applyRule(adjacentSeats(seats, rowIndex, colIndex), seats[rowIndex][colIndex])
        })
      })
    } while (normalizedSeats(seats) !== normalizedSeats(newSeats))

    return occupiedSeatsIn(seats)
  },

  solvePart2 (input) {
    const lines = input.split('\n')
  }
}

function normalizedSeats (seats) {
  return seats.map(r => r.join('')).join('\n')
}
