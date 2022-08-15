// 3. Aceeasi cerinta ca mai sus dar FARA metodele predefinite pe array-uri
// (FARA foreach, every, methode de pe arrays)

let multiDimensionArray = [1, 'A', 'C', 'D', ['B', 2, 'C', ['B', 3, 'C', ['E', 4, 'Z']]]]

var obj = {}

function countLetters (array) {
    for (i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            countLetters(array[i])
        }
        if (typeof array[i] === 'string') {
            if (array[i] in obj) 
            obj[array[i]]++;
            else 
            obj[array[i]] = 1;
        }
    }
    return obj
}

console.log(countLetters(multiDimensionArray))