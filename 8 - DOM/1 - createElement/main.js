// console.log('bonjour')

// Cette action permettre de récupérer ou d'appeler le body afin de le manipuler/le modifier
let body = document.getElementsByTagName('body')[0]
console.log(typeof body)
// le tagname body est de type objet


// De cette manière le prénom créer pour myh2 sera bien un titre h2
let newh2 = document.createElement('h2')
newh2.className = 'myh2'
newh2.innerText = 'Alexandre'


// Cette action permet de créer un élement dans le body provenant du fichier html
let newh1 = document.createElement('h1')
newh1.className = 'myh1'
// ------ au méthode possible -------- //
// l'id est ajouté : class="my1" id="myh1"
newh1.setAttribute('id', 'myh1')
// Je dis que l'élément h1 sera le texte Severin
// De cette manière le prénom créer pour myh1 sera bien un titre h1
newh1.innerText = 'Severin'



body.appendChild(newh1)
// console.log(body)
// console.log(newh1)
// body.removeChild()

body.replaceChild(newh2)