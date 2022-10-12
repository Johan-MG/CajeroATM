
var dinero;
const denominaciones = [1000, 500, 200, 100, 50, 20];
var antes, despues;
var aux;
despues = [0,0,0,0,0,0];
var Nsimulacion = 0;
var sinDinero = true;

// Devuelve los valores a su estado inicial
function reiniciar(){
    // El orden de los billetes es: 1000, 500, 200, 100, 50, 20
    dinero = [100, 100, 100, 100, 100, 100];
    Nsimulacion = 0;
    sinDinero = true;
}

reiniciar();

// Función para retirar dinero
function retiro(cantidad){
    // El for realiza una busqueda por cada una de las denominaciones
    
    for(let i = 0; i<6; i++){

        //Si la cantidad solicitada es mayor o igual a una denominacion entonces retira un billete de esa denominación y compara nuevamente
        do {
            if(cantidad>=denominaciones[i]){
                if((cantidad==60 || cantidad == 80) && i==4){
                    break;
                }else{
                    if(dinero[i]>0){
                        dinero[i]--;
                        cantidad -= denominaciones[i];
                    }else{
                        break;
                    }
                }
            }
        } while (cantidad>=denominaciones[i]);

        if(i==5 && cantidad>0){
            console.log("Se me acabó el dinero :(");
            sinDinero = false;
        }
    }
}

// Esta función realiza la operación si cumple las condiciones, de otra manera lanza un mensaje de error
function solicitud(cantidad){
    if(verificacion(cantidad)){
        antes = dinero.slice();
        retiro(cantidad);
    }else{
        console.log("La cantidad ingresada es incorrecta");
    }
}

// Esta función verifica si la cantidad es multiplo de 20
function verificacion(cantidad){
    if(cantidad%20 == 0){
        if(cantidad<0 || cantidad>4000){
            console.log("La cantidad ingresada no se encuentra en el rango");
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function compararBilletes(){
    for(let i=0; i<6; i++){
        despues[i] = antes[i]-dinero[i];
    }
    return despues;
}

function simular(){
    do {
        aux = Math.floor(Math.random() * 200 + 1)*20
        retiro(aux);
        Nsimulacion++;
    } while (sinDinero);
    console.log(aux);
}

/* solicitud(2000);

console.log(denominaciones);
console.log(dinero);
console.log(compararBilletes()); */
simular();
//solicitud(80);
console.log(dinero);
console.log(Nsimulacion);




