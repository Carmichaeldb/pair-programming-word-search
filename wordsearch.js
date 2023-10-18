/**
 * Function inputs 2d array containing letters, and a string of a word
 * searches arrays for word in the 2d array
 * returns true if word exists horizontally or vertically
 * if array is empty returns false
 * if word is not a string returns error "No word Provided"
 * Pair Programming: Lous Stafford, David Carmichael
 */

const transpose = function(matrix) {
  const arr = matrix; // copy input to different variable
  matrix = []; // reassign matrix as empty array to create return so return isn't modified from provided code.
  if (Array.isArray(arr) && Array.isArray(arr[0])) { // check if input is array, and first index contains array
    for (let x of arr[0]) { // creates new arrays with each index of first array for new first column
      matrix.push([x]);
    }
    for (let i = 1; i < arr.length; i++) { // iterates over remaining input's elements
      if (Array.isArray(arr[i])) { // verifies each element is an array
        for (let z = 0; z < matrix.length; z++) { // iterates over the array
          matrix[z].push(arr[i][z]); //pushes value at each index to the array within the matrix at the appropriate row.
        }
      }
    }
  }
  return matrix;
};

const wordSearch = (letters, word) => {
  if (typeof(word) !== 'string') { // if word is not a string returns error
    const error = "No word Provided";
    return error;
  }
  const horizontalJoin = letters.map(ls => ls.join('')); //searches 2d array of letters horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = transpose(letters).map(ls => ls.join('')); //searches 2d array of letters vertically and uses transpose function
  for (i of verticalJoin) {
    if (i.includes(word)) {
      return true;
    }
  }
  return false; //returns false if word is not found in 2d array
};

module.exports = wordSearch;