class Pelicula {
    constructor(titulo, duracion) {
        this.duracion=duracion;
        this.titulo=titulo;
        this.precioBase=15000;
    }
    precioBoleta() {
        return this.precioBase;
    }
    ficha() {
    return `La pelicula ${this.titulo} dura ${this.duracion} minutos y cuesta$${this.precioBoleta()}`;
    }
}

class PeliculaVIP extends Pelicula{
    constructor(titulo,duracion, incluyeComida) {
        super(titulo,duracion);
        this.incluyeComida=incluyeComida;
    }

    precioBoleta() {
    let total = this.precioBase + 25000;
    if (this.incluyeComida) {
        total=total + 18000;
       }
    return total;
    }
}
const peli = new Pelicula(`ToyStory`, 60);
const pelivip = new PeliculaVIP(`Blanca nieves`, 50, false);
const pelivip2 = new PeliculaVIP(`Rapunzel`, 70, true);
console.log(peli.ficha());
console.log(pelivip.ficha());
console.log(pelivip2.ficha());

