const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const fieldRules = input.split('your ticket:')[0].split('\n').filter(s => !_.isEmpty(s))
    const nearbyTickets = input.split('nearby tickets:')[1].replace('nearby tickets:\n', '').split('\n').filter(s => !_.isEmpty(s))

    let mandatoryNumbers = []
    fieldRules.forEach(rule => {
      const ranges = rule.split(': ')[1].split(' or ')
      ranges.forEach(range => {
        const [min, max] = range.split('-')
        mandatoryNumbers = [...mandatoryNumbers, ..._.range(parseInt(min, 10), parseInt(max, 10) + 1)]
      })
    })

    mandatoryNumbers = _.uniq(mandatoryNumbers)
    let invalidNumbers = []
    nearbyTickets.forEach(ticket => {
      const ticketNumbers = ticket.split(',').map(s => parseInt(s, 10))
      const invalidNumbersInTicket = _.difference(ticketNumbers, mandatoryNumbers)
      invalidNumbers = _.concat(invalidNumbers, invalidNumbersInTicket)
    })

    return _.sum(invalidNumbers)
  },

  solvePart2 (input) {
    let fieldRules = input.split('your ticket:')[0].split('\n').filter(s => !_.isEmpty(s))
    const nearbyTickets = input.split('nearby tickets:')[1].replace('nearby tickets:\n', '').split('\n').filter(s => !_.isEmpty(s))

    let mandatoryNumbers = []
    fieldRules.forEach(rule => {
      const ranges = rule.split(': ')[1].split(' or ')
      ranges.forEach(range => {
        const [min, max] = range.split('-')
        mandatoryNumbers = [...mandatoryNumbers, ..._.range(parseInt(min, 10), parseInt(max, 10) + 1)]
      })
    })
    fieldRules = fieldRules.map(rule => {
      const ranges = rule.split(': ')[1].split(' or ')
      const fullRanges = ranges.map(range => {
        const [min, max] = range.split('-')
        return _.range(parseInt(min, 10), parseInt(max, 10) + 1)
      })
      return {
        name: rule.split(': ')[0],
        range: [...fullRanges[0], ...fullRanges[1]]
      }
    })

    const invalidTickets = []
    nearbyTickets.forEach((ticket, index) => {
      const ticketNumbers = ticket.split(',').map(s => parseInt(s, 10))
      const invalidNumbersInTicket = _.difference(ticketNumbers, mandatoryNumbers)
      if (invalidNumbersInTicket.length) {
        invalidTickets.push(index)
      }
    })

    let validTickets = nearbyTickets.filter((_, index) => !invalidTickets.includes(index))
    validTickets = validTickets.map(ticket => ticket.split(',').map(s => parseInt(s, 10)))

    const fieldValues = _.zip(...validTickets)
    let possibilities = []
    fieldValues.forEach((field, index) => {
      fieldRules.forEach(fieldRule => {
        if (_.difference(field, fieldRule.range).length === 0) {
          if (possibilities[index]) {
            possibilities[index].push(fieldRule)
          } else {
            possibilities[index] = [fieldRule]
          }
        }
      })
    })

    const matchings = new Array(possibilities.length)
    while (_.some(matchings, m => !m)) {
      for (let i = 0; i < possibilities.length; i++) {
        const possibleFields = possibilities[i]
        if (possibleFields.length === 1) {
          matchings[i] = possibleFields[0].name
          possibilities = possibilities.map(possibles => {
            return possibles.filter(p => p.name !== possibleFields[0].name)
          })
        }
      }
    }

    const ticket = input.split('your ticket:\n')[1].split('\n')[0].split(',').map(s => parseInt(s, 10))
    let result = 1
    matchings.forEach((m, i) => {
      if (m.startsWith('departure')) {
        result *= ticket[i]
      }
    })
    return result
  }
}
