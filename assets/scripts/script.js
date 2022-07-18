// Assignment code here

// Password object - contains password criterias and character sets used to make a password
var passwordCriteria = {
  length: 12, // default password length
  useLowercase: true, // default setting to use lowercase characters
  useUppercase: true, // deafult setting to use uppercase characters
  useNumeric: true, // deafult setting to use numeric characters
  useSpecialCharacters: true, // deafult setting to use special characters
  lowercaseCharacterSet: "abcdefghijklmnopqrstuvwxyz", // English lowercase characters
  numericCharacterSet: "0123456789", // Decimal numeric characters
  specialCharacterSet: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~", // Special password characters from "https://owasp.org/www-community/password-special-characters"

  /*
    getCharacterSet() method creates a concatenated string of characters stored in the lowercaseCharacterSet, uppercaseCharacterSet, numericCharacterSet and 
    specialCharacter set if the use said yes to using that particular character set.
  */
  getCharacterSet: function () {
    var characterSet = "";

    if (this.useLowercase) {
      characterSet += this.lowercaseCharacterSet;
    }

    if (this.useUppercase) {
      characterSet += this.lowercaseCharacterSet.toUpperCase();
    }

    if (this.useNumeric) {
      characterSet += this.numericCharacterSet;
    }

    if (this.useSpecialCharacters) {
      characterSet += this.specialCharacterSet;
    }

    return characterSet;
  },
};

// inputValidator() - runs a while loop until the user enters the allowed values in the prompt

// generatePassword() - generates the password based on the user selected criterias

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
