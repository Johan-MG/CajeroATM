
var dinero;
const denominaciones = [1000, 500, 200, 100, 50, 20];
var antes, despues;
var aux;
despues = [0,0,0,0,0,0];
var Nsimulacion = 0;
var sinDinero = true;

const Billetes1000 = document.getElementById("Billetes1000");
const Billetes500 = document.getElementById("Billetes500");
const Billetes200 = document.getElementById("Billetes200");
const Billetes100 = document.getElementById("Billetes100");
const Billetes50 = document.getElementById("Billetes50");
const Billetes20 = document.getElementById("Billetes20");
const Simulaciones = document.getElementById("Simulaciones");
const texto = document.getElementById("texto");
const btnRetirar = document.getElementById("btnRetirar");
const monto = document.getElementById("monto");

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
    Nsimulacion++;
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
            texto.innerHTML = "Se me acabó el dinero :(";
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
        compararBilletes();
    }else{
        texto.innerHTML = "La cantidad ingresada es incorrecta";
        console.log("La cantidad ingresada es incorrecta");
    }
}

// Esta función verifica si la cantidad es multiplo de 20
function verificacion(cantidad){
    if(cantidad%20 == 0){
        if(cantidad<=0 || cantidad>4000){
            texto.innerHTML = "La cantidad ingresada no se encuentra en el rango";
            console.log("La cantidad ingresada no se encuentra en el rango");
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function compararBilletes(){
    texto.innerHTML = "Dinero retirado\n";
    for(let i=0; i<6; i++){
        despues[i] = antes[i]-dinero[i];
        if(despues[i]>0){
            texto.innerHTML += `Billetes de ${denominaciones[i]}: ${despues[i]} \n`;
        }
    }
    return despues;
}

function simular(){
    reiniciar();
    do {
        aux = Math.floor(Math.random() * 200 + 1)*20
        retiro(aux);
    } while (sinDinero);
    actualizarDisplay();
    console.log(Nsimulacion);
}

function actualizarDisplay(){
    Billetes1000.innerHTML = "Billetes 1000: "+dinero[0];
    Billetes500.innerHTML = "Billetes 500: "+dinero[1];
    Billetes200.innerHTML = "Billetes 200: "+dinero[2];
    Billetes100.innerHTML = "Billetes 100: "+dinero[3];
    Billetes50.innerHTML = "Billetes 50: "+dinero[4];
    Billetes20.innerHTML = "Billetes 20: "+dinero[5];
    Simulaciones.innerHTML = "Numero de simulaciones: "+Nsimulacion;
}
actualizarDisplay();

btnRetirar.addEventListener("click", function(){
    solicitud(monto.value);
    console.log("si funciono xd");
    console.log(monto.value);
    actualizarDisplay();
});
/* solicitud(2000);

console.log(denominaciones);
console.log(dinero);
console.log(compararBilletes()); */
//simular();
//solicitud(80);
console.log(dinero);
console.log(Nsimulacion);




