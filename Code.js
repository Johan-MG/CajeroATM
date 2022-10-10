
var dinero;
const denominaciones = [1000, 500, 200, 100, 50, 20];

// Devuelve los valores a su estado inicial
function reiniciar(){
    // El orden de los billetes es: 1000, 500, 200, 100, 50, 20
    dinero = [100, 100, 100, 100, 100, 100];
}

reiniciar();

// Función para retirar dinero
function retiro(cantidad){
    // El for realiza una busqueda por cada una de las denominaciones
    for(let i = 0; i<6; i++){
        //Si la cantidad solicitada es mayor o igual a una denominacion entonces retira un billete de esa denominación y compara nuevamente
        do {
            if(cantidad>=denominaciones[i]){
                if(dinero[i]>0){
                    dinero[i]--;
                    cantidad -= denominaciones[i];
                }else{
                    break;
                }
            }
        } while (cantidad>=denominaciones[i]);

        if(i==5 && cantidad>0){
            console.log("Se me acabó el dinero :(");
        }
    }
}

// Esta función realiza la operación si cumple las condiciones, de otra manera lanza un mensaje de error
function solicitud(cantidad){
    if(verificacion(cantidad)){
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

solicitud(6000);

console.log(denominaciones);
console.log(dinero);



