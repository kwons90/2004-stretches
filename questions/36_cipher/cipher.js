const encrypt = (str) => {
  returnArr = []
  strL = str.split('')
  strL.forEach(currV => {
    returnArr.push(currV.charCodeAt(0))
  })
  return returnArr.join('')
};

module.exports = { encrypt };
