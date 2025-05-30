let contador = 0;

export const sumar = (elemento) => {
  if (contador >= 10) return;
  
  contador++;
  elemento.textContent = "Contador " + contador;
}

export const restar = (elemento) => {
  if (contador <= 0) return;
  
  contador--;
  elemento.textContent = "Contador " + contador;
}

export const restablecer = (elemento) => {
  contador = 0;
  elemento.textContent = "Contador " + contador;
}