class Vehiculo {
    constructor(placa, pasajeros) {
        this.placa=placa;
        this.pasajeros=pasajeros;
    }
    tarifa() {
        return 2950;
    }
reporte() {
    return `Vehículo ${this.placa} pasajeros: ${this.pasajeros}  tarifa: $${this.tarifa()}`;
    }
}
class Alimentador extends Vehiculo {
    tarifa(){
        return 0;
    }
}
class BusDual extends Vehiculo{
    constructor(placa, pasajeros, esElectrico) {
        super(placa,pasajeros);
        this.esElectrico=esElectrico;
    }

    tarifa(){
        if (this.esElectrico) {
            return 2500;
        } else {
            return 3200;
        }
    }
}
class BusArticulado extends Vehiculo {
    tarifa() {
        return 3500;
    }
}

const articulado1 = new BusArticulado("kñl997", 160);
const vehiculo1 = new Vehiculo(`abc123`,5);
const alimentador1 = new Alimentador("xgt456", 20);
const busDual1 = new BusDual(`htr678`,34, true);
const flota=[vehiculo1,alimentador1,busDual1,articulado1];

for (const auto of flota) {
    console.log(auto.reporte());
}
