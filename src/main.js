import { sumar, restar, restablecer } from "./acciones";
import "./style.css";

const app = document.querySelector('#app');

const span = document.createElement('span');
span.textContent = "Contador 0";
span.classList.add("contador");

const botonMas = document.createElement('button');
botonMas.textContent = "+";
botonMas.classList.add("boton");

const botonMenos = document.createElement('button');
botonMenos.textContent = "-";
botonMenos.classList.add("boton");

const botonRestablecer = document.createElement('button');
botonRestablecer.textContent = "Restablecer";
botonRestablecer.classList.add("boton");

const div = document.createElement('div');
div.append(botonMas, botonMenos, botonRestablecer)
app.append(span, div);

botonMas.addEventListener('click', () => {
  sumar(span);
});

botonMenos.addEventListener('click', () => {
  restar(span);
});

botonRestablecer.addEventListener('click', () => {
  restablecer(span);
});