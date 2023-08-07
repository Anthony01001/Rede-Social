
import { posts } from "./database.js"



function fecharModal(){
const buttonClose = document.querySelector(`.close__button`)
const modal = document.querySelector(`dialog`)
buttonClose.addEventListener("click" , function(){
    modal.close()
})
}

function criarcard(elemento){
const modal = document.querySelector(`dialog`)
const button =   document.createElement(`button`)
const article =   document.createElement(`article`)
const divLista=    document.createElement(`div`)
const imgUsuario=   document.createElement(`img`)
const divUsuarioDados = document.createElement(`div`)
const h2Nome =        document.createElement(`h2`)
const pfuncao = document.createElement(`p`)
const h2Titulo = document.createElement(`h2`)
const pDescricao = document.createElement(`p`)

modal.innerHTML = ""
button.classList.add(`close__button`)
article.classList.add(`article__container`)
divLista.classList.add(`lista__section`)
imgUsuario.classList.add(`usuario__img`)
divUsuarioDados.classList.add(`usuario-dados__container`)
h2Nome.classList.add(`usuario-nome_h2`)
pfuncao.classList.add(`usuario-funcao__p`)
h2Titulo.classList.add(`titulo__h2`)
pDescricao.classList.add(`descricao__p`)

button.innerText = "X"
imgUsuario.src = elemento.img
h2Nome.innerText = elemento.user
pfuncao.innerText = elemento.stack
h2Titulo.innerText = elemento.title
pDescricao.innerText = elemento.text

divLista.append(imgUsuario, divUsuarioDados)
divUsuarioDados.append(h2Nome , pfuncao)
article.append(divLista , h2Titulo , pDescricao)

modal.append(button, article)

return modal.show()
}

function percorrerArray(array){
    const button = document.querySelectorAll(`.abrir-post__button`)
    let sequencia = {}
    
    for(let i = 0; i < button.length; i++){ 
   button[i].addEventListener("click", function(event) {
    button[i].id = i

   for(let posicao = 0; posicao < array.length; posicao++){
    if(event.target.id == array[posicao].id){
    sequencia = array[posicao]
    const armazenar = criarcard(sequencia)
    fecharModal()
    }
        }
            } )
                } 
}

function likes(){
const coracao = document.querySelectorAll(`.coracao__img`)
for(let i = 0; i < coracao.length; i++){

coracao[i].addEventListener("click", function(e){
for(let start = 0; start < contagem.length; start++){
    
console.log(coracao[i].src)
coracao[i].src = "src/assets/img/red-heart.svg"
}
})
}
}

likes()
percorrerArray(posts)
