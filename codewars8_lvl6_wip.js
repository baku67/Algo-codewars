// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.


// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(braces){

    let parantheseLeftCount = 0;
    let parantheseRightCount = 0;

    let crochetLeftCount = 0;
    let crochetRightCount = 0;

    let accoLeftCount = 0;
    let accoRightCount = 0;

    let bracesArray = braces.split('')

    bracesArray.forEach(brace => {

        switch (brace) {
            case "(":
                parantheseLeftCount++
                break;
            case ")":
                parantheseRightCount++
                break;
            case "[":
                crochetLeftCount++
                break;
            case "]":
                crochetRightCount++
                break;
            case "{":
                accoLeftCount++
                break;
            case "}":
                accoRightCount++
                break;
                                  
            default:
                break;
        }
    });

    console.log(bracesArray)

    // Validation:
    if(parantheseLeftCount == parantheseRightCount && crochetLeftCount == crochetRightCount && accoLeftCount == accoRightCount) {
        return true
    } else {
        return false
    }
  
}

console.log(validBraces("(){}[]"))
console.log(validBraces("([{}])"))
console.log(validBraces("[(])"))
console.log(validBraces("[({})](]"))