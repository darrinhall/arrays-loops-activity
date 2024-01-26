console.log('hello world');
/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let groupHobbies = ['traveling', 'singing', 'shopping', 'cooking']
for(let index = 0; index < groupHobbies.length; index ++) {
     console.log('index', index);
     console.log('Favorite hobby is', groupHobbies[index]);
}
console.log('Total number of hobbies is', groupHobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
const colors = ['pink', 'blue', 'red', 'teal', 'black', 'purple', 'teal', 'orange'];
let tealCount = 0;
for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'teal') {
        tealCount++;
    }
}
console.log('Array of Colors:', colors);
console.log('Number of times "teal" found:', tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
let numbers = [5, 37, 18, 26, 55, 74];
let oddNumbers = [];
let evenNumbers = [];
for (let index = 0; index < numbers.length; index ++) {
     if (numbers[index]%2 === 0) {
          evenNumbers.push(numbers[index])
     }
     else {
          oddNumbers.push(numbers[index])
     }
}
console.log(numbers);
console.log(oddNumbers);
console.log(evenNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let arr1 = [true, false, false, false, true];
let Toggled = [];
for (let index = 0; index < arr1.length; index ++) {
     Toggled.push(!arr1[index]);
}
console.log(arr1);
console.log(Toggled);


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */
let arr = [3, 0, 2, 8, 0, 0, 0]
console.log('Before loop', arr);
for (let index = 0; index < 3; index ++) {
     arr.pop();
}
console.log('After loop', arr);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */
let Numbers = [4, 8, 23, 54, 7, 37, 98, 102, 65, 72, 17];
let High = [];
let Low = [];
for (let index = 0; index < Numbers.length; index ++) {
     High = Math.max(...Numbers);
     Low = Math.min(...Numbers);
}
console.log(Numbers);
console.log('High:', High);
console.log('Low:', Low);


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
