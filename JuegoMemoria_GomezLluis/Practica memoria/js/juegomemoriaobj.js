class Tablero {
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        this.pedirDatos();
        this.comprobarPar();
        this.crearTablero();    
        }


    pedirDatos(){
        this.filas = prompt('¿Cuantas filas quiere que tenga el tablero?');
        this.columnas = prompt('¿Cuantas columnas quiere que tenga el tablero?');
    }

    comprobarPar(){
        let impar = true;
        while(impar){
            if ((this.filas * this.columnas) % 2 == 0){
                impar = false;
            } else{
                window.alert("El tablero tiene que ser par")
                this.pedirDatos();
            }
        }
    }

    crearTablero(){
        // Crear array bidimensional para guardar las imagenes
        this.arrayTablero = [];
        for(let fila = 0; fila < this.filas; fila++){
            this.arrayTablero[fila] = [];
            for(let columna = 0; columna < this.columnas; columna++){
                this.arrayTablero[fila][columna] = '';
            }
        }
        
    }


    dibujarTablero(){
        // Creamos el tablero en html
        document.write('<table>');
       
        for(let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for(let j = 0; j < this.columnas; j++){
                document.write(`<td> <img class="img" src="${this.arrayTablero[i][j]}"></td>`);
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }


 

}


//creamos el objeto memoria
class Memoria extends Tablero {
    constructor(filas,columnas){
        super(filas, columnas);
        this.crearParejas();
        this.colocarImagenes(this.arrayparejasDesordenadas);
        this.dibujarTablero();
    }
 
    arrayparejasDesordenadas = [];
    tablero = this.filas * this.columnas;

   

//Creamos la funcion para desordenar parejas
    desordenarParejas(arrayimagenesDesordenadas){

           let imagenesDesordenadas = arrayimagenesDesordenadas;
           return imagenesDesordenadas.sort(function(){return Math.random() - 0.5}); 
    }
    

    //funcion para crear las parejas
    crearParejas(){
        //Declaramos el array de imagenes
         let imagenes = [
            'imagenes/caraSonriente.png',
            'imagenes/emoji2.png',
            'imagenes/emoji3.jpg',
            'imagenes/emoji4.png',
            'imagenes/emoji5.png',
            'imagenes/emoji6.png',
            'imagenes/emoji7.jpg',
            'imagenes/emoji8.png'
        ];
        let imagen = 0;

       imagenes = this.desordenarParejas(imagenes);

//bucle para poner las parejas en el tablero

        while(this.arrayparejasDesordenadas.length < this.tablero){
            //Doble push para formar las parejas
            this.arrayparejasDesordenadas.push(imagenes[imagen]);
            this.arrayparejasDesordenadas.push(imagenes[imagen]);
            imagen++;

            
        }
        imagen = 0;
        
    }

//funcion para recibir las parejas y darles una posicion
    colocarImagenes(parejas){
        let casilla = 0;
        parejas = this.desordenarParejas(parejas);

        
        
        for(let fila = 0; fila <this.filas; fila++){
            for(let columna = 0; columna < this.columnas; columna++){
                this.arrayTablero[fila][columna] = parejas[casilla];
                casilla++;
            }
        }
       

    }

}




let nuevo = new Memoria();