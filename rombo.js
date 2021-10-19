class rombo {
    constructor(x, y, ancho, altura){
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.ancho = ancho;
    }

    show() {
        fill(128,64,0);
        beginShape();
        vertex(this.x + this.ancho/2, this.y + this.altura);
        vertex(this.x + this.ancho, this.y + this.altura/2);
        vertex(this.x + this.ancho/2, this.y);
        vertex(this.x, this.y + this.altura/2);
        vertex(this.x + this.ancho/2, this.y + this.altura);
        endShape();
    }

    click(mx, my){
        if(mx >= this.x && mx <= this.x + this.ancho && my >= this.y && my <= this.y + this.altura){
            return true;
        }
        return false;
    }
}
