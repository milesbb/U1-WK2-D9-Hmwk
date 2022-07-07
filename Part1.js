/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

console.log("=====================Part 1=====================");

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("\n==========Question 1==========");
function area (l1, l2) {
    let totalArea = l1*l2;
    return totalArea;
}
console.log(`The area of a rectangle with sides of length 2 and 4 is equal to ${area(2, 4)}`);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n==========Question 2==========");
function crazySum (integer1, integer2) {
    let sum = integer1 + integer2;
    if (sum === integer1 * 2) {
        sum *= 3
    }
    return sum
}
console.log("INPUT 1 and 2 = " + crazySum(1, 2).toString());
console.log("INPUT 4 and 4 = " + crazySum(4, 4).toString());

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n==========Question 3==========");
function crazyDiff (integer) {
    difference = Math.abs(19 - integer);
    if (integer > 19) {
        difference *= 3
    }
    return difference
}
console.log("INPUT 4 = " + crazyDiff(4).toString());
console.log("INPUT 21 = " + crazyDiff(21).toString());

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n==========Question 4==========");
function boundary (n) {
    let result = Boolean();
    if ((100 >= n && 20 <= n) || n === 400) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log("INPUT 2 = " + boundary(2).toString());
console.log("INPUT 30 = " + boundary(30).toString());
console.log("INPUT 400 = " + boundary(400).toString());


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n==========Question 5==========");
function strivify (string) {
    if (string.startsWith("Strive") === true) {
        return string;
    } else {
        string = "Strive " + string;
        return string;
    }
}
let q5Test1 = "Dogs and Cats";
console.log("INPUT Dogs and Cats =        " + strivify(q5Test1));
let q5Test2 = "Dogs and Cats do well at Strive!";
console.log("INPUT Dogs and Cats do well at Strive! =          " + strivify(q5Test2));
let q5Test3 = "Strive is a good place for dogs and cats!";
console.log("INPUT Strive is a good place for dogs and cats! =         " + strivify(q5Test3));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("\n==========Question 6==========");
function check3and7 (integer) {
    let result;
    if (integer % 3 === 0) {
        result = true;
    } else if (integer % 7 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log("INPUT 3 = " + check3and7(3).toString());
console.log("INPUT 7 = " + check3and7(7).toString());
console.log("INPUT 21 = " + check3and7(21).toString());
console.log("INPUT 2 = " + check3and7(2).toString());

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n==========Question 7==========");
function reverseString (string) {
    let letters = string.split("");
    let result = letters.reverse().join("");
    return result;
}
let q7Test = "Hello my name is Miles";
console.log("INPUT Hello my name is Miles = " + reverseString(q7Test));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("\n==========Question 8==========");
function upperFirst (string) {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
let q8Test = "hello my name is miles";
console.log("INPUT hello my name is miles = " + upperFirst(q8Test));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("\n==========Question 9==========");
function cutString (string) {
    let result = string.split("");
    result.pop();
    result.shift();
    result = result.join("")
    return result;
}
let q9Test = "gigantic";
console.log("INPUT gigantic = " + cutString(q9Test));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("\n==========Question 10==========");
function giveMeRandom (n) {
    let result = Array(n);
    for (let i = 0; i < result.length; i++) {
        result[i] = Math.floor(Math.random() * 11);
    }
    return result;
}
console.log("INPUT 8 = " + giveMeRandom(8).toString());

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
