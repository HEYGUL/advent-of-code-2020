const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const instructions = input.split('\n')
    instructions.pop()

    const formattedInstructions = instructions.map(instruction => {
      const [operator, argument] = instruction.split(' ')
      return { operator, argument: parseInt(argument, 10) }
    })

    let acc = 0
    let pc = 0
    const pcHistory = []

    do {
      pcHistory.push(pc)
      const instructions = formattedInstructions[pc]
      switch (instructions.operator) {
        case 'acc':
          acc += instructions.argument
          pc++
          break

        case 'nop':
          pc++
          break

        case 'jmp':
          pc += instructions.argument
      }
    } while (!_.includes(pcHistory, pc))

    return acc
  },

  solvePart2 (input) {
    let result
    let i = 1
    do {
      const instructions = replaceOccurrence(input, /jmp/gm, i, 'nop').split('\n')
      instructions.pop()

      const formattedInstructions = instructions.map(instruction => {
        const [operator, argument] = instruction.split(' ')
        return { operator, argument: parseInt(argument, 10) }
      })

      result = execute(formattedInstructions)
      i++
    } while (!result.success)

    return result.acc
  }
}

function execute (instructions) {
  let acc = 0
  let pc = 0
  const pcHistory = []

  do {
    pcHistory.push(pc)
    const instruction = instructions[pc]
    switch (instruction.operator) {
      case 'acc':
        acc += instruction.argument
        pc++
        break

      case 'nop':
        pc++
        break

      case 'jmp':
        pc += instruction.argument
    }
  } while (!_.includes(pcHistory, pc) && pc !== instructions.length)

  return { acc, success: pc === instructions.length }
}

function replaceOccurrence (string, regex, n, replace) {
  let i = 0
  return string.replace(regex, function (match) {
    i += 1
    if (i === n) return replace
    return match
  })
}
