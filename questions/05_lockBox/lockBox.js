const lockBox = (num,msg) => {
  if(typeof(num != 'number' || typeof(mg) != 'string')) {
    throw new Error('not cool')
  }
  let accessCode = code;
  let secretMessage = message;
  
  return {
    modMessage: (num, msg) => {
      map[num] = msg;
      return msg;
    },
    modCode: (num1, num2) => {
      if(num1 != accessCode) {
        throw new Error('Access Denied!')
      } else {
        secretMessage = newMessage;
        return secretMessage;
      }
    },
    modMessage: (num, msg) => {
      if(Object.keys(map).includes(num)) {
        map[num] = msg;
      }
    },      
    revealMessage: (num) => {
      return map[num]
    }
  }
};

module.exports = { lockBox };
