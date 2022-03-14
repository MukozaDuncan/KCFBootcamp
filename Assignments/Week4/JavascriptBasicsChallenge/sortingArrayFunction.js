let originalArray = [3.0, 'a', 7, 'x', 20, 'd', 4, 'f', 8];
let evenNumbers = [];
let oddNumbers = [];
let characters = [];

function sortingArrays(){
    for(let i=0; i<originalArray.length; i++){
        if(typeof originalArray[i] === "number"){
            if((originalArray[i] % 2) === 0){
                evenNumbers[evenNumbers.length] = originalArray[i];
            }else{
                oddNumbers[oddNumbers.length] = originalArray[i];
            }
        }else{
            characters[characters.length] = originalArray[i];
        }
   }
   let sortedContents = {
       evens: evenNumbers,
       odds: oddNumbers,
       chars: characters
   };
   console.log(sortedContents);
   console.log("Evens "+sortedContents.evens);
   console.log("Odds "+sortedContents.odds);
   console.log("Chars "+sortedContents.chars);
}

sortingArrays.apply(null,originalArray);