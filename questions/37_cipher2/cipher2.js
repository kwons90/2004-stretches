const decypher = (str) => {
  let strL = str.split(' ')
  console.log(strL)
  let returnArr = []
  const decypherWord = function(word) {
    let wordL = word.split('')
    console.log('wordL is ',wordl)
    let wordArr= []
    let firstLetter = []
    let j = 0
    for(let i = 0;i<wordL.length;i++) {
      if(parseInt(wordL[i]) == NaN) {
        break
      }
      else{
        firstLetter.push(wordL[i])
        j++
      }
    }
    wordArr.push(String.fromCharCode(parseInt(firstLetter.join(''))))
    wordArr.push(wordL.pop())
    let slicedWord = wordL.slice(j+1)
    wordArr = [...wordArr,...slicedWord]
    wordArr.push(wordL[1])
    return wordArr.join('')
  }
  strL.forEach(currV => {
    // console.log('word is ',currV)
    returnArr.push(decypherWord(currV))
  })
  console.log(returnArr.join(''))
  return returnArr.join(' ')
};
module.exports = { decypher };
