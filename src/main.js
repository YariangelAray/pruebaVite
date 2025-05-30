import { sumar, restar, restablecer } from "./acciones";
import "./style.css";
import 'sweetalert2/src/sweetalert2.scss'

const app = document.querySelector('#app');

const span = document.createElement('span');
span.textContent = "Contador 0";
span.classList.add("contador");

const botonMas = document.createElement('button');
botonMas.textContent = "+";
botonMas.classList.add("boton");
botonMas.classList.add("mas");

const botonMenos = document.createElement('button');
botonMenos.textContent = "-";
botonMenos.classList.add("boton");
botonMenos.classList.add("menos");

const botonRestablecer = document.createElement('button');
botonRestablecer.textContent = "Restablecer";
botonRestablecer.classList.add("boton");
botonRestablecer.classList.add("restaurar");

const div = document.createElement('div');
div.append(botonMas, botonMenos, botonRestablecer)
app.append(span, div);


document.addEventListener('click', (event) => {
  if (event.target.closest('.mas')) {
    sumar(span);
  }
  if (event.target.closest('.menos')) {
    restar(span);
  }
  if (event.target.closest('.restaurar')) {
    restablecer(span);
  }
})
