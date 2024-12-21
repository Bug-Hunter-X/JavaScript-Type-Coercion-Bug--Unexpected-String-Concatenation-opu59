function myFunction(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check if both are numbers
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Both values must be numbers";
  }

  return a + b; // Numerical addition
}

console.log(myFunction(5, "5")); // Output: 10
console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction("a",5)); //Output: Invalid input: Both values must be numbers