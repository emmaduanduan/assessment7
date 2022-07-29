// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(0 - array[i] !== -1)) {
      return true;
    }
  }
  return false;
}
console.log(sumZero([8, 0, 9, -8]));
// spaceComplexity is O(n);
// timeComplexity is O(n);

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function uniqueOrNo(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (result.indexOf(string[i]) === -1) {
      result += string[i];
    } else {
      return false;
    }
  }
  return true;
}
console.log(uniqueOrNo("go"));
// spaceComplexity is O(n);
// timeComplexity is O(n);

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(string) {
  string.toLowerCase();
  let az = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < az.length; i++) {
    if (string.indexOf(az[i]) === -1) {
      return false;
    }
    return true;
  }
}
console.log(isPangram("This is one."));
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// spaceComplexity is O(n);
// timeComplexity is O(n);

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function findLongestWord(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > result) {
      result = array[i].length;
    }
  }
  return result;
}
console.log(findLongestWord(["hello", "go"]));
// spaceComplexity is O(n);
// timeComplexity is O(n);
