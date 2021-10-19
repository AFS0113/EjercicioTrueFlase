class triangulo {
    constructor(x, y, ancho, altura){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.altura = altura;
    }

    show() {
        fill(247,191,190);
        triangle(this.x, this.y + this.altura, this.x + this.ancho/2, this.y, this.x + this.ancho, this.y + this.altura)
    }

    click(mx, my){
        if(mx >= this.x && mx <= this.x + this.ancho && my >= this.y && my <= this.y + this.altura){
            return true;
        }
        return false;
    }
}
