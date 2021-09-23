// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//WRITE CODE HERE!
var pwd = [];
var charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var sym = ['!', '@', '#', '%', '$'];

// if user click the generate button a prompt will appear (window.prompt)
// if user enters a number 8 - 128 a confirm window will appear
   // - password should generate the length entered
  // if user enters a number outisde of 8 - 128 a alert window will appear
// if user click OK it'll prompt 
// If user clicks generate password it will give prompts for password critera
  //1. - window.prompt (How many character would you like your password to contain?)
    //- User inputs num 8 - 128.
    //- User inputs anything less than 8 or more than 128 prompt alert.
  //2. - window.confirm (click OK to contain special characters or CANCEL to not contain special characters)
  //3. - window.confirm (click OK to contain numeric characters or CANCEL to not contain special characters)
  //4. - window.confirm (click OK to contain upper case characters or CANCEL to not contain special characters)
  //5. - window.confirm (click OK to contain lower case characters or CANCEL to not contain special characters)
// Display generated pwd when all prompts are answered (in an alert or written to the page)
