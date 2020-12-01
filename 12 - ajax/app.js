console.log('ajax started');

function getSome() {
    let xhr = new XMLHttpRequest()
    console.log(xhr);

    // create two arguments
    let method = "get";
    let url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open(method, url)
    xhr.onreadystatechange = function () {
        // si ma requête est terminée...
        if (this.readyState === XMLHttpRequest.DONE) {
            // et que mon statut est bien à 200 ('ok')...
            // il faut vérifier dans le network
            if (this.status === 200) {
                // Attention, ici le résultat sera sous forme de string
                // console.log(this.responseText)
                // Afin de le remmette en Array
                console.log(JSON.parse(this.responseText));
            } else {
                console.log(this.status)
                alert('erreur')
            }
        }
    }
    xhr.send()
}
getSome()