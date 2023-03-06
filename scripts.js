console.log(document.title);
const titulo=document.getElementById('gen-1')
titulo.innerHTML="Generasión 1 Pokimon"
console.log(titulo)

const cambFondo=document.querySelector('.infocard')
cambFondo.style.backgroundColor="blue"

const impUrl=document.location.href
console.log(impUrl)

const impDominio=document.location.host
console.log(impDominio)

const nodosImage=document.querySelectorAll('.infocard-lg-img')
console.log(nodosImage)

const img = document.querySelectorAll('img')
.forEach(img => img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
console.log(img)



