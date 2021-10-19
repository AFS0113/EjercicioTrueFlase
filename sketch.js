let x;
let y;
let ancho;
let altura;
let diametro;
let Circulo;
let Cuadrado;
let Rombo;
let Triangulo;
let figuraAtrapada;
let EspacioCirculo;
let EspacioCuadrado;
let EspacioRombo;
let EspacioTriangulo;

function setup() {
  createCanvas(500, 700);
  Circulo = new circulo(170, 600, diametro, diametro);
  Cuadrado = new cuadrado(300, 600, altura, ancho);
  Rombo = new rombo(30, 560, 70, 70);
  Triangulo = new triangulo(380, 560, 70, 70);
  figuraAtrapada = null;
  EspacioCirculo = color(255);
  EspacioCuadrado = color(255);
  EspacioRombo = color(255);
  EspacioTriangulo = color(255);
}

function draw() {
  background(220);

  fill(255, 255, 255);
  rectMode(CORNER);
  fill(EspacioCirculo);
  rect(0, 0, 250, 250);
  fill(EspacioCuadrado);
  rect(250, 0, 250, 250);
  fill(EspacioRombo);
  rect(0, 250, 250, 250);
  fill(EspacioTriangulo);
  rect(250, 250, 250, 250);

  fill(0);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Circulo", 100, 220);
  text("Cuadrado", 360, 220);
  text("Rombo", 100, 470);
  text("Triangulo", 360, 470);

  Circulo.show();
  Cuadrado.show();
  Rombo.show();
  Triangulo.show();
  

  if (figuraAtrapada) {
    if (figuraAtrapada instanceof circulo && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      EspacioCirculo = color(0, 255, 0);
    } else if (!(figuraAtrapada instanceof circulo) && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      EspacioCirculo = color(255, 0, 0)
    }

    if (figuraAtrapada instanceof cuadrado && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      EspacioCuadrado = color(0, 255, 0);
    } else if (!(figuraAtrapada instanceof cuadrado) && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      EspacioCuadrado = color(255, 0, 0)
    }

    if (figuraAtrapada instanceof rombo && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      EspacioRombo = color(0, 255, 0);
    } else if (!(figuraAtrapada instanceof rombo) && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      EspacioRombo = color(255, 0, 0)
    }

    if (figuraAtrapada instanceof triangulo && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      EspacioTriangulo = color(0, 255, 0);
    } else if (!(figuraAtrapada instanceof triangulo) && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      EspacioTriangulo = color(255, 0, 0)
    }
  }
}

function mousePressed() {
  if (Circulo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = Circulo;
  }

  if (Cuadrado.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = Cuadrado;
  }

  if (Rombo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = Rombo;
  }

  if (Triangulo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = Triangulo;
  }
}

function mouseDragged() {
  if (figuraAtrapada != null) {
    figuraAtrapada.x = mouseX;
    figuraAtrapada.y = mouseY;
  }
}

function mouseReleased() {
  if (figuraAtrapada != null) {
    figuraAtrapada = null;
  }
}