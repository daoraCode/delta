console.log('test')

const number1 = 60,
      number2 = 15,
      number3 = -5;

let result;

// ADDITION

result = number1 + number2;
console.log(result)
result = number2 - number2;
console.log(result)


let pourcent = 35
const myCart = (20 + 54 + 62 + 5 + 10 + 15 + 100)
let discount = (myCart / 100) * pourcent // 35%
discount = Number(discount).toFixed(2)
result = myCart - discount;

console.log("Prix de total de vos achats: "+ myCart + "€")
console.log("Vous bénéficiez de " + pourcent + "%" +" sur votre comamnde")
console.log(`Prix total après la réduction de ${pourcent}% soit ${discount} en moins sur votre facture`)
console.log(`RESTE A PAYER ${result}€`)

let name = "Severin"
console.log(name)