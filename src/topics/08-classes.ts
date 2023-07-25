/* Forma no convencional de declarar una Clase
    export class Person {
        public name?: string;
        private address?: string;

        constructor(name: string, address: string){
            this.name = name;
            this.address = address;
        }
    }
*/

// Forma convencional en TS de declarar una clase
export class Person {
    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {}
}

/* Extender una clase a otra
    export class Hero extends Person {
        
        constructor(
            public alterEgo: string,
            public age: number,
            public realName: string
        ) {
            super(realName, 'New York'); // Es una funcion especial que indica a TS que tiene que mandar a llamar el Constructor Padre "Person"
        }
    }
*/


// Priorizar la Composición
export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

const person = new Person('Tony', 'CDMX')
const ironman = new Hero('Ironman', 45, 'Tony Stark', person); // Inyección de Dependencia "Person"

console.log(ironman);
console.log(ironman.name);
console.log(ironman.address); // TS siempre transpila su código a JS, y en JS no hay una propiedad "private" pero ESlint lo marca como error.