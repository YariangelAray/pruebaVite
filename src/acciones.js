import Swal from 'sweetalert2'
// import 'animate.css';

const mostrarMensajeError = (mensaje) => {
  Swal.fire({
    title: 'Error!',
    // showClass: {
    //   popup: `
    //     animate__animated
    //     animate__fadeInUp
    //     animate__faster
    //   `
    // },
    // hideClass: {
    //   popup: `
    //     animate__animated
    //     animate__fadeOutDown
    //     animate__faster
    //   `
    // },
    text: mensaje,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

let contador = 0;

export const sumar = (elemento) => {
  if (contador >= 10) {
    mostrarMensajeError("No puedes seguir sumando.")
    return;
  }
  contador++;
  elemento.textContent = "Contador " + contador;
}

export const restar = (elemento) => {
  if (contador <= 0) {
    mostrarMensajeError("No puedes seguir restando.")
    return;
  }
  
  contador--;
  elemento.textContent = "Contador " + contador;
}

export const restablecer = (elemento) => {
  contador = 0;
  elemento.textContent = "Contador " + contador;
}