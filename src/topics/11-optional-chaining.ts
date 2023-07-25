export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Aaron'
}

const passenger2: Passenger = {
    name: 'Brenda',
    children: ['Pato', 'Isela']
}


const printChildren = (passenger: Passenger) => {
    // Optional Chaining
    const howManyChildren = passenger.children?.length || 0;
    
    // Non-null Assertion Operator - Exclusivo de TS, en JS simplemente se omite.
    // const howManyChildren = passenger.children!.length;

    console.log('Passenger:', passenger.name, 'howManyChildren:', howManyChildren);
    return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);
