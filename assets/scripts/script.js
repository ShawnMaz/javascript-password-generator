// Assignment code here

// Password object - contains password criterias and character sets used to make a password. Only the generatePassword() methods needs to be called
var passwordGenerator = {
  passwordLength: 12, // default password length
  useLowercase: true, // default setting to use lowercase characters
  useUppercase: true, // deafult setting to use uppercase characters
  useNumeric: true, // deafult setting to use numeric characters
  useSpecialCharacters: true, // deafult setting to use special characters
  lowercaseCharacterSet: "abcdefghijklmnopqrstuvwxyz", // English lowercase characters
  numericCharacterSet: "0123456789", // Decimal numeric characters
  specialCharacterSet: "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~", // Special password characters from "https://owasp.org/www-community/password-special-characters".

  /*
    getCharacterSet() method creates a concatenated string of characters stored in the lowercaseCharacterSet, uppercaseCharacterSet, numericCharacterSet and 
    specialCharacter set if the use said yes to using that particular character set.
  */
  _getCharacterSet: function () {
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
  /* 
    _isFLoat() - this helper method checks if the value passed to it is a float or not
    by checking the remainder after parsing the value to a float and an int.
  */
  _isFloat: function (value) {
    var floatConvert = parseFloat(value);
    var intConvert = parseInt(value); // if the value is float, the number will be truncated.
    if (floatConvert && intConvert) {
      var remainder = floatConvert - intConvert; // if the value is float there will be a difference between the float and int due to truncation.
      if (remainder === 0) {
        return false;
      }
    }
    return true;
  },
  /*
    _setPassword() - this helper method creates the prompts that lets the user pick the password length
    and validates the user input so that the program function correctly.
  */
  _setPasswordLength: function () {
    do {
      var length = prompt(
        "Please choose a whole number between 8 and 128 for password length"
      );
      if (
        !length ||
        this._isFloat(length) ||
        !(parseInt(length) > 7 && parseInt(length) < 129)
      ) {
        alert("Invalid entry. Please try again.");
      }
    } while (
      !length ||
      this._isFloat(length) ||
      !(parseInt(length) > 7 && parseInt(length) < 129)
    );
    this.passwordLength = parseInt(length);
  },
  /*
    _setPasswordCriteria() - this helper method asks the user which charater sets the user would like to 
    use for thier password. It also validates user response so that the use is force to choose at least on
    type of character set.
  */
  _setPasswordCriteria: function () {
    do {
      var includeLowercase = confirm(
        "Would you like to use lowercase characters like 'a', 'b', 'c' etc."
      );
      var includeUppercase = confirm(
        "Would you like to use uppercase characters like 'A', 'B', 'C' etc."
      );
      var includeNumeric = confirm(
        "Would you like to use numbers like '0', '1', '2' etc."
      );
      var includeSpecialCharacters = confirm(
        "Would you like to use special characters like '~', '`', '!' etc."
      );

      if (
        !includeLowercase &&
        !includeUppercase &&
        !includeNumeric &&
        !includeSpecialCharacters
      ) {
        alert(
          "You must select at least one type of character to generate your password"
        );
      }

      this.useLowercase = includeLowercase;
      this.useUppercase = includeUppercase;
      this.useNumeric = includeNumeric;
      this.useSpecialCharacters = includeSpecialCharacters;
    } while (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecialCharacters
    );
  },
  /*
    generatePassword() - this method is the only method that needs to be called outside of the object.
    It will call all the necessary helper functions to get all the information from the user and generate a 
    password from the information
  */
  generatePassword: function () {
    this._setPasswordLength(); // Gets password length from the user
    this._setPasswordCriteria(); // Gets password characters sets the user wanto to use
    var characterSet = this._getCharacterSet(); // Creates a string from all the characters the user want to use

    var password = "";
    for (var i = 0; i < this.passwordLength; i++) {
      password +=
        characterSet[Math.floor(Math.random() * (characterSet.length))]; // randomly picks a character from the password set and adds it to the password string
    }
    return password;
  },
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator.generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
