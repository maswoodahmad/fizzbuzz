function fizzBuzz(phone) {
    let sum = 0;
    for (let digit of phone) {
      sum += parseInt(digit);
    }
    let ans = "";
    for (let i = 1; i <= sum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        ans+="FizzBuzz ";
      } else if (i % 4 === 0) {
        ans+="Fizz ";
      } else if (i % 5 === 0) {
        ans+="Buzz ";
      } else {
        ans+= i+" ";
      }
    }
    console.log(ans);
  }
  fizzBuzz("9936675027");

