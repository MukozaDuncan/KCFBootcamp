function fizzBuzz(stringOne,stringTwo){
    lengthOne = stringOne.length;
    lengthTwo = stringTwo.length;
    combinedLength = lengthOne + lengthTwo;

    if(((combinedLength % 3) === 0) && ((combinedLength % 5) === 0)){
        return "FizzBuzz";
    }else if((combinedLength % 3) === 0){
        return "Fizz";
    }else if((combinedLength % 5) === 0){
        return "Buzz";
    }else{
        return "Unwanted output.";
    }
}

console.log(fizzBuzz('Mukoza','Duncan'));