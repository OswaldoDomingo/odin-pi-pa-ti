// La idea básica es que se genere aleatoriamente el resultado
//No he incluido la entrada del jugador por falta de tiempo
//Más adelante la incluiré si puedo

function getComputerChoice() {
    const elementos = ["piedra", "papel", "tijera"];
    let aleatorio = Math.floor(Math.random() * 3);
    return elementos[aleatorio];
}
let computadoraGana = 0;
let jugadorGana = 0;
let empatesTotales = 0;


function playRound(seleccionComputadora, seleccionJugador) {
    let ganaComputadora = "La computadora ganó la partida";
    let empate = "Sacaron los dos lo mismo";
    let ganaJugador = "El jugador ganó la partida";

    if ((seleccionComputadora == "tijera" && seleccionJugador == "papel") ||
        (seleccionComputadora == "papel" && seleccionJugador == "piedra") ||
        (seleccionComputadora == "piedra" && seleccionJugador == "tijera")) {
        console.log(ganaComputadora);
        computadoraGana++;
    } else if (seleccionComputadora == seleccionJugador) {
        console.log(empate);
        empatesTotales++;
    } else {
        console.log(ganaJugador);
        jugadorGana++;
    }
}
function game() {
    let ganadorTotal;
    for (i = 0; i < 5; i++) {
        const seleccionComputadora = getComputerChoice();
        const seleccionJugador = getComputerChoice();
        playRound(seleccionComputadora, seleccionJugador);
        console.log(seleccionComputadora);
        console.log(seleccionJugador);
    }

    if(computadoraGana > jugadorGana){
        ganadorTotal="La computadora ganó la partida"
    } else if(computadoraGana < jugadorGana){
        ganadorTotal="El jugador ganó la partida"
    } else if(computadoraGana == jugadorGana){
        ganadorTotal="Hubo empate"
    } 
    console.log("La computadora ganó " + computadoraGana);
    console.log("El jugador ganó " + jugadorGana);
    console.log("Las veces que empataron " + empatesTotales);
    console.log("El resultado final fué: " + ganadorTotal);
    let mostrar = document.querySelector(".resultados").textContent=ganadorTotal;

}
game();


