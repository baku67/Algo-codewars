// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
  
    if(number < 0) {
        return 0
    }
    else {
        // 0 pour le reduce, on s'en fous vu que c'est un acc à la fin
        let multiples = [0]
        let multiplesAcc = 0

        for (let index = 1; index < number; index++) {
            if(index % 3 == 0 || index % 5 == 0) {
                if(!multiples.includes(index)) {
                    multiples.push(index)
                    multiplesAcc += index
                }
            }
        }
        console.log(multiples)

        // let result = multiples.reduce((acc, curr) => acc = acc + curr)

        return multiplesAcc
    }

}


console.log(solution(16))