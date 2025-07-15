let numeroAleatorio = 0;


function comenzarJuego(){
    console.log('Enviado desde la funcion comenzarJugo');
    numeroAleatorio = Math.floor(Math.random() * 10);
    console.log(numeroAleatorio);
}

function recibirNumero(e){
    e.preventDefault();
    console.log(e);
    console.log('Enviado desde la funcion recibirNumero');
    const input = document.querySelector('.form-control');
     numeroRecibido = parseInt (input.value);
     mostrarResultado(numeroAleatorio, numeroRecibido);
     formulario.reset();

     
}

function mostrarResultado(numeroAleatorio, numeroRecibido){
    if(numeroAleatorio === numeroRecibido){
        alert(`Adivinaste el numero! ${numeroRecibido}`);
    }else if(numeroAleatorio > numeroRecibido){
        alert(`El numero ingresado ${numeroRecibido} es menor que el numero generado ${numeroAleatorio}`);
    }else{
        alert(`El numero ingresado ${numeroRecibido} es mayor que el numero generado ${numeroAleatorio}`);
    }
}




const btnComenzar = document.querySelector('.btn-primary');
const formulario = document.querySelector('#formNumero');

btnComenzar.addEventListener('click', comenzarJuego);
formulario.addEventListener('submit', recibirNumero);
