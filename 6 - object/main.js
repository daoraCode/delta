console.log('object test')


let person = {
    firstName: 'Severin',
    lastName: 'Mboukou',
    age: 26,
    email: 'sm@gmail.com',
    hobbies: ['Family', 'Cinema', 'Coding', 'Travel'],
    adress: {
        city: 'Stains',
        state: 'Paris', 
    }
}


let val;
val = person.firstName
console.log(val)
val = person.lastName
console.log(val)
val = person.age
console.log(val)
val = person.email
console.log(val)
val = person.adress
console.log(val)
val = person['firstName']
console.log(val)


let myClass = [{
    name: 'Gwel',
    age: 25
},
{
    name: 'Lucas',
    age: 16
},
{
    name: 'Jackson',
    age: 39
},
{
    name: 'Nat',
    age: 26
},
{
    name: 'Yassine',
    age: 7   
},
]

for (let i = 0; i < myClass.length; i++) {
    console.log(myClass[i].name + " " + myClass[i].age)
}