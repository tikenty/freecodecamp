/* ❓DESCRIPTION
Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
 */

// ✅ Answer:

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removedElement = arr.shift();
    return removedElement;

}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* ☑️TESTS
nextInLine([], 5) should return a number.
Passed:nextInLine([], 1) should return 1
Failed:nextInLine([2], 1) should return 2
Failed:nextInLine([5,6,7,8,9], 1) should return 5
Failed:After nextInLine(testArr, 10), testArr[4] should be 10
 */