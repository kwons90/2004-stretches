// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, targetSum) => {
  for(let i = 1;i<arr.length;i++) {
    if(arr.includes(targetSum - arr[i])) {
      return [arr[i], targetSum-arr[i]]
    }
  }
};

module.exports = { twoNumberSum };
