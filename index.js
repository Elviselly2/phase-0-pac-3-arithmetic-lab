function add(){return something;}
function subtract(){return something;}
function multiply(){return something;}
function divide(){return something;}
function add(a,b){return a+b;}
function subtract(a, b) {
    return a - b;
  }
  console.log(subtract(60, 40)); 
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(2, 3.4)); 
  function divide(a, b) {
    return a / b;
  }
  console.log(divide(5.0, 2.5)); 
  function increment(n) {
    return ++n;
  }
  console.log(increment(5)); 
  function decrement(n) {
    return --n;
  }
  console.log(decrement(5));
  function makeInt(string) {
    return parseInt(string, 10);
  }
  console.log(makeInt("2")); 
  console.log(makeInt("2.2222"));
  console.log(makeInt("nonsense!")); 
function preserveDecimal(string) {
    return parseFloat(string);
  }
  console.log(preserveDecimal("80.123999")); 
  console.log(preserveDecimal("nonsense!")); 
  