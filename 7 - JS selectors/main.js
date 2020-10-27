"use strict";
//console log window


// selecteur javascript par valeur d'attribut id
// document.getElementById
let test = document.getElementById("test")
console.log(test)

// selecteur javascript de type balise HTML
// Element.getElementByTagName

let mesh2 = document.getElementsByTagName("h2")
console.log(mesh2)
console.log(mesh2[0])
console.log(mesh2[1])
console.log(mesh2[2])

let test2 = test.getElementsByTagName("h2")
console.log(test2)

let nameAttribute = document.getElementsByName("sebastien")
console.log(nameAttribute)
console.log(nameAttribute[1].innerHTML)
console.log(nameAttribute[1].innerText)

// autre maniere d'acceder à un element du body ou document, la méthode affichera toute la ligne du body HTML
let coucou = document.querySelector("body>#test>#coucou")
console.log(coucou)

// accès à la ligne 13
let coucou2 = document.querySelector("h2")
console.log(coucou2)

// accès à la ligne 23 
let coucou3 = document.querySelector(".container")
console.log(coucou3)

// accès à toutes les valeurs équivalentes à h2
let coucou4 = document.querySelectorAll("h2")
console.log(coucou4)

let coucou5 = document.getElementsByClassName("myClass")
console.log(coucou5)

console.log("----------------SUITE")

let header = document.getElementsByTagName("header")

let elements = header
console.log(elements)

elements = header[0]
console.log(elements)

elements = header[0].children[0]
console.log(elements)

elements = header[0].lastElementChild
console.log(elements)


elements = header[0].firstElementChild
console.log(elements)

elements = header[0].childElementCount
console.log(elements)

elements = header[0].parentNode
console.log(elements)

elements = header[0].parentNode.parentNode
console.log(elements)