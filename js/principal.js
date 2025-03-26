/* En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. */ 

import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

let profesor1 = new Cl_fijo("carlos",1,25,100);
let profesor2 = new Cl_fijo("carolina",1,40,90);

let salida = document.getElementById("salida");
salida.innerHTML =`
Nombre del profesor ${profesor1.turnos()}: ${profesor1.nombre}<br>
Monto del bono: $${profesor1.bono}<br>
Monto del sueldo: $${profesor1.sueldos()}<br>
Ingreso total del profesor Carlos: $${profesor1.total()}<p>

Nombre del profesor ${profesor2.turnos()}: ${profesor2.nombre}<br>
Monto del bono: $${profesor2.bono}<br>
Monto del sueldo: $${profesor2.sueldos()}<br>
Ingreso total del profesor Jose: $${profesor2.total()}
`