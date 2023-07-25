/*  DECORADORES

    Para este ejercicio se activo en tsconfig.json la opción "experimentalDecorators": true.
    Estas fechas, esto ya no es un requisito puesto que los decoradores ya no es una funcionabilidad experimental.

    Los decoradores de clases ya son parte de la vida diaria, incluso en frameworks.
    Los decoradores no son más que funciones, que pueden modificar el comportamiento de clases, propiedades y métodos.
*/

function classDecorator<T extends {new (...args:any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator // El decorador añade una funcionabilidad extra o cambia el comportamiento de clase para que sea algo en particular.
class SuperClass {
    public myProperty: string = 'abc123';

    print() {
        console.log('Hola mundo!');
    }
}

console.log(SuperClass); // Definición de la clase

const myClass = new SuperClass();

console.log(myClass); // Instancia de la clase
