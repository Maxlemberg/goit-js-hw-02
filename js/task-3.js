const findLongestWord = function (string) {
  const arrayWord = string.split(' ');
  let biggestWord = arrayWord[0];
  for (let i = 0; i < arrayWord.length; i += 1) {
    if (biggestWord.length < arrayWord[i].length) {
      biggestWord = arrayWord[i];
    }
  }
  return biggestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
