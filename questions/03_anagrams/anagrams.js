// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  return str1.split("").sort() == str2.split("").sort();
};

module.exports = { checkAnagrams };
