console.log('on working')
// je crée mon élément li
let newElement = document.createElement('li')
// je crée du texte : Coucou, c'est Séverin
let newText = document.createTextNode('Coucou, c\'est Séverin')
// je rajoute mon texte dans la variable newElement qui représente un li
newElement.appendChild(newText)
// je récupère mon parent ul
let ul = document.getElementById('list')
// je sélectionne l'enfant que je souhaite remplacer
let oldElement = ul.children[1]
// ---------// -------> let old Element = document.getElementbyI('list').children[1]
ul.replaceChild(newElement, oldElement)






// ----------------- PARTIE 2 autre façon ------------------ //
let newElement2 = document.createElement('li')
newElement2.textContent = "Me voilà de retour, c'est encore Séverin"
let ul2 = document.getElementById('list2')
let oldElement2 = ul2.children[1]
ul2.replaceChild(newElement2, oldElement2)