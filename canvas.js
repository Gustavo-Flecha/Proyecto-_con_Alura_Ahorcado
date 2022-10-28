function dibujarCanvas(){
    tablero.lineWidth = 4;
    tablero.lineCap= "round";
    tablero.lineJoin = "round"
        // Crear gradient
    var grd = tablero.createRadialGradient(200,120,10,620,700,730);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#06132f");

    // Fill with gradient
    tablero.fillStyle = grd;
    tablero.fillRect(0,0,1200,860);
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8A3871";

    
    tablero.beginPath();
    tablero.moveTo(200,350);
    tablero.lineTo(500,350); //Esto es la base del ahorcado
    tablero.stroke();
    tablero.closePath();
}

function dibujarLineas(){
    tablero.lineWidth = 6; //Establece el grosor
    tablero.lineCap= "round";  //Los finales de las líneas son redondeados
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8A3871";
    
    var ancho = 700 /palabrasSecretas.length;
    for (let i = 0;i < palabrasSecretas.length; i++){
        tablero.moveTo(200 + (ancho* i),440)
        tablero.lineTo(240 + (ancho* i),440)
    }
    tablero.stroke();
    tablero.closePath();
}
let ganar = 0;
function escribirLetrasCorrectas(index){
    tablero.font= "bold 60px Arial";
    tablero.lineWidth= 6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle= "green";
    ganar++;
    var ancho = 700 /palabrasSecretas.length;
    tablero.fillText(palabrasSecretas[index],200 + (ancho * index),430);
    if(ganar===palabrasSecretas.length){
        LoLograste();
    }
    tablero.stroke();
    
}
var acumulador =10;
function escribirLetrasIncorrectas(letra){
    tablero.font= "bold 40px Arial";
    tablero.lineWidth= 5;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle= "#f1540b";
    var ancho = 700 /palabrasSecretas.length;
    tablero.fillText (letra,200+(acumulador),480);
    acumulador = acumulador + 60;
    tablero.stroke();
}

function dibujarAhorcado(){
    tablero.lineWidth = 4;
    tablero.lineCap= "round";
    tablero.lineJoin = "round"
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8A3871";
    if(vidas ===7){
    tablero.moveTo(300,350); //(x,y)
    tablero.lineTo(300,20);  //Esto dibuja las maderas
    tablero.lineTo(400,20);
    tablero.lineTo(400,60);
    }
    else if(vidas ===6){
    tablero.moveTo(440,100);
    tablero.arc(400,100,40,0,2*Math.PI); //esto dibuja la cabeza
    }
    else if(vidas ===5){    
    tablero.moveTo(400,140);
    tablero.lineTo(400,250);//Esto dibuja el cuerpo
    }
    else if(vidas ===4){
    tablero.moveTo(400,150);
    tablero.lineTo(340,250);//Esto dibuja los brazos izquierdos
    }
    else if(vidas ===3){
    tablero.moveTo(400,150);
    tablero.lineTo(460,250); //Brazos derechos
    }
    else if(vidas ===2){
    tablero.moveTo(400,250);
    tablero.lineTo(340,340);//Esto dibuja las piernas
    }
    else if(vidas ===1){
    tablero.moveTo(400,250);
    tablero.lineTo(460,340);
    }
}
function GameOver(){
    let despedida="¡Fin del juego!";
    tablero.font= "bold 40px Arial";
    tablero.lineWidth= 4;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle= "red";
    let ancho= 500 /despedida.length;
    tablero.fillText (despedida,200+(acumulador),280);
    acumulador = acumulador + 20;
    tablero.stroke();
}
var acumulador =10;
function LoLograste(){
    let despedida="¡Ganaste!";
    tablero.font= "bold 40px Arial";
    tablero.lineWidth= 4;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle= "green";
    let ancho= 500 /despedida.length;
    tablero.fillText (despedida,200+(acumulador),280);
    acumulador = acumulador + 20;
    tablero.stroke();
}