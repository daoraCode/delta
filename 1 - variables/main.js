console.log('test')

// var a = "severin"
// console.log(a)
// a = "antony"
// console.log(a)

// // let
// let b = "leslie"
// console.log(b)
// b = "robinson"
// console.log(b)


// la valeur assignée ne changera pas car c'est une constante, c'est pourquoi il affiche une erreur
// const c = "william"
// console.log(c)
// c = "leslie"
// console.log(c)


// const myArray = [1, 2, 3]
// myArray = [1, 2, 3]
// myArray.push(4)
// console.log(myArray)



// les cinq types de données à connaître absolument en javascript
// boolean
// null
// undefined
// number
// string
// NAN (not a number)



// let prenom = 'Severin';
// console.log(prenom)
// let age = 26;
// console.log(age)
// let iDontKnow;
// console.log(iDontKnow)
// let bool = true;
// console.log(typeof bool)
// let notANumber = 7 * 'davidson';
// console.log(typeof notANumber)




// var array = ['severin', 'moi', 'lui', 'eux']
// console.log(array)
// console.log(typeof array)



// let object = {
//     firstName: 'Alice',
//     age: 26,
// }

// reconnaître un objet
// let myObject = {}
// reconnaître un array (on parle aussi de tableau)
// let myArray = []

// console.log(object.firstName)
// console.log(object.age)

console.log('----------------------')

// string, number , bool, objet= tableau de string

var object = {
    age: 25, // number
    name: 'Alexandre', // string
    majority: true, // bool

    // table
    otherObject : {
        job: "Web Developer",
        children: ['Paul', 'Sophie', 'Marie', 222, 67, 'Valence']
    }  
};

// console.log(object.age)
// console.log(object.name)
// console.log(object.majority)


// console.log(object.otherObject.children)



console.log (`
mon object : ${object.name}
mon object : ${object.age}
mon object : ${object.majority}
mon object : ${object.otherObject.job}
mon object : ${object.otherObject.children}
mon object : ${object.otherObject.children[0]}
mon object : ${object.otherObject.children[1]}
mon object : ${object.otherObject.children[2]}
mon object : ${object.otherObject.children[3]}
mon object : ${object.otherObject.children[4]}
mon object : ${object.otherObject.children[5]}
`)










