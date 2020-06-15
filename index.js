// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
const stringList = ['foo', 'bar']
const callback = (str) => (str + str)

function processFirstItem (stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(stringList, callback))

// ⭐️ Example Challenge END ⭐️

// ======= M.V.P. ========

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *    - counter1 uses closure to make a counter that increases by one everytime it is called
 *    -counter2 uses a global variable count and calls it in the function to make a counter that increases by one each time it is called
 * 2. Which of the two uses a closure? How can you tell?
 *    - counter1 uses closure. counter() function grabs the variable count from the parent function counterMaker
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    - use counter1 when we want to access private variables
 *    - use counter2 when we want to use count in multiple functions
 *
*/

// counter1 code
// function counterMaker() {
//   let count = 0
//   return function counter() {
//     return count++
//   }
// }

// const counter1 = counterMaker()
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// // counter2 code
// let count = 0

// function counter2() {
//   return count++
// }
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
/* Task 2: inning()

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning () {
  const score = Math.round(Math.random() * 2)
  return score
}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/
let i = 1

function finalScore (numInnnings, inning) {
  const teamScores = {
    Home: 0,
    Away: 0
  }
  while (i < numInnnings) {
    teamScores.Home += inning
    teamScores.Away += inning
    i += 1
  }
  console.log(teamScores)
}

console.log(finalScore(9, inning()))

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}

/*
closure = combination of a function bundled together with references to it's surrounding state (lexical environment)
  - gives you access to an outer function's scope from an inner function */