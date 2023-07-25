/*
    Usar el tipo de dato :any, puede ser sumamente peligroso, pues TS deduce que el dev sabe lo que hace.
    Pero la data puede ser manipulada con cualquier método, exista o no. Lo que infiere en un problema de seguridad.

    Incluyendo que el IntelliSense no funcionará correctamente al momento de manipular la variable declarada con la fn():any

    export function whatsMyType(argument: any):any {
        return argument;
    }
*/

export function whatsMyType<T>(argument: T):T { // <T> esto hace que el tipo de dato sea Generico
    return argument;
}

const amIString = whatsMyType<string>('Hola mundo!');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

const amIString2 = whatsMyType<string>(100); // Error de definición de tipo de dato, por ende el metodo .split() no funciona

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
console.log(amIString2.split(' '));


