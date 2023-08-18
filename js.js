// // Su juego se jugará contra la computadora, así que comience con una función llamada getComputerChoiceque 
// devolverá aleatoriamente 'Piedra', 'Papel' o 'Tijeras'. Usaremos esta función en el juego para hacer que la computadora juegue. 
// Sugerencia: use la consola para asegurarse de que esto devuelva el resultado esperado antes de pasar al siguiente paso.

function getComputerChoice() {
    const elementos = ["piedra", "papel", "tijera"];
    let aleatorio = Math.floor(Math.random() * 3);
    return elementos[aleatorio];
}



function playRound(seleccionComputadora, seleccionJugador) {
    let ganaComputadora = "La computadora ganó la partida";
    let empate = "Sacaron los dos lo mismo";
    let ganaJugador = "El jugador ganó la partida";
    if ((seleccionComputadora == "tijera" && seleccionJugador == "papel") ||
        (seleccionComputadora == "papel" && seleccionJugador == "piedra") ||
        (seleccionComputadora == "piedra" && seleccionJugador == "tijera")) {
        console.log(ganaComputadora);
    } else if (seleccionComputadora == seleccionJugador) {
        console.log(empate);
    } else {
        console.log(ganaJugador);
    }
}
function game() {
    for (i = 0; i < 6; i++) {
        const seleccionComputadora = getComputerChoice();
        const seleccionJugador = getComputerChoice();
        playRound(seleccionComputadora, seleccionJugador);
        console.log(seleccionComputadora);
        console.log(seleccionJugador);

    }
}
game();

