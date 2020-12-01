function loadPosts() {
    var xhr = new XMLHttpRequest()
    let method = "GET";
    let url = './languages.json';
    xhr.open(method, url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('result').innerHTML = `<h1>${this.responseText}<h1>`
            console.log(JSON.parse(this.responseText));
        }
    }
    xhr.send();
}
loadPosts()