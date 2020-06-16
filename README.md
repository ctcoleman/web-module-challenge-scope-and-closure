# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous.

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. [x]Fork repo and add TL as collaborator on Github
2. [x]Clone _your_ fork (not Lambda's repo by mistake!)
3. [x]`cd` into your newly cloned repository
4. [x]Create a new branch by typing `git checkout -b <firstName-lastName>`
5. [x]Work on your branch, push commits and create PR as usual

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

  Closure is two or functions (one inside the other) which reference variables outside of their scope. Variables can NOT be taken out of their scope, but variables can be brought into a function from the outside. Closure allows a function to reach outside it's code block to access data.

2.Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?
Closure is used when name is is brought in from the first functions parameter to the second functions console log. We know because name is not declared in the second function, but is used in the log statement.
b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
Dans name will stay the same, but the value of newRoll will change.
c. What is the lexical scope of `newRoll`?
The lexical scope of newRool is in the child function which it is contained and the parent function.
### Task 2c - Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/WjSzNh9gDrD8Xn8hw/enY3yPRP3nEm7E).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

  Object-Oriented Programming uses properties and methods to access and modify data. These are properties and methods of the object they are manipulating. The type of object being delt with is dependent on the class of the object. JavaScript is concidered an OoP paradigm. Esentially, it's multiple objects (methods and properties) working together to access and modify data as instructed. Examples are for loops, if statements, etc.

  Functional programming useses the application of a tree like structure of functions all returning values to manipulate data types. Functions can be passed to arguments and returned from other functions. Functions pass around data between one another returning new values. We can reuse already provided functions or create new ones ourselves. JavaScript can also run with functional programming. JavaScript combines the two pradigms. Example would be Math.round, array.filter, arra.map

  Personally functional programming makes most sense and seems most....productive. Maybe it's just easier for me to understand. Easier on the eyes.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Follow these steps for completing your project.

- [x] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [x] Add your Team Lead as a reviewer on the pull request
- [x] Your Team Lead will count the project as complete by merging the branch back into master
