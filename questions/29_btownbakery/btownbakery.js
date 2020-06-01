// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe,supplies) => {
  if(typeof(recipe)!= 'object' || typeof(supplies) != 'object') {
    throw new Error ('nope')
  }
  let nums = [];
  ingredients = Object.keys(recipe);
  ingredients.forEach(ingredient => {
    console.log(ingredient)
    console.log('supplies ',supplies[ingredient], 'recipe ',recipe[ingredient])
    let newNum = Math.floor((supplies[ingredient]) / (recipe[ingredient]))
    console.log(newNum)
    console.log(isNaN(newNum))
    if(isNaN(newNum)){
      console.log('returning 0')
      return 0
    }
    else {
      nums.push(newNum)
    }
    console.log(nums)
  })
  return Math.min(...nums)
};

module.exports = { btownbake };
