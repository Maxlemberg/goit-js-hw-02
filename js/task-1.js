const logItems = function (array) {
  const total = '';
  let number = [];
  for (let i = 0; i < array.length; i += 1) {
    //console.log(array[i]);
    number.push(Number(i + 1) + '-' + array[i]);
  }
  return number;
};
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
//console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
