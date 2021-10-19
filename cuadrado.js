class cuadrado {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.altura = 70;
        this.ancho = 70;
    }

    show() {
        fill (34,113,179);
        rectMode(CENTER);
        rect (this.x, this.y, this.altura, this.ancho);
    }

    click(mx, my){
        if(mx >= this.x - this.ancho/2 && mx <= this.x + this.ancho/2 && my >= this.y - this.altura/2 && my <= this.y + this.altura/2){
            return true;
        }
        return false;
    }
}
