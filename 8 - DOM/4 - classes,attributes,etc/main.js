console.log('classes, attributes, etc')

let link = document.querySelector('.link')
console.log(link)

let element;


// permet d'afficher le nom de la classe qui serait incluse dans le body
element = link.className
console.log(element)

// permet d'afficher la liste des classes qui seraient incluses dans le body
element = link.classList
console.log(element)

// permet d'aficher spécifiquement un nom de classe qi jamais il devait y en avoir d'autres dans le body
element = link.classList[1]
console.log(element)

link.classList.add('leslie')
console.log(element)

link.classList.remove('link')
console.log(element)

link.id = 'myNewId'


// link.id = '' attention à ne pas rajouter d'id vide, auquel cas l'id ne représenterait rien : un id sans nom défini
element = link.removeAttribute('id')
console.log(element)
element = link.getAttribute('class')
console.log(element)
element = link.getAttribute('href')
console.log(element)
element = link.setAttribute('href', 'http://www.google.com')
console.log(element)
element = link.setAttribute('target', 'new')
console.log(element)
element = link.setAttribute('target', '_blank')
console.log(element)