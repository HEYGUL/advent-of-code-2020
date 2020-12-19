const _ = require('lodash')

function computeRegex (rule, rules, MAX_DEPTH = 60, depth = 0) {
  if (depth > MAX_DEPTH) {
    return undefined
  }
  if (/^[ab]$/.test(rule)) {
    return rule
  }
  const regex = rule
    .split(' ')
    .map(c => {
      return c === '|' ? c : computeRegex(rules[c], rules, MAX_DEPTH, depth + 1)
    })
    .join(' ')
  return `(?:${regex})`.replace(/\s/g, '')
}

module.exports = {

  solvePart1 (input, rulesToReplace = []) {
    const [inputRules, messages] = input.split('\n\n')
    const rules = inputRules.split('\n').reduce((rulesMap, rule) => {
      const [name, definition] = rule.split(': ')
      rulesMap[name] = /".*"/.test(definition)
        ? definition.slice(1, -1)
        : definition
      return rulesMap
    }, {})

    rulesToReplace.forEach(({ index, rule }) => {
      rules[index] = rule
    })

    console.log(rules[42])

    const regex = new RegExp('^' + computeRegex(rules[0], rules) + '$', 'gm')

    const matchingMessages = messages.match(regex)

    return matchingMessages.length
  },

  solvePart2 (input) {
    return module.exports.solvePart1(input, [
      { index: 8, rule: '42 | 42 8' },
      // { index: 8, rule: '42 | 42 42 | 42 42 42 | 42 42 42 42 | 42 42 42 42 42 | 42 42 42 42 42 42 | 42 42 42 42 42 42 42 | 42 42 42 42 42 42 42 42 | 42 42 42 42 42 42 42 42 42 42 42' },
      { index: 11, rule: '42 31 | 42 11 31' }
      // { index: 11, rule: '42 31 | 42 42 31 31 | 42 42 42 42 31 31 31 | 42 42 42 42 42 42 42 31 31 31 31' }
    ])
  }
}
