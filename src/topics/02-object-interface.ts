//  Nota: const es mas ligero que let por que no tiene metodos de asignación.

let skills = ['Bash', 'Counter', 'healing', true, 123];         // Es un string con formato de arreglo abierto a diferentes tipos de datos.
let skillsString: string[] = ['Bash', 'Counter', 'healing'];    // Es un string con formato de arreglo restrictivo al tipo de dato string.


// Declaración de una interfaz
interface Character {
    name: string;
    hp: Number;
    skills: String[];
    hometown?: String; // Esto es igual a:  ->   hometown: string | undefined; con esto estamos diciendo que la propiedad puede ser opcional
}


// Declaración de un objeto literal con un interfaz
const heroe: Character = {
    name: 'Ironman',
    hp: 100,
    skills: ['Bash', 'Counter']
}

heroe.hometown = 'CDMX';

console.log('- Heroe con interface: ', heroe);
console.table(heroe);
