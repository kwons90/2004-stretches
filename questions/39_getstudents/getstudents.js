const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  if(typeof(name)!= 'string') {
    throw new Error ('nope')
  }
  axios.get('https://fullstack.com/api/cohort2004')
    .then(res => {
      let response
      let keys = Object.keys(res.data)
      console.log('keys.length is ',keys.length)
      for (let i = 1; i < keys.length; i++) {
        console.log('i is ',i)
        console.log('ahhhh')
        console.log(res.data[i-1].name) 
        if (res.data[i-1].name == name) {
          console.log(res.data[i-1])
          response = {
            count: keys.length,
            student: res.data[i-1]
          }
        }
      }
      return response
    })
  };

  module.exports = { getStudent };
