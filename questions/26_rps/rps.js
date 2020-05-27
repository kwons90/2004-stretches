//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/
rockStr = 'rock'
scissorStr = 'scissor'
paperStr = 'paper'

const determineWinner = function() {
  const values = Object.values(this.arguments).map(function(str) {return str.toLowerCase()})
  let rockCount = 0
  let scissorCount = 0
  let paperCount = 0
  const totalCount = values.length
  values.forEach(currV => {
    if(currV == rockStr) {
      rockCount = rockCount +1
    }
    if(currV == scissorStr) {
      scissorCount += 1
    }
    if(currV == paperStr) {
      paperCount += 1
    }
  })
  values.forEach((currV,index) => {
    if(currV == rockStr && scissorCount == totalCount-1) {
      return index
    }
    if(currV == scissorStr && paperCount == totalCount-1) {
      return index
    }
    if(currV == paperStr && rockCount == totalCount-1) {
      return index
    }
  })
}


class RPS {
  constructor() {
    this.players = Object.values(arguments);
    this.scores = {}
    this.players.forEach(currV => {
      this.scores[currV] = 0
    })
  }
  play() {
    const values = Object.values(arguments).map(function(str) {return str.toLowerCase()})
    const rockCount = 0
    const scissorCount = 0
    const paperCount = 0
    const totalCount = values.length
    values.forEach(currV => {
      if(currV == rockStr) {
        rockCount += 1
      }
      if(currV == scissorStr) {
        scissorCount += 1
      }
      if(currV == paperStr) {
        paperCount += 1
      }
    })
    values.forEach((currV,index) => {
      if(currV == rockStr && scissorCount == totalCount-1) {
        this.scores[this.players[index]] +=1
        return `Rock defeats Scissors ${this.players[index]} wins this round`
      }
      if(currV == scissorStr && paperCount == totalCount-1) {
        this.scores[this.players[index]] +=1
        return `Scissors defeats Paper ${this.players[index]} wins this round`
      }
      if(currV == paperStr && rockCount == totalCount-1) {
        this.scores[this.players[index]] +=1
        return `Paper defeats Rock ${this.players[index]} wins this round`
      }
    })
  }
  
  //YOUR CODE HERE
}

module.exports = { RPS };
