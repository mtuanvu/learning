function getRandNumbers(min, max, length) {
  if (min > max) {
    [min, max] = [max, min];
  }
  var array = [];
  for (var i = 0; i < length; i++) {
    var randNumber = Math.floor(Math.random() * (max - min) + min);
    array.push(randNumber);
  }
  return array;
}

const array = getRandNumbers(1, 94, 5);
console.log(array);

function getTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const myNumber = [1, 6, 8, 9, 10, 34];
const sum = getTotal(myNumber);
console.log(sum);
