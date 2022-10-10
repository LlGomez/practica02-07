prompt("");
prompt("");
prompt("");



let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for(let fila = 0; fila < maxFilas; fila++) {
    arrayTablero[fila] = [];

    for(let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = '';
    }
}

while (contadorMinas < numMinas){
    posFila = Math.floor(Math.random()*maxFilas);
    posColumna = Math.floor(Math.random()*maxColumnas);


    if(arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++
    };

};


console.log(arrayTablero);