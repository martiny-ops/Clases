class Restaurante {
    constructor(nombre,categoria, calificacion) {
        this.nombre=nombre;
        this.categoria=categoria;
        this.calificacion=calificacion;
    }

    describir() {
            return `${this.nombre}-${this.categoria} (${this.calificacion})`;
        }
    estaBienCalificado() {
        return this.calificacion>=4.5;
        }
}

const restaurante1 = new Restaurante(`el corral`,`hamburguesas`, 4.6 );
const restaurante2 = new Restaurante(`Dominos`, `pizza`, 4);

console.log(restaurante1.describir());
console.log(restaurante1.estaBienCalificado());

console.log(restaurante2.describir());
console.log(restaurante2.estaBienCalificado());
