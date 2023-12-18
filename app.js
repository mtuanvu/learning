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

// function run(object) {
//   var arr = [];
//   for (var key in object) {
//     arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }

//   return arr;
// }
// console.log(run({ name: "Nguyen Van A", age: 16 }));

// var myArray = [
//   [1, 2],
//   [5, 7],
//   [8, 9],
// ];

// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++) {
//     console.log(myArray[i][j]);
//   }
// }

// const sports = [
//   {
//     name: "Bóng rổ",
//     like: 6,
//   },
//   {
//     name: "Bóng đá",
//     like: 4,
//   },
//   {
//     name: "Bóng bàn",
//     like: 5,
//   },
//   {
//     name: "Bóng hồng",
//     like: 9,
//   },
// ];

// function getMostFavoriteSport(array) {
//   return sports.filter(function (score) {
//     return score.like >= 5;
//   });
// }

// console.log(getMostFavoriteSport(sports));

// var sports = [
//   {
//     name: "Bơi lội",
//     gold: 11,
//   },
//   {
//     name: "Boxing",
//     gold: 3,
//   },
//   {
//     name: "Đạp xe",
//     gold: 4,
//   },
//   {
//     name: "Đấu kiếm",
//     gold: 5,
//   },
// ];

// var totalGold = sports.reduce(function getTotalGold(accumulator, currentValue) {
//   return accumulator + currentValue.gold;
// }, 0);

// console.log(totalGold);

// function getTotalGold(sports) {
//   return sports.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.gold,
//     0
//   );
// }
// console.log(getTotalGold(sports));
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function (flatOutput, depItem) {
//   return flatOutput.concat(depItem);
// }, []);

// console.log(flatArray);

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(arr) {
  return (
    arr
      .filter((name) => {
        return name.Director === "Christopher Nolan";
      })
      .reduce((rate, currentRate) => {
        return rate + parseFloat(currentRate.imdbRating);
      }, 0) /
    arr.filter((name) => {
      return name.Director === "Christopher Nolan";
    }).length
  );
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
