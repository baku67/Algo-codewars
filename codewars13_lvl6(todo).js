// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.


function countFeelings(string, array) {

    let feelingsCount = 0

    const stringArray = string.split('')
    console.log(stringArray)

    array.forEach(feeling => {
        const feelingArray = feeling.split('')
        console.log(feelingArray)


        if(stringArray.includes([...feelingArray])) {
            feelingsCount++
        }

        console.log([...feelingArray])
    });
  
  
    return `${feelingsCount} feelings`
}

console.log(countFeelings("angerw", ['anger', 'awe', 'joy', 'love', 'grief']))