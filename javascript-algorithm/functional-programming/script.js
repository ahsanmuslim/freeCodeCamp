var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const filteredList = watchList
.map(film => {
    let Obj = {};
    Obj.title = film.Title;
    Obj.rating = film.imdbRating;
    return Obj
})
.filter(a => a.rating >= 8.0);
console.log(filteredList);

// Implement the filter Method on a Prototype
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
    var newArray = [];
    this.forEach(a => {
        if(callback(a)){
            newArray.push(a);
        }
    });
    return newArray;
};
var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});
console.log(new_s);

// Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    let arr =   anim.slice(beginSlice, endSlice);
    return arr;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

// Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    return cities.slice(0,3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

// Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
 return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

// Use the reduce Method to Analyze Data
function getRating(watchList){
    var count = 0;
    var averageRating = watchList
        .map(film => {
            let Obj = {};
            Obj.director = film.Director;
            Obj.rating = film.imdbRating;
            return Obj
        })
        .filter(a => a.director === "Christopher Nolan")
        .reduce((accumulator, currentVal) => {
            count++;
            return (accumulator + parseFloat(currentVal.rating));
        }, 0) / count;

    return averageRating;
}
console.log(getRating(watchList));

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
    let newArr = arr
    .filter(a => a > 0 && Number.isInteger(a))
    .map(b => b*b);
    return newArr;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    let newArr = [];
    newArr = arr.sort((a,b) => {
        var nameA = a.toUpperCase();
        var nameB = b.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return newArr;
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// Return a Sorted Array Without Changing the Original Array
var globalArray = [140000, 104, 99];
function nonMutatingSort(arr) {
    let newArr = [...arr];
    newArr.sort((a,b) => a-b);
    return newArr;
}
console.log(nonMutatingSort(globalArray));

// Split a String into an Array Using the split Method
function splitify(str) {
    let newStr = str.split(/\W+/);
    return newStr;
}
console.log(splitify("Hello World,I-am code"));

// Combine an Array into a String Using the join Method
function sentensify(str) {
    str = str.split(/\W+/).join(" ");
    return str;
}
console.log(sentensify("May-the-force-be-with-you"));

// Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
    return title.toLowerCase().split(/\W+/).filter(a => a !=="").join("-"); 
}
console.log(urlSlug(" Winter Is  Coming"));  

// Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive2(arr) {
    return arr.every(a => a>0);
}
console.log(checkPositive2([1, 2, 3, -4, 5]));

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    return arr.some(a => a>0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// Introduction to Currying and Partial Application
function add(x) {
  return y => z => x + y + z;
}
console.log(add(10)(20)(30));