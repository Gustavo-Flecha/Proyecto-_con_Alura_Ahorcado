var palabrass= ["ORACLE","STUDIO","FUNCTION","COMPUTADORAS","LATINOAMERICA"];
var tablero= document.getElementById("orca").getContext("2d");
var palabrasSecretas="";
var letra =[];
var vidas = 8;
//PalabrasSecretas
function escojerPalabrasSecretas(){
    palabrasSecretas = palabrass[Math.floor(Math.random() * palabrass.length)]
    console.log(palabrasSecretas);
}

function comprobarLetra(key){
    let estado = false;
    if ( key >=48 && letra.indexOf(key) || key <=57 && letra.indexOf(key))
    {
        alert("Debe utilizar letras para completar (para salir presione 'enter')");
    }

    if ( key >=65 && letra.indexOf(key) || key <=90 && letra.indexOf(key)){
        letra.push(key);
        console.log(key);
    }else {
        estado=true;
        console.log(key);
        return estado;
    }
}
function quitarVidas(){
    dibujarAhorcado();
    vidas--;
    if (vidas < 0) {
    GameOver(); 
    }
    console.log(vidas);
}
    //Inicia el juego
    function iniciarJuego(){
        document.getElementById("iniciar-juego").style.display="none";

       escojerPalabrasSecretas();//llamar a la función anterior
       dibujarCanvas();
       dibujarLineas(); 

    document.onkeydown= (e) =>{
        let letra = e.key.toUpperCase();

        if (comprobarLetra(letra) && palabrasSecretas.includes(letra)){
            for(let i=0; i<palabrasSecretas.length; i++){ //Este for recorre toda la palabra
                // en busca de una o más letras acertadas
                if(palabrasSecretas[i] ===letra){//Si existe una cohincidencia 
                    //llama a la función para que dibuje 
                escribirLetrasCorrectas(i);
                }
            }
        } else {
            quitarVidas(letra);
            escribirLetrasIncorrectas(letra,vidas);
        }
    }
}
