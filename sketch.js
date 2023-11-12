// bucle, acumulación de dibujos
function setup() {
  createCanvas(500, 500);
  background(255); // el pone el background en el bucle hace qu este no limpie el fondo cada nuevo dibujo
  // aHORA DUBIJAREMOS EL MARCO DE NUESTRO DIBUJO
  noFill(); //relleno
  stroke(0); //color del contorno
  strokeWeight(4); //grosoe del contono
  rect(50, 50, 400, 400);
}

function draw() {
  // vamos a llenar el cuadrado de circulos los cuales se iran posicionandose de manera aleatoria
  //rehacemos parcialmente el ejercicio de la clase anteror
  circle(random(100, 400), random(100, 400), 15); //para el primer parametro en X, pasare un valor aleatorio entre 100 y 300. POR LA PARTE Y PASARE UN VALOR ALEATORIO ENTE 100 Y 300, y para el diametro tendremos un circulo de tamaño relativamente pequeño,
  // el modo ramdom es entre 100 y 400 para no sobrepasar el margen del rectangulo.}

  // funcion que jugara una variables predefinida
  // el siguiente paso sera usar una condicional id donde se indique que atrave de frameCount la cantidad de veces que repetira el dibujo en forma de bucle y que una vez se supere esta cantidad, se detenga el bucle con noLoop
  // sabremos cuantas veces se llamo al bucle
  if (frameCount >= 100) {
    // si los el numero de frames es mayor o igual a 100, se detra el proceso de dibujado
    noLoop();
    // save("random composition.png")
  }
}
