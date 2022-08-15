// 5. Se da functia:
// function countElementsByLevel(srcDOMElement, childElementName) {
//     // ... implementare aici
// }
//   Sa se implementeze corpul functiei in asa fel incat sa returneze un obiect care va reflecta childElement
//   pe care nivele apare si de cate ori pe fiecare nivel in srcDOMElement?
//   Ex: countElementsByLevel(<div>, "span") o sa imi returneze un obiect care sa reflecte spanul pe care nivele si de
//   cate ori pe nivel apare in div-ul respectiv

let obj = {}
let count = 1

function countElementsByLevel(srcDOMElement, childElementName) {

    children = Array.from(document.querySelector(srcDOMElement).children)


    for (let i = 0; i < children.length; i++) {
            if(children[i].nodeName.toLowerCase() === childElementName.toLowerCase()) {
                if (`Level ${count}` in obj) {
                    obj[`Level ${count}`]++;
                }
                else {
                    obj[`Level ${count}`] = 1;
                }
            } else {
                count++
                countElementsByLevel((`${children[i].nodeName}`), childElementName)
            }
        }
    return obj
}


console.log(countElementsByLevel('#myDiv', 'span'))

