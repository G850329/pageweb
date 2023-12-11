
let intervalo1;

function PlayVideo(){
    document.getElementById("video1").play();
   
}
intervalo1=setInterval(PlayVideo(),1000);  

let intervalo2;

function PlayMusica(){
   
    document.getElementById("musica1").play();

}
intervalo2=setInterval(PlayMusica(),1000);  



clearInterval(intervalo1);

clearInterval(intervalo2);

function playAmbossonidoyvideo(){
    PlayMusica()
    PlayVideo()

}

intervalo3=setInterval(playAmbossonidoyvideo(),1000); 
clearInterval(intervalo3);

