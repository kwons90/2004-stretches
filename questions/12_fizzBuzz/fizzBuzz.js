const fizzBuzz = (num) => {
  if(typeof(num) != 'number' || num<1) {
    throw new Error('input incorrect')
  }
  returnArr = []
  for(let i = 1; i<num;i++) {
    if(i%3 ==0 && i%5 ==0) {
      returnArr.push('FizzBuzz')
    }
    if(i%3 == 0 && i% 5 != 0) {
      returnArr.push('Fizz')
    }
    if(i%5 == 0 && i%3 != 0) {
      returnArr.push('Buzz')
    }
    else {
      returnArr.push(i)
    }
  
  }
  return returnArr
};

console.log(fizzBuzz(30))
module.exports = { fizzBuzz };
