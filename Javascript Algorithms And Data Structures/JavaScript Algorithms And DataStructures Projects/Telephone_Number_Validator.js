function telephoneCheck(str) {
    // Good luck!
    let regexUsNumber = new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g)
    return regexUsNumber.test(str)
  }
  
  telephoneCheck("555-555-5555");