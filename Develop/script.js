// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// In the lower variable, a function is added to write the password
function generatePassword() {

    
  var features = {
    passwordlength: 0,
    lowoperties: false,
    uppoperties: false,
    spcoperties: false,
    numoperties: false,
  }
    
  var characters = []

        
// This is the character list number or spicial ... " + low)
      
    var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var spc = ["!","(", ")", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","£", "$"];
    
  features.passwordlength = window.prompt('how long do you want passwor to be ?')
    
  
    if (isNaN (features.passwordlength)) {
    window.alert("Please enter a valid number between 6-20");
    return;
  }
  
  if (features.passwordlength<6 ||features.passwordlength>20) { 
   window.alert("you must choose a password between 6 - 20 characters");
    return;
   }
  
     features.lowoperties = window.confirm("Please can you add lower")
     features.uppoperties = window.confirm("Please can you add Upper")
     features.numoperties = window.confirm("Please can you add Number")
     features.spcoperties = window.confirm("Please can you add special")

        if (!features.lowoperties && !features.numoperties && !features.spcoperties && !features.uppoperties) {
    window.alert("Please add one criteria!");
    return;
  }
        if (features.lowoperties) {
    characters = characters.concat(low);
  }
        if (feature.uppoperties) {
    characters = characters.concat(upp);
  }
        if (feature.numoperties) {
    characters = characters.concat(num);
  }
        if (features.spcoperties) {
    characters = characters.concat(spc);
  }
        
// Add alert for choise more of criterial and return for strat again if orders are not followed 

var Passacte = []
  for (var i=0; i < features.passwordlength; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
   Passacte.push(characters[randomIndex]);
  }

return(Passacte.join(''));
}

// button

generateBtn.addEventListener("click", writePassword);
