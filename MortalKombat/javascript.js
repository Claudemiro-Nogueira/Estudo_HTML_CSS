
var imagem_atual = "https://pbs.twimg.com/media/E-h_65oX0AUY2OW?format=jpg&name=large"
var img_anterior = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mortal-kombat-11/0/00/Sub-Zero.jpg";
var cage = "Jessie Cage"
var sub = "Sub-Zero"
var aux1 
var lista = ["Jessie Cage","Sub-Zero"];
x = cage



function trocar(){
    document.getElementById("imagem").src = img_anterior;
    let aux = imagem_atual;
    imagem_atual = img_anterior;
    img_anterior = aux


    
    if(x == cage){
      let x = document.getElementById("nome");
      x.innerHTML = lista[1]
      console.log("True")
      aux1 = cage
      cage = sub
    }
    else{
      let x = document.getElementById("nome");
      x.innerHTML = lista[0]
      console.log("False")
      cage = aux1
    }
    
   
    
    


}

function trocartexto(){

}
