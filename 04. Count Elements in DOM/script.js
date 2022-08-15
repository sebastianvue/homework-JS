// 4. Se da functia:
// function countElementsInDocument(document, elementName){
//     // ... implementarea aici
// }
//   Sa se implementeze corpul functie in asa fel incat sa returneze numarul total de elemente din
//   DOM care corespund cu elementName.
//   Ex: countElementsInDocument(document, "span") va returna cate spanuri contine documentul HTML

function countElementsInDocument(document, elementName){
    return document.getElementsByTagName(`${elementName}`).length
}

console.log(countElementsInDocument(document, "span"))