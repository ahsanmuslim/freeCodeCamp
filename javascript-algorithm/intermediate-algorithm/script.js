// Sum All Numbers in a Range
function sumAll(arr) {
  let [start, finish] = arr;
  let newArr = [];
  if(start <= finish){
    for (let i = start; i <= finish; i++) {
      newArr.push(i);
    }
  } else {
    for (let i = start; i >= finish; i--) {
      newArr.push(i);
    }
  }
  return newArr.reduce((acc, curr) => acc+curr);
}
console.log(sumAll([1, 4]));

// Diff Two Arrays
function diffArray(arr1, arr2) {
  let unique1 = arr2.filter(a => arr1.indexOf(a) == -1);
  let unique2 = arr1.filter(a => arr2.indexOf(a) == -1);
  return unique1.concat(unique2);
}
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// Seek and Destroy
function destroyer(arr, ...des) {
  let newArr = arr.filter(a => des.indexOf(a) == -1);
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Wherefore art thou
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  let answer = collection.filter(obj => srcKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
  return answer;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));

// Pig Latin
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
  ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
  : str.concat("way");
}
console.log(translatePigLatin("consonant"));

// Search and Replace
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// DNA Pairing


