var selectElementsStartingWithA = function(array) {
  return array.filter(function startingWithA(word) {
  return word.charAt(0) === 'a';
});
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function startingWithVowel(word) {
  return /^[aeiou]/.exec(word);
});
}

var removeNullElements = function(array) {
  return _.without(array,null);
}

var removeNullAndFalseElements = function(array) {
  return _.without(array, null, false);
}

var reverseWordsInArray = function(array) {
  return array.map(function (word) { return word.split('').reverse().join('') })
}

var everyPossiblePair = function(array) {
  var combos = [];
  for (var i = 0; i < array.length; i++)
    for (var j = i + 1; j < array.length; j++)
        combos.push([array[i], array[j]]);
        return combos;
}

var allElementsExceptFirstThree = function(array) {
  array.splice(0,3);
  return array;
}

var addElementToBeginning = function(array, element) {
   array.unshift(element);
   return array;
}

var sortByLastLetter = function(array) {
  var arr = array.map(function (word) { return word.split('').reverse().join('') })
return arr.sort().map(function (word) { return word.split('').reverse().join('') })
}

var getFirstHalf = function(string) {
  return string.slice(0,(string.length/2));
}

var makeNegative = function(number) {
  if (number < 0) {
    number = number } else { number = number*-1 };
    return number
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  var longestWord = "1234567890";
  var index = 0;
  for (var i=0; i < array.length; i++){
    if(array[i].length < longestWord.length){
       longestWord = array[i];
    }
  }
  return longestWord;
}

var longestWord = function(array) {
  var longestWord = "";
  var index = 0;
  for (var i=0; i < array.length; i++){
    if(array[i].length > longestWord.length){
       longestWord = array[i];
    }
  }
  return longestWord;
}

var sumNumbers = function(array) {
  return array.reduce((a,b) => a+b,0);
}

var repeatElements = function(array) {
  return array.concat(array);
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  return array.reduce((a,b) => a+b,0) / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var arr = []
   _.some(array),(function(v){
    if (v < 6) {arr.push(v)}
    else {arr};
  });
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
