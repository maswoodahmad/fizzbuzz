function fizzBuzz(phone){
    for( let i =1; i<=10; i++)
    {
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
    let  num=9936675027;
    fizzBuzz(num);

