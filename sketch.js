// bucle, acumulación de dibujos
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0); // el pone el background en el bucle hace qu este no limpie el fondo cada nuevo dibujo

  noStroke(); //sin contorno
  fill(255); //relleno blanco

  //la estructura del bucle nos permitica indicar que vamos a repetir una instruccion, en este caso el circula que se dibuja 5 veces.
  //cuenta con 3 bloques for (bloque 1; bloque 2; bloque 3)
  // bloque 1: la primera es una variable "let i" por index, que inicializamos en 0.
  //Cuando p5 encuentra esta linea, inmediatamente mirara el primer bloque (donde se declaro la variable i), y declarara una variable temporal que solo existe dentro de este ciclo.
  // bloqeu 2: sera lo que se llama condición de salida, es decir bajo que condición dajeremos de ejecutar este bloque de código.
  // La condicion a invalidar toma la forma de una comparación, donde comparamos "i" con el numero de veces que queremos ejecutar este ciclo. ejem: i<5, ya que queremos dibujar 5 circulos.
  // bloque 3: al cual llamaremos fase de actualización, esto una ves el codigo a sido ejecutado, el bloque de codigo aqui "que puede estar compuesto por varias lineas, ha sido ejecutado" procede a la actualizacion i=i+1, significa que asignamos al valor i el resultado de la operación i+1. Entonces, si i es 0, seré 1 como resultado de esta operacion, el numero se incrementa de manera sucesiva asta llegar al numero 5.

  // dentro de las llaves unicamente calculamos el valor de posicon en x del ciculo que estamos dubujando.

  for (let i = 0; i < 5; i = i + 1) {
    circle(50 + i * 100, 250, 100); //posicion 50x,250y__diametro,100
  }
}
