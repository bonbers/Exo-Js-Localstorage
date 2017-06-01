sessionStorage.couleur = "vert";
console.log(sessionStorage.couleur);

var couleur = sessionStorage.getItem("couleur");

document.getElementById('col').innerHTML = couleur;
