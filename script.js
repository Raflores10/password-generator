// Variables set up to contain characters that user can use"
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var symbols = "!@#$%?"
var numbs = "1234567890"


// Variables to be used as containers
var characterList="";
var characterPool="";



// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function that prompts user to input number that needs to be between 8 and 128. 
function generatePassword() {
  var userInput = prompt("Enter the number of characters you want for your password. (Needs to be between 8 and 128 characters)");
  if (userInput <8 || userInput >128) {
      alert("Please try again")
  }

  // If statements that asks users if they want thier password to contain specializations (Uppercase,lowercase,numbers and symbols). Once confirmed the character variables are being added to characterlist to be grabbed from later.
  var upCaseInput = confirm("Do you want uppercase letters in your password?")
  if (upCaseInput === true) {
      characterList = characterList + upperCase
      console.log(characterList)
  }


  var loCaseInput = confirm("Do you want lower letters in your password?")
  if (loCaseInput === true) {
      characterList = characterList + lowerCase
      console.log(characterList)
  }

  var symbolInput = confirm("Do you want symbols in your password?")
  if (symbolInput === true) {
      characterList = characterList + symbols
      console.log(characterList)

  }

  var numbsInput = confirm("Do you want numbers in your password?")
  if (numbs === true) {
      characterList = characterList + numbs
      console.log(characterList)
  }

  if(numbsInput === false && upCaseInput === false && loCaseInput=== false && symbolInput === false) {
      alert("Must pick one of the choices");
      return;

  }

  for( let i = 0; i < userInput; i++) {
    characterPool = characterPool + characterList.charAt(Math.floor(Math.random() * characterList.length));
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