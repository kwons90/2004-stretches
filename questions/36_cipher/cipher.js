const encrypt = (str) => {
  let returnArr = []
  strL = str.split('')
  console.log(strL)
  returnArr.push(strL[0].charCodeAt(0))
  returnArr.push(strL.pop())
  let slicedStrL = strL.slice(2)
  returnArr = [...returnArr,...slicedStrL]
  console.log('returnArr is ',returnArr)
  returnArr.push(strL[1])
  return returnArr.join('')
};

module.exports = { encrypt };
