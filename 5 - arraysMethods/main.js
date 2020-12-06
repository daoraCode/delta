console.log('test arrays');

const ArraysNumber = [1, 4, 9, 34, 53, 666, 09, 123, 22, 77]
const ArraysNumber2 = [1, 4, 9, 67, 990, 55, 90, 76, 1, 22, 45]
const newArraysNumber = [100, 200, 300, 400]

const fruitsArray = new Array('pomme', 'abricot', 'fraise', 'raisin', 'banane', 'poire', 'framboise')
const mixedArray = new Array(34, false, null, undefined, {
    firstName: 'Severin',
    lastName:  'Mboukou'
})

console.log(fruitsArray)
console.log(mixedArray)

console.log(ArraysNumber.length)
console.log(ArraysNumber2.length)
console.log(newArraysNumber.length)

// verifier si mon tableau est bien un array
// array function : verify a boolean value if it is an array or not
console.log(Array.isArray(ArraysNumber))
let result = ArraysNumber[3]
console.log(result)
result = newArraysNumber[1]
console.log(result)
result = fruitsArray[6]
console.log(result)
result = mixedArray[4]
console.log(result)
result = mixedArray[4].firstName
console.log(result)

// changer une valeur dans un array
// change a value in array
ArraysNumber[3] = [52]
console.log(ArraysNumber[3])

// la méthode : indexOf fonctionne aussi dans les arrays
result = ArraysNumber.indexOf(345)
console.log(result)
result = newArraysNumber.indexOf(400)
console.log(result)
result = fruitsArray.indexOf('banane')
console.log(result)

// ajout d'un element à la fin d'un tableau
// add an element in the end of an array
fruitsArray.push("je viens m'ajoute à la fin du tableau grâce à la methode : push()")
result = fruitsArray
console.log(result)

// retirer un element a la fin du tableau
// remove a value at the end of the array
fruitsArray.pop()
result = fruitsArray
console.log(result)

// ajout d'element au debut du tableau
// add a value a the start of array
newsArraysNumber.unshift("je me suis ajouté au début du tableau grâce à  la méthode: unshift")
result = newArraysNumber
console.log(result)

// retirer le premier element du tableau
// remove the first value from the array
newsArraysNumber.shift()
result = newArraysNumber
console.log(result)
