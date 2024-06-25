// Vous devez trouver l'élément qui apparait un nombre impair de fois

// [1,1,2] => 2
// [7] => 7
// [1,1,2,2,3,3,3,3,4,4,4,4,4,4,5,5,5] => 5

const solution = (arr) => {

    const count = {};
    let final;

    arr.forEach(nbr => {
        if (count[nbr]) {
            count[nbr] += 1;
        }
        else {
            count[nbr] = 1;
        }
    });

    let array = Object.entries(count);
    console.log(array);

    array.forEach(arr => {
        if(arr[1] % 2 !== 0) {
            final = arr[0];
        }
    })

    return final;
}


console.log(solution([1,1,2]))

console.log(solution([1,1,2,2,3,3,3,3,4,4,4,4,4,4,5,5,5]))