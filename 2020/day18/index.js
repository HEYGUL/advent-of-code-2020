const _ = require('lodash')

function doMath (line, doOperations) {
  const groups = line.match(/(\([0-9+ *]+\))/)
  if (groups == null) {
    return doOperations(line)
  }
  const calculatedLine = line.replace(groups[0], doOperations(groups[0]))
  if (!isNaN(Number(calculatedLine))) {
    return Number(calculatedLine)
  } else {
    return doMath(calculatedLine, doOperations)
  }
}

function doOperationsFromLeft (line) {
  const splitted = line.split(' ')
  const group = [splitted[0], splitted[1], splitted[2]].join(' ')
  const calculatedLine = line.replace(group, doOperation(group))
  if (!isNaN(Number(calculatedLine))) {
    return Number(calculatedLine)
  } else {
    return doMath(calculatedLine, doOperationsFromLeft)
  }
}

function doOperationsAdditionFirst (line) {
  const groups = line.match(/(\d+[ + ]{3}\d+)/)
  if (groups == null) {
    return multiply(line)
  }
  const calculatedLine = line.replace(groups[0], doOperation(groups[0]))
  if (!isNaN(Number(calculatedLine))) {
    return Number(calculatedLine)
  } else {
    return doMath(calculatedLine, doOperationsAdditionFirst)
  }
}

function multiply (line) {
  let result = 1
  line.replace('(', '').replace(')', '').split(' * ').forEach(n => result *= Number(n))
  return result
}

function doOperation (group) {
  const [l, operand, r] = group.replace('(', '').replace(')', '').split(' ')
  if (operand === '+') {
    return Number(l) + Number(r)
  }
  return Number(l) * Number(r)
}

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n').filter(l => !_.isEmpty(l))
    const results = lines.map(l => doMath(l, doOperationsFromLeft))
    return _.sum(results)
  },

  solvePart2 (input) {
    const lines = input.split('\n').filter(l => !_.isEmpty(l))
    const results = lines.map(l => doMath(l, doOperationsAdditionFirst))
    return _.sum(results)
  }
}
