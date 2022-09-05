// Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = 9/5*celsius + 32;
  return fahrenheit;
}
console.log(convertToF(30));

// Reverse a String
function reverseString(str) {
  let reverse = [];
  for (let i = 0; i < str.length; i++) {
    reverse.unshift(str[i]);    
  }
  str = reverse.toString().replace(/,/g,"");
  return str;
}
console.log(reverseString("hello"));

// Factorialize a Number
function factorialize(num) {
  if(num ==0){
    num = 1;
  } else {
    for(let i=num-1; i > 0; i--){
        num *= i;
    }
  }
  return num;
}
console.log(factorialize(5));

// Find the Longest Word in a String
function findLongestWordLength(str) {
  str = str.split(" ").reduce((a,b) => a.length > b.length ? a : b);
  return str.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  arr = arr.map(a => Math.max.apply(Math, a));
  return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Confirm the Ending
function confirmEnding(str, target) {
  // str = str.endsWith(target);
  let newStr = str.substring(str.length-target.length, str.length);
  if(newStr === target){
    str = true;
  } else {
    str = false;
  }
  return str;
}
console.log(confirmEnding("Bastian", "n"));

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  // str = str.repeat(num);
  if(num > 0){
    let newStr = "";
    for(let i=0; i<num; i++){
      newStr += str;
    }
    str = newStr;
  } else {
    str = "";
  }
  return str;
}
console.log(repeatStringNumTimes("abc", 3));

// Truncate a String
function truncateString(str, num) {
  if(str.length > num){
    str = str.substring(0,num).concat('','...');
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers
function findElement(arr, func) {
  let num = 0;
  const first = arr.filter(a => func(a));
  num = first[0];
  return num;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Boo who
function booWho(bool) {
  if(typeof(bool) === "boolean"){
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
console.log(booWho(true));

// Title Case a Sentence
function titleCase(str) {
  str = str.toLowerCase().split(" ").map(a => a[0].toUpperCase() + a.slice(1)).join(" ");
  return str;
}
console.log(titleCase("I'm a little tea pot"));

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// Falsy Bouncer
function bouncer(arr) {
  arr = arr.filter(a => {
    if(a){
      return a;
    }
  });
  return arr;
}
console.log(bouncer([7, "ate", "", false, 9]));

// Where do I Belong
function getIndexToIns(arr, num) {
  arr = arr.sort((a,b) => a-b).filter(c => {
    if(c<num){
      return c;
    }
  });
  num = arr.length;
  return num;
}
console.log(getIndexToIns([2, 20, 10], 19));

// Mutations
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["Mary", "Aarmy"]));

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));