function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a; //Type Guard
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB;
}

let result1 = addSafe(5, "10"); // This will work correctly
console.log(result1); // Output: 15

let result2 = add(5, 10 as number); //Type Assertion
console.log(result2); // Output: 15