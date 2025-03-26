import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor{
    constructor(nombre,personal,bono,sueldo){
        super(nombre,personal,bono);
        this.sueldo = sueldo;
    }
    sueldos(){
        return this.sueldo;
    }
    total(){
        return this.sueldos() + this.bono;
    }
}