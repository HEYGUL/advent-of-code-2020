const _ = require('lodash')

module.exports = {

  solvePart1 (input) {
    const decks = input.split('\n\n').map(deck =>
      _.tail(deck.split('\n')).filter(l => !_.isEmpty(l)).map(Number)
    )

    let i = 0
    while (!_.some(decks, _.isEmpty)) {
      i++
      console.log(`-- Round ${i} --`)
      console.log(`Player 1's deck: ${decks[0].join(', ')}`)
      console.log(`Player 2's deck: ${decks[1].join(', ')}`)
      const player1 = decks[0].shift()
      const player2 = decks[1].shift()
      console.log(`Player 1 plays: ${player1}`)
      console.log(`Player 2 plays: ${player2}`)
      if (player1 > player2) {
        console.log('Player 1 wins the round!')
        decks[0].push(player1)
        decks[0].push(player2)
      } else {
        console.log('Player 2 wins the round!')
        decks[1].push(player2)
        decks[1].push(player1)
      }
    }
    const winningDeck = _.isEmpty(decks[0]) ? decks[1] : decks[0]
    return winningDeck.reduce((acc, card, index) => {
      return acc + card * (winningDeck.length - index)
    }, 0)
  },

  solvePart2 (input) {
    const decks = input.split('\n\n').map(deck =>
      _.tail(deck.split('\n')).filter(l => !_.isEmpty(l)).map(Number)
    )

    const winner = playGame(decks, 1)
    return decks[winner].reduce((acc, card, index, deck) => {
      return acc + card * (deck.length - index)
    }, 0)
  }
}

function playGame (decks, gameNumber) {
  const p1PrevDecks = new Set()
  const p2PrevDecks = new Set()
  while (!_.some(decks, _.isEmpty)) {
    const positionId1 = decks[0].join()
    const positionId2 = decks[1].join()
    if (p1PrevDecks.has(positionId1) && p2PrevDecks.has(positionId2)) {
      return 0
    }
    p1PrevDecks.add(positionId1)
    p2PrevDecks.add(positionId2)

    const player1 = decks[0].shift()
    const player2 = decks[1].shift()

    const winner = (decks[0].length >= player1 && decks[1].length >= player2)
      ? playGame([decks[0].slice(0, player1), decks[1].slice(0, player2)], gameNumber + 1)
      : (player1 > player2 ? 0 : 1)

    if (winner === 0) {
      decks[0].push(player1)
      decks[0].push(player2)
    } else {
      decks[1].push(player2)
      decks[1].push(player1)
    }
  }
  return _.isEmpty(decks[0]) ? 1 : 0
}
