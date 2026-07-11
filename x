
class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo   = saldo;
  }

  consignar(monto) {
    this.saldo += monto;
    return this.titular + " consignó $" + monto + ". Saldo: $" + this.saldo;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }
    this.saldo -= monto;
    return this.titular + " retiró $" + monto + ". Saldo: $" + this.saldo;
  }
}

// let c1 = new CuentaBancaria("Ana", 100000);
// let c2 = new CuentaBancaria("Carlos", 200000);


// console.log(c1.retirar(30000));  // "Ana retiró $30000. Saldo: $70000"
// console.log(c2.retirar(500000)); // "Fondos insuficientes"
// console.log(c1.saldo);           // 70000 — c1 no cambió por lo de c2



//! esta es la clase hija
class CuentaAhorros extends CuentaBancaria {
  constructor(titular, saldo, tasaInteres) {
    super(titular, saldo);          // llama al constructor de CuentaBancaria
    this.tasaInteres = tasaInteres; // propiedad propia de ahorros
  }

  calcularRendimiento() {
    let rendimiento = this.saldo * (this.tasaInteres / 100);
    return this.titular + " gana $" + rendimiento + " de interés.";
  }
}

let ahorro = new CuentaAhorros("Laura", 1000000, 5);

// Heredados de CuentaBancaria — no los redefinimos
console.log(ahorro.consignar(200000)); // "Laura consignó $200000. Saldo: $1200000"
console.log(ahorro.retirar(100000));   // "Laura retiró $100000. Saldo: $1100000"

// Propio de CuentaAhorros
console.log(ahorro.calcularRendimiento()); // "Laura gana $55000 de interés."


class CuentaAhorros extends CuentaBancaria {
  constructor(titular, saldo, tasaInteres) {
    super(titular, saldo);
    this.tasaInteres = tasaInteres;
  }
//! sobreescritura
  retirar(monto) {
    if (this.saldo - monto < 50000) {
      return "No puedes dejar la cuenta con menos de $50000";
    }
    return super.retirar(monto); // reusa la lógica del padre
  }

  calcularRendimiento() {
    let rendimiento = this.saldo * (this.tasaInteres / 100);
    return this.titular + " gana $" + rendimiento + " de interés.";
  }
}

let ahorro = new CuentaAhorros("Laura", 100000, 5);
console.log(ahorro.retirar(60000)); // "No puedes dejar la cuenta con menos de $50000"

let c1 = new CuentaBancaria("Ana", 100000);
console.log(c1.retirar(60000));     // sí deja — la cuenta normal no tiene esa regla













