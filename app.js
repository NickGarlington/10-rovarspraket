/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

export function max(a, b){
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
}

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

export function maxOfThree(a, b, c){
    if (a > c && a > b) {
      return a;
    }
    else if (b > c && b > a) {
      return b;
    }
    else {
      return c;
    }
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

export function isVowel(char){
    if (char === "a") {
      return true;
    }
    else if (char ==="A") {
      return true;
    }
    else if (char === "e") {
      return true;
    }
    else if (char === "E") {
      return true;
    }
    else if (char === "i") {
      return true;
    }
    else if (char === "I") {
      return true;
    }
    else if (char === "o") {
      return true;
    }
    else if (char === "O") {
      return true;
    }
    else if (char === "u") {
      return true;
    }
    else if (char === "U") {
      return true;
    }
    else {
      return false;
    }

}

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

export function rovarspraket(input) {
var loopInput = input.split("");
var output = "";
for (var i = 0; i < loopInput.length; i++) {
  if (isVowel(loopInput[i]) || loopInput[i] === " "){
    output += loopInput[i];
  }
  else {
    output += loopInput[i] + "o" + loopInput[i];
  }
}
return output;
}

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

export function reverse(str){
    var splitString = str.split("");
    var splitReverse = splitString.reverse();
    return splitReverse.join("");

}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

export function findLongestWord(sentence){
    var splitSentence = sentence.split(" ");
    var longestWord = "";
    for (var i = 0; i < splitSentence.length; i++){
      var word = splitSentence[i];
      if (word.length > longestWord.length) {
        longestWord = word;

      }

    }
    return longestWord;
}

/**
 * Part 6
 *
 * Write a function isPalindrome() that takes
 * a string and returns true if it's a palindrome
 * and false if it isn't.
 */

 export function isPalindrome(word) {
   return word === reverse(word);
 }
