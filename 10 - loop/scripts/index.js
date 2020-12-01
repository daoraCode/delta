console.log('loop')


for (let a = 0; a < 5; a++) {
    console.log(`je suis l'index ${a}`);
}




for (let b = 0; b <= 5; b++) {
    if (b == 2) {
        console.log(`je m'incruste`)
    }
    console.log(`je suis l'index ${b}`)
}


for (let c = 0; c < 10; c++) {
    if (c == 2) {
        console.log(`je m'incruste`)
        break;
    }
}

for (let d = 1; d > 5; d++) {
    if (d % 2 == 0) {
        console.log(`${d} : Pair`)
    } else {
        console.log(`${d} : Impair`)
    }
}






// while
let index = 0
while (index <= 5) {
    console.log(`${index}`)
    index++;
}




// forEach
let array2 = ['pomme', 'cerise', 'poire', 'voiture', 'camion']
array2.forEach(function (item) {
    console.log(`${item}`)
});

let arrayObject5 = [{
    id: 1,
    brand: 'Bentley',
    model: 'Continental GT'
},
{
    id: 2,
    brand: 'Land Rover',
    model: 'Evoque'
},
{
    id: 3,
    brand: 'RollsRoyce',
    model: 'Phantom'
}, 
{
    id: 4,
    brand: 'Range Rover',
    model: "Velar"
}
];

let arrayPane = [];
arrayPane.forEach(function (item) {
    arrayPane.push(item.model)

    console.log(`${item.model}`)
});
console.log(arrayPane)



// map
let getObject = arrayObject5.map(function (item) {
    return item.model
})
console.log(getObject)




// ---
let car = {
    id : 1,
    brand : 'Bentley',
    model : 'continental GT',
    year : 2019,
    doors : 4,
    speed : 'Turbo'
}

for (let key in car) {
    console.log(`${car}`)
    // retournera les clés
    console.log(`${key}`)
    // il me retourne les valeurs
    console.log(`${key} : ${car[key]}`)
}



