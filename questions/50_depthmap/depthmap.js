//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (masterObj) => {
  let depth = 0
  const returnObj = masterObj
  const recurse =function(obj){
    const objKeys = Object.keys(obj)
    obj.depth = depth;
    depth++
    for (let i = 0; i < objKeys.length; i++) {
      if(typeof(obj[objKeys[i]]) == 'object') {
        recurse(obj[objKeys[i]])
      }
    }
    return obj
  }
  return recurse(masterObj)
};

module.exports = { recordDepth };
