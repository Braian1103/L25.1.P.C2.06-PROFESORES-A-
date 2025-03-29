export default class Cl_profesor {
    constructor(nombre, personal, bono) {
        this.nombre = nombre;
        this.personal = personal;
        this.bono = bono;
    }
    set nombre(n) {
        this._nombre = n
    }
    get nombre() {
        return this._nombre;
    }
    set personal(p) {
        this._personal = p;
    }
    get personal() {
        return this._personal;
    }
    set bono(b) {
        this._bono = b;
    }
    get bono() {
        return this._bono;
    }
    turnos() {
        return this.personal == 1 ? "fijo" : "contratado";
    }
}