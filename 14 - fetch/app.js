console.log('fetch')

// fetch est une fonction promesse, elle fait comme ajax, elle était censée remplacer ajax.
// le principe est le même où on va récupérer des données

function getSome() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let myFile = './myText.txt'
    let myLanguages = './languages.json'
    fetch(myLanguages).then((res) => {

        // NE PAS OUBLIER DE CHANGER LE FORMAT EN FONCTION DU FETCH : .text, .json, 

        return res.json()
        // les données ne seront pas exploitables si elle sont sous forme de texte
        // return res.text()

        // pour pouvoir exploiter les données au formats json il faut faire return res.json(), à ce moment là les données deviendront manipulables
        // return res.json()
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}
// function getSome() {
//     let url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }
getSome()