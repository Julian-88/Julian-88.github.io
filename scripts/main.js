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

for (i=1;i<=o;i++){
  if(i%2==0){
    console.log(i)
  }
}

//TEST 4 WIP (BELOW)
let sum = 0;

for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum)

