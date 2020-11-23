const iLoveJavaScript = true;

if (iLoveJavaScript) {
    console.log("Alors tu vas progresser très vite")
} else {
    console.log("Alors çva va être compliqué pour toi...")
}

// ----

const theNumber1 = 1000;

if (theNumber1 == 1000) {
    console.log(`TRUE`)
} else {
    console.log(`NON theNumber n'est pas égal a ${theNumber}`)
}

// ----


const theNumber2 = 2000;

if (theNumber2 == 2000) {
    console.log(`TRUE`)
} else {
    console.log(`NON theNumber n'est pas ÉGALE à ${theNumber}`)
}

// ----


const theNumber3 = 3000

if (theNumber3 != 3000) {
    console.log(`OUI theNumber est different`)
} else {
    console.log(`NON theNumber n'est pas DIFFÉRENT`)
}

// ----

const theNumber4 = 1000

if (theNumber4 === "1000") {
    console.log(`OUI, ILS SONT PAREILS`)
} else {
    console.log(`NON, ILS NE SON PAS PAREILS`)
}

// ----

let theNumber5;
// theNumber5 is udefined because it is not initialized
console.log(typeof theNumber5)

if (typeof theNumber5 != 'undefined') {
    console.log(`NON IL N'EST PAS ${theNumber5}`)
} else {
    console.log(`OUI IL EST ${theNumber5}`)
}

// -----

let myBank = 500
let myCart = 100

// (myBank < myCart)
// (myBank <= myCart)
// (myBank > myCart)
// (myBank >= myCart)

if (myBank > myCart) {
    console.log(`Paiement effectué avec succès...`)
} else {
    console.log(`Fond insuffisant`)
}


// ----

let timeIs = 9

if (timeIs >= 0 && timeIs <= 6) {
    console.log(`Il est ${timeIs}h, la formation va commmencer.`)
} else if (timeIs > 6 && timeIs <= 12)  {
    console.log(`Il est ${timeIs}h, c'est encore le matin`)
} else if (timeIs > 12 && timeIs <= 14) {
    console.log(`Il est ${timeIs}h, c'est bientôt l'après-midi`)
} else if (timeIs > 14 && timeIs <= 17) {
    console.log(`Il est ${timeIs}h, c'est l'après-midi`)
} else if (timeIs > 17 && timeIs <= 20) {
    console.log(`Il est ${timeIs}h, bonne soirée`)
} else if (timeIs > 20 && timeIs <= 23) {
    console.log(`Il est ${timeIs}h, bonne nuit`)
} else {
    console.log('Heure Invalide')
}

// ----

let sum = 100
let paymentMethod = 'chèque'

switch (paymentMethod) {
    case 'espece':
        console.log(`Vous souhaitez payer la somme de ${sum}€ en ${paymentMethod}`)
        break;
    case 'chèque':
        console.log(`Vous souhaitez payer la somme de ${sum}€ en ${paymentMethod}`)
        break;
    case 'carte bleue':
        console.log(`Vous souhaitez payer la somme de ${sum}€ en ${paymentMethod}`)
        break;
    default:
        console.log(`Veuillez sélectionner un mode de paiment`)
}


// ----


const myFruitsArray = ['pomme', 'poire', 'abricot', 'fraise', 'kiwi']
let myChoice = 0
let fruit;

switch (myChoice) {
    case 0:
        fruit = `La ${myFruitsArray[0]}`
        break;
    case 0:
        fruit = `La ${myFruitsArray[1]}`
        break;
    case 0:
        fruit = `L'${myFruitsArray[2]}`
        break;
    case 0:
        fruit = `La ${myFruitsArray[3]}`
        break;
    case 0:
        fruit = `Le ${myFruitsArray[4]}`
        break;
}