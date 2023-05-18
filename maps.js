const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// new Map() -> Creates a new Map
// Create a Map




// =========================================
// =========================================

// set()	Sets the value for a key in a Map

// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits.get("apples"));

// =========================================
// =========================================

// get()	Gets the value for a key in a Map

// const output =fruits.get("apples");
// console.log(output);
// =========================================
// =========================================

// size	Returns the number of elements in a Map


console.log(fruits.size);
// =========================================
// =========================================

// delete()	Removes a Map element specified by the key


// fruits.delete("apples");
// console.log(fruits.size);

// =========================================
// =========================================

// has()	Returns true if a key exists in a Map


// console.log(fruits.has("apples"));
// fruits.delete("apples");
// console.log(fruits.has("apples"));

// =========================================
// =========================================

// forEach()	Calls a function for each key/value pair in a Map

  
  // let text = "";
  // fruits.forEach (function(value, key) {
  //   text += key + ' = ' + value + "  ,";
  // })
  // console.log(text);

// =========================================
// =========================================

// entries()	Returns an iterator with the [key, value] pairs in a Map
let text = "";
for (const x of fruits.entries()) {
  text += x + " ";
}
console.log(text);


