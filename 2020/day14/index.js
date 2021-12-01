const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const lines = input.split('\n').filter(s => !_.isEmpty(s))

    let mask = ''
    const mem = {}

    lines.forEach(line => {
      if (_.startsWith(line, 'mask')) {
        mask = line.replace('mask = ', '')
      } else {
        const [, address, decimalValue] = line.match(/\[(\d+)] = (\d+)/)
        const value = parseInt(decimalValue, 10).toString(2)
        const maskedValue = ('X'.repeat(mask.length - value.length) + value).split('')
        _.forEach(mask.split(''), (bit, index) => {
          if (bit !== 'X') {
            maskedValue[index] = bit
          } else {
            maskedValue[index] = maskedValue[index] === 'X' ? '0' : maskedValue[index]
          }
        })
        mem[address] = parseInt(maskedValue.join(''), 2)
      }
    })
    return _.sum(_.values(mem))
  },

  solvePart2 (input) {
    const lines = input.split('\n').filter(s => !_.isEmpty(s))

    let mask = ''
    const mem = {}
    const maskedAddress = {}
    let offsetAddress = [0]

    lines.forEach(line => {
      if (_.startsWith(line, 'mask')) {
        mask = line.replace('mask = ', '')

        offsetAddress = [0]
        _.forEach(mask.split(''), (bit, index) => {
          if (bit === 'X') {
            maskedAddress[index] = 'X'
            const count = offsetAddress.length
            for (let i = 0; i < count; i++) {
              offsetAddress.push(offsetAddress[i] + Math.pow(2, (36 - index - 1)))
            }
          } else {
            maskedAddress[index] = bit === '1' ? '1' : maskedAddress[index]
          }
        })
      } else {
        const [, address, decimalValue] = line.match(/\[(\d+)] = (\d+)/)
        const value = parseInt(decimalValue, 10)
        const binaryAddress = parseInt(address, 10).toString(2)
        const maskedAddress = ('0'.repeat(mask.length - binaryAddress.length) + binaryAddress).split('')
        _.forEach(mask.split(''), (bit, index) => {
          if (bit === 'X') {
            maskedAddress[index] = '0'
          } else if (bit === '1') {
            maskedAddress[index] = 1
          }
        })
        const baseAddress = parseInt(maskedAddress.join(''), 2)

        offsetAddress.forEach((offset, index) => {
          mem[baseAddress + offset] = value
        })
      }
    })
    return _.sum(_.values(mem))
  }
}
