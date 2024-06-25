// Task
// When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message.

// Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

// Example
// For note = "you'll n4v4r 6u4ss 8t: cdja", 

// the output should be "you'll never guess it: 2390".

// Input/Output
// [input] string note

// A string consisting of lowercase English letters, digits, punctuation marks and whitespace characters (' ').

// Constraints: 0 ≤ note.length ≤ 500.

// [output] a string

// The deciphered note.


// note:string
function stolenLunch(note) {
    
    const stringArray = note.split('')
    const alphabetStart = ['a','b','c','d','e','f','g','h','i','j']

    // *** Pour chaque car, 
    // si c'est un chiffre (0-9): traduire en lettre, 
    // si c'est une lettre (a-j): traduire en chiffre,
    // sinon laisser le car
    let traductedArray = []
    traductedArray = stringArray.map((car) => {
        if(parseInt(car) >= 0 && parseInt(car) < 10) {
            car = alphabetStart[car]
            // console.log(`${car} => ${alphabetStart[car]}`)
        }
        else if (alphabetStart.includes(car)) {
            car = alphabetStart.findIndex((element) => element === car)
            // console.log(`${car} => ${alphabetStart.findIndex((element) => element === car)}`)
        }
        return car
    });
    // console.log(traductedArray)
    
    console.log("trad finale: " + traductedArray.join(''))
    return traductedArray.join('')
}


stolenLunch("0123456789")
stolenLunch("jihgfedcba")
stolenLunch("you won't know!!")
stolenLunch("just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!")
stolenLunch("you'll n4v4r 6u4ss 8t: cdja")
