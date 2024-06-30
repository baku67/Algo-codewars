// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"


function onlyDuplicates(str) {
    
    let strArray = str.split('')
    let letters = {}

    strArray.forEach(letter => {
        if(!letters[letter]) {
            letters[letter] = 1
        }
        else {
            letters[letter]++
        }
    });

    let arraySolo = []
    Object.entries(letters).forEach(letterArray => {
        if(letterArray[1] == 1) {
            arraySolo.push(letterArray[0])
        } 
    })

    let finalArray = strArray.map(letter => {
        if(!arraySolo.includes(letter)) {
            return letter
        }
    })

    return(finalArray.join(''))
}

onlyDuplicates('abccdefee')