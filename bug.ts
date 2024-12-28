function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, "10"); //Type Error.  Expected number but got string
console.log(result); // This line will not execute due to type error