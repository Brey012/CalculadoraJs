// funcion metros a kilometros 
function metrosAKm() {
    let metros = prompt("Ingrese los metros  a convertir");
    let km = metros / 1000;
    alert("Los " + metros + " metros son " + km + " kilómetros");
} 

function kmAMillas() {
    let km = prompt("Ingrese los kilómetros a convertir");
    let millas = km * 0.621371;
    alert("Los " + km + " kilómetros son " + millas + " millas");
}

