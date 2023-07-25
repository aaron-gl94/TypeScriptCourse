
/* Variables declaradas con "let"
    let name = 'Aaron';
        name = 123; // Las variables de tipo string no admiten valores numericos.
*/

const name: string = 'Aaron';               // Variable const de tipo string
let hpPoints: number = 95;                  // Variable let de tipo number

let pwPoints: number | string;              // Variable con 2 opciones de tipo de dato.
    pwPoints = 100;
    pwPoints = 'full';
let otherPoints: number | 'full' = 90;      // Variable con 2 opciones de tipo de dato pero restrictivo en una.

const speedPoints:number | null | undefined = 50;

const isAlive: boolean = true;              // Variable const de tipo booleano con asignación de valor directa.

console.log({
    name, hpPoints, pwPoints, otherPoints, isAlive, speedPoints
});

export {}; // Se agrega este import puesto que TS no permite redeclarar un block-scope con la variable "let name". 