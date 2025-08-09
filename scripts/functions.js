import { settings, headSnake, snake, manzana } from "./constants.js";

export function creaNuevoSegmento(tipoElemento, attr, nombreAttr, newPos) {
  let nuevoSegmento = document.createElement(tipoElemento);
  nuevoSegmento.setAttribute(attr, nombreAttr);
  nuevoSegmento.style.gridArea = newPos;
  board.appendChild(nuevoSegmento);
  snake.snake.push(nuevoSegmento);
}

export function checkAutoColision() {
  for (let i = 1; i < snake.snake.length; i++) {
    if (snake.snake[i].style.gridArea === snake.snake[0].style.gridArea) {
      return true;
    }
  }
  return false;
}

export function reJugar() {
  snake.snake.forEach((segmento, index) => {
    if (index !== 0 && segmento.parentNode) {
      segmento.parentNode.removeChild(segmento);
    }
  });

  snake.snake = [document.getElementById("snake")];

  settings.puntos = 0;
  settings.gameOver = false;

  headSnake.x = 9;
  headSnake.y = 7;
  headSnake.offSetX = 1;
  headSnake.offSetY = 0;
  headSnake.direccion = "ArrowRight";

  snake.snake[0].style.gridArea = `${headSnake.y}/${headSnake.x}`;

  manzana.x = Math.floor(Math.random() * settings.grid[0]) + 1;
  manzana.y = Math.floor(Math.random() * settings.grid[1]) + 1;
  manzanaDom.style.gridArea = `${manzana.y}/${manzana.x}`;

  board.style.display = "grid";
  mostrarGameOver.style.display = "none";

  mostrarPtos.innerHTML = `${settings.puntos.toString().padStart(3, "0")}`;
  mostrarHi.innerHTML = `High:${(settings.record || 0)
    .toString()
    .padStart(2, "0")}`;
}
