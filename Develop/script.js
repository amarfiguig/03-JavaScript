
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  
  var userOptions = {
    numberOfChars: 0,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
    numbers: false
  }
  
  
  
  var passwordLength = window.prompt("Do you need help for creating a password?");
  
  if (isNaN (passwordLength)) {
    window.alert("Please enter a valid number between 6-20");
    return;
  }

  else if (passwordLength<6 || passwordLength>20) { 
   window.alert("you must choose a password length between 6 - 20 characters");
    return;
   }
  
  userOptions.numberOfChars = passwordLength

  userOptions.lowerCase = window.confirm("Please can you add lower case characters?");
  userOptions.upperCase = window.confirm("Please can you add UPPER case characters?");
  userOptions.specialChar = window.confirm("Please can you add special characters?");
  userOptions.numbers = window.confirm("Please can you add numbers?");

  // the available charaters 
  
const charLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
const charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var charList = [];

if (userOptions.lowerCase){
  charLower.forEach(element => charList.push(element));
  console.log(charList);
}


if(userOptions.upperCase) {
  charUpper.forEach(element => charList.push(element));
  console.log(charList);
}

if(userOptions.specialChar){
  charSpec.forEach(element => charList.push(element));
  console.log(charList);
}


if(userOptions.numbers){
  charNumber.forEach(element => charList.push(element));
  console.log(charList);
}


var passwordMake = []
  for (var i=0; i < userOptions.numberOfChars; i++) {
  var randomIndex = Math.floor(Math.random() * charList.length);
   passwordMake.push(charList[randomIndex]);
  }

return(passwordMake.join(''));

}

// button

generateBtn.addEventListener("click", writePassword);
