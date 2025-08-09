export const settings = {
    grid: [20, 20],  // Tamaño tablero
    puntos: 0,
    record: 0,
    gameOver: false
};

export const headSnake = {
    x: 9,
    y: 7,
    offSetX: 1,
    offSetY: 0,
    direccion: 'ArrowRight'
};

export const snake = {
    snake: []
};

export const manzana = {
    x: Math.floor(Math.random() * 20) + 1,
    y: Math.floor(Math.random() * 20) + 1
};
