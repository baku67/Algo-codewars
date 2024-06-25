
// Narcissic number 
// 153 = 1^3 + 5^3 + 3^3 = 153
// 1652 = 1^4 + 6^4 + 5^4 + 2^4 = 1938
// (exposant = length)



const isNarcissic = (nbr) => {

    let array = nbr.toString().split('');
    console.log("array= " + array)
    let count = array.length; // multiplicateur
    console.log("count= " + count)

    let finalCount = 0;

    array.forEach(nbr => {
        finalCount += parseInt(nbr)**count;
        console.log("finalCount= " + finalCount)
    });

    if (finalCount == nbr) {
        return true
    } else {
        return false
    }
}


console.log(isNarcissic(153))
console.log(isNarcissic(1652))