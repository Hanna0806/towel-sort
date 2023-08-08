
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }

  let array = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        array.push(matrix[i][j]);
      }
    } else {
      for (let k = matrix[i].length - 1; k >= 0; k--) {
        array.push(matrix[i][k]);
      }
    }
  }

  return array;
}
