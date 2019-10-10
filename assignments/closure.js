// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let a = 4;
function addTip() {
  const tipPercentage = a * .15;
  const plusTip = a + tipPercentage
  console.log(tipPercentage);
  return "your total plus tip is: $" +  plusTip;
}

console.log(addTip());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  let count = 0;
  return () =>  {
    return ++count;
  }
};
const myCounter = counterMaker();
console.log(myCounter());
console.log(myCounter());
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMakerII = (limit = 3) => {
  let count = 1;
  return () => {
    return count > limit ? (count = 1) : count++;
  };
};

myCounterII = counterMakerII();

console.log(myCounterII());
console.log(myCounterII());
console.log(myCounterII());
console.log(myCounterII());


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};

myCounterIII = counterFactory();
console.log(myCounterIII.increment());
console.log(myCounterIII.increment());
console.log(myCounterIII.increment());
console.log(myCounterIII.increment());
console.log(myCounterIII.increment());
console.log(myCounterIII.increment());
console.log(myCounterIII.decrement());
console.log(myCounterIII.decrement());
