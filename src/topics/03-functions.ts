function addNumbers(a: number, b: number) {
    //  Toda función retorna "undefined", si existe un return.
    //  Toda función retorna "void", si es que explicitamente no hay un return.
    return a + b;
}
 // TS deduce que result es igual de tipo number por que recibe el dato de la fn addNumber() 
const result = addNumbers(1, 2);

// El result es impreso como objeto para poder ver en la consola { result: 3 }
console.log({ result });
console.log(result); // Solo imprime el 3

// Arrow o lambda functions
const addNumbersArrow = (a: number, b: number): string => {
    // La firma de la función debe ser definida, ejemplo:  const fn = ():Any => {}
    return `${ a + b }`; // template string
}

const result2 = addNumbersArrow(1, 2);
console.log(result2, { result2 });


function multiply(firstNum: number, secondNum?: number, base: number = 2) {
    return firstNum * base
}
const multiplyResult = multiply(5);
console.log(multiplyResult, {multiplyResult});



// Funciones con Objetos como parametros

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    if (character.hp < 100) {
        character.hp += amount;
    } else {
        return '- El personaje ya cuenta con el nivel max de salud...'
    }
}

const ironman: Character =  {
    name: 'Ironman',
    hp: 50,
    showHp() {
        console.log(`- Puntos de vida: ${this.hp}`);
    }
}

healCharacter(ironman, 10);
healCharacter(ironman, 30);

healCharacter(ironman, 100);



ironman.showHp();


export {};