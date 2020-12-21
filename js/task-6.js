const numbers = [];
let total = 0;
let input;

while (input !== null) {
  input = prompt('Уведіть число');
  const sum = function (arr) {
    for (let number of arr) {
      total += Number(number);
    }
    return total;
  };
  if (input === null) {
    const sumTotal = sum(numbers);
    alert(`Загальна сума була рівна ${sumTotal}`);
    break;
  } else {
    +input
      ? numbers.push(input)
      : alert('Було введено не число, спробуйте ще раз!');
  }
}
