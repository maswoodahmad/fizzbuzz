function fizzBuzz(phone) {
    let sum = 0;
    for (let digit of phone) {
      sum += parseInt(digit);
    }
    for (let i = 1; i <= sum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 4 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz("9936675027");

