module.exports = function countCats(backyard) {
  let number = 0;
  let ears = '^^';
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === ears) {
        number++;
      }
    }
  }
  return number;
};