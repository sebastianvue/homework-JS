// 2. Se da un array multi dimensional oarecare ex: [1, "A", "B", ["C", 2, [...] ..]]
//    Se da functia:
// function countLetters(multiDimensionArray) {
//     //... implementarea vine aici cu functii predefinite pe arrays filter, find, foreach whatever etc la libera alegere
// }
//    Sa se implementeze corpul functiei de mai sus (folosind metodele predifinite pe array-urile din JS) in asa fel
//    incat sa returneze un obiect de JS care va contine fiecare litera de cate ori apare in array-ul de intrare.
//    Ex: { A: 3, B: 2, ... , T: 1 ... }. Litere care nu apar, se ignora in rezultat.

let multiDimensionArray = [1, 'A', 'C', 'D', ['B', 2, 'C', ['B', 3, 'C', ['E', 4, 'Z']]]]

let obj = {}

function countLetters (array) {
    array.map(element => {
        if (Array.isArray(element)) {
            countLetters(element)
        }
        if (typeof element === 'string') {
            if (element in obj) 
            obj[element]++;
            else 
            obj[element] = 1;
        }
    })
    return obj
}

console.log(countLetters(multiDimensionArray))