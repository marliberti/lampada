document.querySelector("#ligarDesligar").onclick=interruptor;
let lamp=document.querySelector("#lamp")
lamp.value="off"
let acender=document.querySelector("#interruptor")
let body=document.querySelector("body")
function interruptor (){
    if(lamp.value=="off"){
       lamp.src="./fotos/acessa1.png"
       acender.src="./fotos/interruptor2.png"
        body.setAttribute( "style", "background-color: #f5e282")
        lamp.value="on"
      
    }else if(lamp.value=="on"){
        lamp.src="./fotos/desligada1.png"
        acender.src="./fotos/interruptor1.png"
        body.setAttribute("style","background-color: #000")
        lamp.value="off"

    }
}