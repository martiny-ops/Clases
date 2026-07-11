
class UsuarioNequi {
    constructor(nombre, saldo) {
        this.nombre=nombre;
        this.saldo=saldo;
    }
    enviar(monto){
    if (monto > this.saldo){
        return `Saldo insuficiente`;
    } else {
        this.saldo -= monto;
        return `${this.nombre} envió $${monto}. Nuevo saldo: ${this.saldo}`;
    }
}
}
class ComercioNequi extends UsuarioNequi{
    constructor(nombre,saldo,comision) {
        super(nombre, saldo)
        this.comision=comision;
    }
    enviar(monto){
        let total = (monto * (this.comision / 100)) + monto;
        return super.enviar(total);
    }
}

const usuario1 = new UsuarioNequi(`pepito`, 50000);
console.log(usuario1.enviar(30000));
const comercio1 = new ComercioNequi(`fruver`, 1000000,5);
console.log(comercio1.enviar(30000));
