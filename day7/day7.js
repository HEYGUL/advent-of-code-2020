const _ = require('lodash')

function countOuterBags (rules, bag) {
  let holderBags = []
  for (const outerBag in rules) {
    const innerBags = rules[`${outerBag}`]
    innerBags && innerBags.forEach(innerBag => {
      if (innerBag.indexOf(bag) >= 0) {
        const holderBag = outerBag.replace(' bags', '')
        holderBags.push(holderBag)
      }
    })
  }
  holderBags.forEach(bag => {
    const bags = countOuterBags(rules, bag)
    if (bags.length) holderBags = _.concat(holderBags, bags)
  })
  return holderBags
}

function countInnerBags (rules, bag) {
  let count = 1

  rules.forEach(rule => {
    if (rule.name === bag) {
      rule.innerBags.forEach(innerBag => {
        count += (innerBag.count * countInnerBags(rules, innerBag.name))
      })
    }
  })

  return count
}

module.exports = {

  solvePart1 (input) {
    const rules = input.split('\n')
    rules.pop()

    const formattedRulesArray = rules.map(rule => {
      const [outerBag, innerBags] = rule.split(' contain ')
      const formattedInnerBags = innerBags === 'no other bags.'
        ? null
        : innerBags.split(', ')
      return { [`${outerBag}`]: formattedInnerBags }
    })
    const formattedRules = Object.assign({}, ...formattedRulesArray)
    const holderBags = countOuterBags(formattedRules, 'shiny gold')
    return _.uniq(holderBags).length
  },

  solvePart2 (input) {
    const rules = input.split('\n')
    rules.pop()

    const formattedRulesArray = rules.map(rule => {
      const [outerBag, innerBags] = rule.split(' contain ')
      const formattedInnerBags = innerBags === 'no other bags.'
        ? []
        : innerBags.split(', ')
      return {
        name: outerBag.replace(' bags', ''),
        innerBags: formattedInnerBags.map(innerBag => {
          const bag = innerBag.replace(' bags', '').replace(' bag', '').replace('.', '')
          return {
            name: bag.slice(2, bag.length),
            count: parseInt(bag.slice(0, 1), 10)
          }
        })
      }
    })
    const count = countInnerBags(formattedRulesArray, 'shiny gold')
    return count - 1
  }
}
