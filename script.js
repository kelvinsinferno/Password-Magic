// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  let password = "";

  let pwlength = window.prompt("Enter password length between 8-128 characters.");
  if (pwlength <= 8 || pwlength >= 128) {
    alert("Wrong! Enter a valid length");
    writePassword();
    return;
  }
  
  let upper = window.confirm("Should password include uppercase letters?")
  let lower = window.confirm("Should password include lowercase letters?")
  let number = window.confirm("Should password include numbers?")
  let special = window.confirm("Should password include special characters?")

  // if (upper || lower || number || special) {
  //   return;
  // }


  for (let i = 0; i < pwlength; i++) {
    if (upper == true && password.length < pwlength) {
      password = password + getRandomUpper();
    }
    if (lower == true && password.length < pwlength) {
      password = password + getRandomLower();
    }
    if (number == true && password.length < pwlength) {
      password = password + getRandomNumber();
    }
    if (special == true && password.length < pwlength) {
      password = password + getRandomSpecial();
    }
  }

  let passwordArray = password.split("");
  passwordArray = passwordArray.sort(function () {
    return Math.random() - 0.5;
  })

  password = passwordArray.join("");

  passwordText.value = password;

  return "generated Password";

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  }


  console.log(getRandomUpper(), getRandomLower(), getRandomNumber(), getRandomSpecial());
}
