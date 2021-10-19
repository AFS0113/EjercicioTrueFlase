class circulo {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.diametro = 70;
        
    }

    show() {
        fill(0,120,0);
        ellipse (this.x, this.y, this.diametro, this.diametro)
    }

    click(mx, my){
        if(dist(mx, my, this.x, this.y) < this.diametro/2){
            return true;
        }
        return false;
    }
}
