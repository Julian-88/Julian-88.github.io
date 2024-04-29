//TASK 1 COMPLETE (BELOW)
console.log("TEST 1:")
for (let i = 1; i <= 10; i++) { 
    let squared = i * i; 
    console.log(`The square of ${i} is ${squared}`); 
  } 

// TEST 2 COMPLETE (BELOW)
console.log("TEST 2:")
for (let i = 5; i >= 0; i--) {
    console.log(i);

   if (i === 0) {
       console.log("Blast Off!");
   }
}

// TEST 3 COMPLETE! (BELOW)
console.log("TEST 3:")
let i = 0;
let o = 50;

for (i=1; i<=o; i++){
  if(i%2==0){
    console.log(i)
  }
}

//TEST 4 COMPLETE! (BELOW)
console.log("TEST 4:")
let sum = 0;

for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum)

//TEST 5 WIP (BELOW)
console.log("TEST 5:")

let factorial = 1;
for (let i = 1; i <= 10; i++){
    factorial *= i;
    console.log(factorial);
}

//test 6 below
console.log("TEST 6:")

let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//test 7 below
console.log("test 7:")
for (let i = arr.length - 1;i >= 0; i--) {
  console.log(arr[i]);
}

//test 8 below
console.log("test 8:")

let cool = [];

   for ( let i = 1; i <= 10; i++) {
    cool.push(i**3)
   }
   console.log(cool);

//test 9 below
console.log("Task 9");
let fib = [];
let first = 0;
let second = 1;
for(let i =1; i <11; i++) {

fib .push (first)
let temp = second
second = second + first;
first = temp
}

console.log(fib);

// test 10 below
console.log("test 10:");
let yay = [];
for (let i = arr.length - 1; i >= 0; i--) {
  let yay = arr[i];
  arr.push(yay);
  console.log(yay);
}

