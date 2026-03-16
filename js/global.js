fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data
    });

// chargement du menu de gauche
fetch("aside.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("aside").innerHTML = data
    });