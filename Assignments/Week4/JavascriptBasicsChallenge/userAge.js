let yearOfBirth = prompt('Please enter your year of birth.');
let userAge = 2022 - yearOfBirth;

if(userAge < 18){
    console.log("You are a Minor!");
}else if((userAge >= 18) && (userAge < 36)){
    console.log("You are a Youth!");
}else{
    console.log("You are an Elder!");
}