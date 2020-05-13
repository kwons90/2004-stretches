//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  if(!Array.isArray(arr) || arr.length < 1) {
    throw new Error('input wrong')
  }
  let l = 0
  arr.forEach(currV => {
    if(currV.length > l) {
      l = currV.length
  }})
  l = l+4
  for(let i = 0; i<)
  for(let i = 0 ; i<arr.length; i++) {

  }
  return str
};

module.exports = { movieposter };
