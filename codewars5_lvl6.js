// Complete the solution so that the function will break up camel casing, using a space between words.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {

    let stringArray = string.split('') 
    console.log(stringArray)

    
    let stringArraySpace = stringArray.map(letter => {
        if(letter == letter.toUpperCase()) {
            return " " + letter
        }
        else return letter
    });
    console.log(stringArraySpace)

    // let arrayIndexUppercases = stringArray.reduce((arrayIndexUppercases, letter, letterIndex, array) => {
    //     if(letter == letter.toUpperCase()) {
    //         arrayIndexUppercases.push(letterIndex)
    //     }
    //     return arrayIndexUppercases
    // }, [])
    // console.log(arrayIndexUppercases)

    return stringArraySpace.join('');
  }


console.log(solution("camelCasingTest"))