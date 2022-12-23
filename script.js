var characters= []
  upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowerCase = "abcdefghijklmnopqrstuvwxyz"
  symbols = "!@#$%?"
  numbs = "1234567890"




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var userInput= prompt("Assign password length by entering a number between 8 and 128.");
  if (userInput >= 8 || userInput <=128 ){
    prompt("Do you want uppercase letters? Yes or No");
  } if (userInput = "yes"){
      prompt("Do you want lowercase letters? Yes or No");
  } if (userInput = "yes"){
      prompt("Do you want numbers letters? Yes or No");
  } if (userInput = "yes"){
        prompt("Do you want symbols letters? Yes or No");
  } if (userInput = "yes"){
          return (Math.floor(Math.random() * charcters.length));
  }
  
    }
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);