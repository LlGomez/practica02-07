function AppFuncionando() {
    // Se piden los datos al usuario
        let maxFilas = prompt('¿Cuántas filas quieres?');
        let maxColumnas = prompt('¿Cuántas columnas quieres?');
    
        tableroJuego = crearArrayTablero(maxFilas, maxColumnas);
        tableroJuego = colocarEmojis(tableroJuego, maxFilas, maxColumnas);
        tableroJuego = contarEmojis (tableroJuego, maxFilas, maxColumnas)
        pintarTablero(tableroJuego, maxFilas, maxColumnas);
    }
        
    
    
    function crearArrayTablero(maxFilas, maxColumnas) {
    // Crear array bidimensional para guardar los emojis
        let arrayTablero = [];
    
        for (let fila = 0; fila < maxFilas; fila++) {
            arrayTablero[fila] = new Array(maxColumnas);
    
            for (let columna = 0; columna < maxColumnas; columna++) {
                arrayTablero[fila][columna] = '';
            }
        }
    
        return arrayTablero
    }
    /*
    function colocarEmojis (arrayTablero,maxFilas, maxColumnas) {
        let contadorEmojis = 0;
        let posFila;
        let posColumna;
    
    
        while (contadorEmojis < numMinas) {
            posFila = Math.floor(Math.random() * maxFilas);
            posColumna = Math.floor(Math.random() * maxColumnas);
    
            if (arrayTablero[posFila][posColumna] != document.write('&#128512')) {
                arrayTablero[posFila][posColumna] = document.write('&#128512');
                contadorEmojis++;
            };
        };
    
        return arrayTablero
    }
    */

    /*
    function contarEmojis (arrayTablero, maxFilas, maxColumnas) {
        let numMinasAlrededor;
    
        for (let fila = 0; fila < maxFilas; fila++) {
            for (let columna = 0; columna < maxColumnas; columna++) {
                numMinasAlrededor = 0;
                if (arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < maxFilas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < maxColumnas &&
                                    arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        arrayTablero[fila][columna] = numMinasAlrededor;
                    }
                }
            }
        }
        return arrayTablero
    }
    */
   
    function pintarTablero(tablero, filas, columnas) {
    // Creamos el tablero en html
        document.write('<table>');
    
        for (let i = 0; i < filas; i++) {
            document.write('<tr>');
        
            for (let j = 0; j < columnas; j++) {
                document.write(`<td>${tablero[i][j]}</td>`);
            }
        
            document.write('</tr>');
        }
        document.write('</table>');
    
    }
    



    AppFuncionando();