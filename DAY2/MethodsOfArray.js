console.log("Methods of Array...");
let colors = ['Blue','Green','Red','Purple','Orange',];

// join() - joins all array elements into a string, you can also use seperator
console.log(colors.join());
console.log(colors.join("*"));

//toString() converts an array to a string of (comma separated) array values
console.log(colors.toString());

//The pop() method removes the last element from an array
//The pop() method returns the value that was "popped out"
console.log(colors.pop());
console.log(colors);

//The push() method adds a new element to an array (at the end)
//returns the new array length:
console.log(colors.push("Yellow"));
console.log(colors);

//shift() method removes the first array element and "shifts" all other elements to a lower index, 
//equivalent to popping, working on the first element instead of the last.
//returns the string that was "shifted out"
console.log(colors.shift());
console.log(colors);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
//returns the new array length.
console.log(colors.unshift("Pink"));
console.log(colors);



