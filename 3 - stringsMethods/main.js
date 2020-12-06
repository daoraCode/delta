console.log('test')

const someWords = "Aujourd'hui, j'apprends du Javascript en groupe";

let method;

// Method length
method = someWords.length;
console.log(typeof method)

// Method concat
method = someWords.concat("et", "plus", "encore")
console.log(method)


// exercice
let myArray = ["Bonjour", 26, "j' ", "chez ", "actuellement ", "Javascript ", "aime beaucoup ", "ans ", "Simplon ", "et ", "maintenant.", "content ", "suis ", "j'ai", " "]
let greetings = myArray[0]
let ageNumbeer = myArray[1]
let firstVerb = myArray[2]
let where = myArray[3]
let now = myArray [4]
let language = myArray[5]
let like = myArray[6]
let years = myArray[7]
let formation = myArray[8]
let and = myArray[9]
let when = myArray[10]
let how = myArray[11]
let lastVerb = myArray[12]
let have = myArray[13]
let space = myArray[14]

let message = "";
message = message.concat(greetings, have, space, ageNumbeer, space, years, and, like, language, where, formation, now)
console.log(message)


// Method toToLowerCase and method ToUpperCase with strings
var phrase1 = "HELLO WORD";
var phrase2 = "hello World";
console.log("toLowerCase :",phrase1.toLowerCase())
console.log("toUpperCase :",phrase2.toUpperCase())




var email = "severin@gmail.com"
// console.log(email.indexOf("p"))
// consome.log(email.indexOf("@"))
// dans la variable email, si un index '@' est supérieur ou égal 0, alors affiche la première condition, sinon la condition suivante
if (email.indexOf("@") >= 0) {
    console.log('Adresse e-mail valide')
}else{
    console.log('Adresse e-mail non valide')
}
// prints 'Adresse e-mail valide'


// Function : include : Returns true if searchString appears as a substring of the result of converting this object 
// - to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(email.includes('a'))


// Function substring : Returns the substring at the specified location within a String object.
let recup = someWords.substring(10, 15)
console.log(recup)
recup = someWords.substring(0, someWords.length)
console.log(recup)

// Function slice : Returns a section of a string
console.log(someWords.slice(10, 23))

// Function : Split a string into substrings using the specified separator and return them as an array.
let takeIt = someWords.split(" ")
console.log(takeIt)

// This function allows you to replace any String to another one : replace(parameter1, parameter2);
// Cette fonction permet de remplacer n'importe quelle chaîne de caractères en une autre (paramètre à changer, paramètre à placer)
let changeIt = someWords.replace("Aujourd'hui", "Demain")
console.log(changeIt)