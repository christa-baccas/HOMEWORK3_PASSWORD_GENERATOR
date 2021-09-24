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


var generatePassword = function(){
  // Ask user for length choice and if user click cancel
  var length = window.prompt("Enter a password length 8 - 128")
  if(!length){
    return;
  }
  
  // User must enter a number 8-128
  if(length < 8 || length  > 128){
    window.alert("You must enter a length 8 - 128");
    return;
  } 

      // prompts after user enters a valid pwd length. User can pick how their password can be generated
      var spec = window.confirm("Would you like to include special characters?");
      if(spec){
        pwd = pwd.concat(sym);
      }
      var num = window.confirm("Would you like to include numbers?");
      if(num){
        pwd = pwd.concat(number);
      }
      var lower = window.confirm("Would you like to include a lower-case characters?");
      if(lower){
        pwd = pwd.concat(charLower);
      }
      var upper = window.confirm("Would you like to include a upper-case characters?");
      if(upper){
        pwd = pwd.concat(charUpper);
      } else if(!spec && !num && !lower && !upper){
        pwd = "Abracadabra!".split("");
        console.log(pwd);
      }

          // stores the generated password
    var finalPwd = [];

    // 
    for(var i = 0; i < length; i++){
        var generated = Math.floor(Math.random()* pwd.length);
        finalPwd.push(pwd[generated]);
    }

    // added an alert to validate password has been generated
    window.alert("See your password below");
    return finalPwd.join('');
    
};


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
