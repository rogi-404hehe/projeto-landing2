var menor = window.document.getElementById("menor")
var leogay = window.document.getElementById("leogay")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var maior = window.document.getElementById("maior")

function RolarParaDireita(){

leogay.style = "display: none"
bruna.style = "display: flex"
menor.style = "display: flex"
maior.style = "display: none"
}

function RolarParaEsquerda(){

    leogay.style = "display: flex"
    bruna.style = "display: none"
    menor.style = "display: none"
    maior.style = "display: flex"

}