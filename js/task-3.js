const findLongestWord = function (string) {
  const arrayWord = string.split(' ');
  let lenghtWord = [];
  for (let i = 0; i < arrayWord.length; i += 1) {
    lenghtWord.push(arrayWord[i].length);
  }
  const longestNum = Math.max(...lenghtWord);
  for (let arr of arrayWord) {
    if (longestNum === arr.length) {
      return arr;
    }
  }
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
