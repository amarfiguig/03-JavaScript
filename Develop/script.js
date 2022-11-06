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
    Codeproperties: 0,
    lowoperties: false,
    uppoperties: false,
    spcoperties: false,
    numoperties: false,
  }
    
    var PWlength 
        
// This is the character list number or spicial ... " + low)
      
    var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var spc = ["!","(", ")", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","£", "$"];
    
    features.Codeproperties = PWLength
    
    if (isNaN (PWlength)) {
    window.alert("Please enter a valid number between 6-20");
    return;
  }
  
  else if (PWLength<6 || PWLength>20) { 
   window.alert("you must choose a password between 6 - 20 characters");
    return;
   }

     PWLength = window.prompt("Are you having trouble creating your password?");
  
     features.lowoperties = windows = confirm("Please can you add lower")
     features.uppoperties = windows = confirm("Please can you add Upper")
     features.numoperties = windows = confirm("Please can you add Number")
     features.spcoperties = windows = confirm("Please can you add special")

        if (!featureslow && !featuresupp && !featuresnum && !featuresspc) {
    window.alert("Please add one criteria!");
    return;
  }
        if (featureslow) {
    Codeproperties = Codeproperties.concat(low);
  }
        if (featuresupp) {
    Codeproperties = Codeproperties.concat(upp);
  }
        if (featuresnum) {
    Codeproperties = Codeproperties.concat(num);
  }
        if (featuresspc) {
    Codeproperties = Codeproperties.concat(spc);
  }
        
// Add alert for choise more of criterial and return for strat again if orders are not followed 

var Passacte = []
  for (var i=0; i < PWLength; i++) {
  var randomIndex = Math.floor(Math.random() * Codeproperties.length);
   Passacte.push(Codeproperties[randomIndex]);
  }

return(Passacte.join(''));
}

generateBtn.addEventListener("click", writePassword);
