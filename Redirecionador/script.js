const botao = document.querySelector("#idsobre");
const botaoVoltar = document.querySelector('#botaoVoltar');
const sobre1 = document.querySelector("sobre");


botao.addEventListener("click", function(){
    var sobre = document.getElementById("sobre1")
    sobre.style.display = "flex";
});

botaoVoltar.addEventListener("click", function(){
    var sobre = document.getElementById("sobre1")
    sobre.style.display = "none";
});