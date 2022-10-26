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
    
        return arrayTablero;
    }
    
    
    function colocarEmojis (arrayTablero,maxFilas, maxColumnas) {
        let parejas = [
            "imagenes/caraSonriente.png",
            "imagenes/emoji2.png",
            "imagenes/emoji3.png",
            "imagenes/emoji4.png",
            "imagenes/emoji5.png",
            "imagenes/emoji6.png",
            "imagenes/emoji7.png",
            "imagenes/emoji8.png",
            "imagenes/emoji9.png"];
    let numCasillas = maxFilas * maxColumnas;
    let posFila = 0;
    let posColumna = 0;
    let numParejas = 0;
    let contadorArray = 0;
    
        

    return arrayTablero;

}

   
    function pintarTablero(arrayTablero, maxFilas, maxColumnas){
    
        document.write('<table>');
    
        for (let i = 0; i < maxFilas; i++) {
        
            document.write('<tr>');
    
            for (let j = 0; j < maxColumnas; j++) {
            
                document.write('<td><img src=' + arrayTablero[i][j] + '></td>');
            
            }
            document.write('</tr>');
        }
    
        document.write('</table>');
    
    }


AppFuncionando();