// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


String.prototype.camelCase=function(){
  
    let wordArray = this.split(' ');

  let wordArrayToUpper = wordArray.map((word) => {
    let wordArray = word.split('')
    wordArray[0] = wordArray[0].toUpperCase()
    
    return wordArray.join('')
  });
  
  return wordArrayToUpper.join('')

}