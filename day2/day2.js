const _ = require('lodash')

module.exports = {

  solvePart1(input) {
    const valids = input.map(rawLine => {
      const [policy, password] = rawLine.split(': ')
      return isPasswordValidPart1({ password, policy })
    })
    return _.filter(valids, (isValid) => isValid).length
  },

  solvePart2(input) {
    const valids = input.map(rawLine => {
      const [policy, password] = rawLine.split(': ')
      return isPasswordValidPart2({ password, policy })
    })
    return _.filter(valids, (isValid) => isValid).length
  }
}

function isPasswordValidPart1({ password, policy }) {
  const [allowedRange, mandatoryLetter] = policy.split(' ')
  const [min, max] = allowedRange.split('-')

  const normalizedPassword = _.filter(password, c => c === mandatoryLetter)
  const isValid = normalizedPassword.length >= min && normalizedPassword.length <= max
  return isValid
}

function isPasswordValidPart2({ password, policy }) {
  const [allowedRange, mandatoryLetter] = policy.split(' ')
  const [first, second] = allowedRange.split('-')

  const isValid = password.charAt(first-1) === mandatoryLetter ^ password.charAt(second-1) === mandatoryLetter
  return isValid
}
