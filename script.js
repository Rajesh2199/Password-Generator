// Assignment Code
  var generateBtn = document.querySelector("#generate");
  // Declaring variables
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var num =  '0123456789';
  var characters = '!@#$%^&*()_+' ;
  

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// we are selecting password text field from HTML with id password.

// and putting it in a passwordText variable.
  passwordText.value = password;

// here we set passwordText's value as password (variable in line 6), 

// with the value for password variable in line 6 after generatePassword() function is executed.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 
// function to generate a random password based on user input.
function generatePassword() {
  var length = prompt('How many characers would you like? Please enter a number between 7 and 129!')
  var input = " ";
  
  if ( length > 129 || length < 7 ){
    prompt("Password length must be between 7 and 129!")
  }

var uppercase = confirm("Would you like to use uppercase letters?")
if (uppercase) { 
  input += upper;
}

var lowercase = confirm("Would you like to use lowercase letters?")
  if (lowercase){
  input += lower;
}


var numbers = confirm("Would you like to use numbers?")
  if (numbers){
  input += num;
}


var special = confirm("Would you like to use special characters?")
  if (special) {
  input += characters;
}


  // if the user does not include uppercase, lowercase, numbers and special characters
  // prompt the following:

  if (input === " ") {
    alert ("You must select at least one type from Uppercase, Lowercase, Numbers and special characters.")
    
    return generatePassword();
  // if user enters no for all the questions return generatePassword() function will be execute again.
  // and user will be asked same questions from the beginning.
}




var newPassword = "";

for (i= 1 ; i <= length; i++) {

  newPassword += input.charAt(Math.floor(Math.random() * input.length));

}
return newPassword;
}






