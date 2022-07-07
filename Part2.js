// Additional assignments for Day 5

console.log("=====================Part 2=====================");

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

console.log("\n==========Question 1==========");

function giveMeRandom (n) {
    let result = Array(n);
    for (let i = 0; i < result.length; i++) {
        result[i] = Math.floor(Math.random() * 11);
    }
    return result;
}

function checkArray (array) {
    let bigger = Boolean();
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            bigger = true;
            sum += array[i];
        } else {
            bigger = false;
        }
        console.log(`Number: ${array[i]}  Bigger than 5?: ` + bigger.toString());
    }
    return sum;
}

let q1Sum = checkArray(giveMeRandom(5));
console.log("INPUT 5 = " + q1Sum.toString());

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

console.log("\n==========Question 2==========");
let shoppingCart = new Array(3);
shoppingCart = [
    {
        price : 5,
        name : "Toothpaste",
        id : 153,
        quantity : 3
    },
    {
        price : 10,
        name : "Bleach",
        id : 456,
        quantity : 1
    },
    {
        price : 8,
        name : "Cereal",
        id : 233,
        quantity : 2
    }
]

function shoppingCartTotal (objects) {
    let result = 0;
    for (let i = 0; i < objects.length; i++) {
        result += objects[i].quantity * objects[i].price;
    }
    return result;
}

console.log("Shopping Cart:")
let names = "";
let prices = "";
let quantities = "";
for (let i = 0; i < shoppingCart.length; i++) {
    names += shoppingCart[i].name + " "
    prices += shoppingCart[i].price.toString() + " "
    quantities += shoppingCart[i].quantity.toString() + " "
}
console.log(names);
console.log(prices);
console.log(quantities);
console.log("\nShopping cart total: " + shoppingCartTotal(shoppingCart).toString())

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log("\n==========Question 3==========");
function addToShoppingCart (newObject) {
    shoppingCart.push(newObject);
    let result = shoppingCart.length;
    return result;
}

newAddition = {
    price : 50,
    name : "Table",
    id : 556,
    quantity : 1
}
console.log(addToShoppingCart(newAddition).toString());

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

console.log("\n==========Question 4==========");
function maxShoppingCart (array) {
    let max = Math.max.apply(null, array.price);
    let result = array.map(array => array.price).indexOf(max);
    return array[result];
}
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

console.log("\n==========Question 5==========");

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

console.log("\n==========Question 6==========");
function loopUntil (x) {
    let rand;
    let checker = 0;
    for (let i = 0; checker === 3; i++) {
        rand = Math.floor(Math.random() * 10);
        console.log(rand.toString());
        if (rand > x) {
            checker += 1;
        } else {
            checker = 0;
        }
    }
}
console.log("Test number: 3")
loopUntil(3);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

console.log("\n==========Question 7==========");

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

console.log("\n==========Question 8==========");

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

console.log("\n==========Question 9==========");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

console.log("\n==========Question 10==========");

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("\n==========Question 11==========");

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
