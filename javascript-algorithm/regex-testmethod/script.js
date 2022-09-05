//regex untu
let myString = "Hello, World!";
let myRegex1 = /Hello/;
let result1 = myRegex1.test(myString); // Change this line

//regex untuk mencari kata yang sesuai 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);


//regex dengan pengecualian
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString);

//Find More Than First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex); // Change this line

//mencari karakter yang mengandung un
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let hasil = unRegex.test(exampleStr);

//mengembalikan nilai 
//gi = unsensitive case
let quoteSample2 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/gi; // Change this line
let hasil2 = quoteSample2.match(vowelRegex); // Change this line

//mencocokan huruf pada range tertentu
let quote = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let hasil3 = quote.match(alphabetRegex); // Change this line

//mencari huruf & numeric
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

//mencari huruf kecuali ditandai dengan ^ 
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aiueo0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

//mencari string s dengan 2 kali kemunculan
let difficultSpelling = "Mississippi";
let myRegex66 = /s+/g; // Change this line
let result22 = difficultSpelling.match(myRegex66);
// result ["ss", "ss"]

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result23 = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let resultr = text.match(myRegex);


//match start string pattern
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result222 = calRegex.test(rickyAndCal);

//Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result66 = lastRegex.test(caboose);

//Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
//all result is true because /w is shorthand 
let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result9 = quoteSample3.match(alphabetRegexV2).length;


// Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result77 = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
//shorthand untuk emncari digit angka 
let movieName5 = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Change this line
let result888 = movieName5.match(numRegex).length;

// Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result666 = movieName.match(noNumRegex).length;

// Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result8889 = userCheck.test(username);
// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

console.log(hasil2);