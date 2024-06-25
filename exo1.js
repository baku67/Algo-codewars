// On donne une chaine de caractères, et vous devez la diviser en pair de caractères dans un array, mais si c'est un nombre impair, la dernière lettre sera accompagnée d'un "_"
 
// solution('abc') => ['ab', 'c_]
// solution('abcdef') => ['ab', 'cd', 'ef']

const solution = (str) => {

    let answer;

    answer = str.split('').reduce((acc, curr, currIndex, array) => {
        acc = curr + array[currIndex +1]
    }, [])

    // if(str.length % 2 === 0) { 
    //     return answer
    // } else {
    //     answer[answer.length - 1] += "_"
    //     return answer
    // }
    
}


console.log(solution('abcdef'))

console.log(solution('abcde'))
