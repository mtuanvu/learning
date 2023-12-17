/*//Ví dụ 1 Random
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
*/

/*//Ví dụ 2 vong lập for
function getTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const myNumber = [1, 6, 8, 9, 10, 34];
const sum = getTotal(myNumber);
console.log(sum);*/

//Ví dụ 3 vòng for
// var myArray = ["Javascript", "Dart", "PHP", "Java", "C++", "C"];

// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//   console.log(myArray[i]);
// }

//Ví dụ 4 thực hành for
// var orders = [
//   {
//     name: "Khóa học Javascript",
//     price: 15000,
//   },

//   {
//     name: "Khóa học Java",
//     price: 20000,
//   },
//   {
//     name: "Khóa học PHP",
//     price: 24000,
//   },
//   {
//     name: "Khóa học Dart",
//     price: 26300,
//   },
// ];

// function getTotal(orders) {
//   const total = orders.reduce((acc, order) => acc + order.price, 0);

//   return total;
// }

// getTotal(orders);

// console.log(getTotal(orders));

function run(object) {
  var arr = [];
  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }

  return arr;
}
console.log(run({ name: "Nguyen Van A", age: 16 }));
