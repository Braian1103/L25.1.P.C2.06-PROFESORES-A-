import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor {
    constructor(nombre, personal, bono, horas) {
        super(nombre, personal, bono);
        this.horas = horas;
    }
    sueldos() {
        return this.horas * 10;
    }
    total() {
        return this.sueldos() + this.bono;
    }
}