// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
   var upperCase = lowerCase.toUpperCase();
   var numbers = "0123456789";
   var special = "!@#$%^&*~";

   function userInput(){
    do{
      var passwordLength = prompt("Enter the number of characters:");
      passwordLength = parseInt(passwordLength);
    }while(passwordLength < 8 || passwordLength > 128);
    return passwordLength;
  }

function writePassword() {
var lowercaseBool = false;
var uppercaseBool = false;
var numbersBool = false;
var specialBool = false;
var generatedValues = "";
var confirmUpper = confirm("Do you want uppercase letters?")
if(confirmUpper){
    uppercaseBool = true;
    generatedValues += upperCase; 
   
}
var confirmLower = confirm("Do you want lowercase letters?")
if(confirmLower){
    lowercaseBool = true;
    generatedValues += lowerCase; 
}
var confirmNumber = confirm("Do you want number in your password?")
if(confirmNumber){
    numbersBool = true;
    generatedValues += numbers; 
   
}
var confirmSpecial = confirm("Do you want special characters?")
if(confirmSpecial){
    specialBool = true;
    generatedValues += special; 
}
 if (!lowercaseBool && !uppercaseBool && !numbersBool && !specialBool){
      alert("at least one character type should be selected");
      writePassword();
  }
  else{
    console.log(generatedValues);
    return generatedValues;
  }
}
function generatedPassword (length, word){
  var temporary = "";
  for ( var i = 0; i<length; i++){
    temporary += word.charAt(Math.floor(Math.random()*word.length));
    
  }
  return temporary;
}
var passwordLength = userInput();
var password = writePassword();
var passwordGenerated = generatedPassword(passwordLength, password);
var passwordText = document.querySelector("#password");
passwordText.value = passwordGenerated;

