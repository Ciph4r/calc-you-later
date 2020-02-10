/*********************************************
 * STEP 1 - IMPORTING OUR CALCULATE FUNCTION *
 *********************************************/

// Grab the calculate function from our other file. Imports can be tricky at first, so this one's a gimme!

const calculate = require('./calculate-back-end.js')



// For the following steps, write the code, like the example above, DIRECTLY
// below the comment that describes it.

// That way our comments will describe what the code right under it does.
// Thus providing documentation for future readers. Including yourself!


/**********************
 * ABOUT PROCESS.ARGV *
 **********************/

// Grab the three user inputs from the command line. They'll be in a special
// array that the node environment gives us, called "process.argv".

// Arrays are like strings, in that they have something stored at each index.
// But unlike arrays, they don't store single-character strings--instead, they
// can store anything of any length!

// In process.argv's case, they store the strings the user types in. The tricky
// thing is that process.argv[0] returns the first thing the user types in,
// which is always "node". Similarly, process.argv[1] returns the second thing
// the user typed, which is the name of the file they wanted to run with node.
// So if we want to get the commands the user wants US to run, those strings
// start at index 2.



/*********************************
 * STEP 2 - GRAB THE USER INPUTS *
 *********************************/

// Put the two numbers and the operation into variables so we can feed them into
// our calculate function. We can decide what order the user inputs go in by
// storing the approprIate pair of them as the numbers, and the other one as the
// operation. By far the most user-friendly way to store them is to assume
// they're in [number] [operation] [number] order, as in:
// 5 + 5
// 6 minus 4
// 10 X 5


// Use (well-named) variables to store the user inputs that are available in the process.argv array.



/**************************************
 * STRETCH GOAL - TWO-WORD OPERATIONS *
 **************************************/

//As a stretch goal--done after everything else works!- allow for someone to type in two words for operations, like
// "divided by" or "subtracted from". Those two-word operations are
// space-separated, which means node will put them in separate indices. So instead of [number] [operation] [number], they'll come into process.argv in [number] [operation word] [operation word] [number] order.

// And we can't forget to make our two-word operation back into one string for the next step, as that's how calculate is expecting to receive it!


/*************************************************************
 * STEP 3 - FEED THE USER INPUTS INTO OUR CALCULATE FUNCTION *
 *************************************************************/


// Store the return value of our calculate function, making sure to feed it the correct values from our user input.


/******************************************
 * STEP 4 - PRINT IT BACK TO THE TERMINAL *
 ******************************************/

// Take the return value from the previous step and print it back out to the user.




let x = process.argv[2]
let y = process.argv[5]
let sign = process.argv[3]
let sign2 = process.argv[4]
if (process.argv[5] === undefined){
  x = process.argv[2]
  y = process.argv[4]
  sign = process.argv[3]
  sign2 = process.argv[5]
}


const result = calculate(x,y,sign,sign2);

console.log(result)

