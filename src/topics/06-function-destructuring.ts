export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'iphone 12',
//     price: 7000.00
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 14999.99
// }

interface TaxCalculationOptions {
    products: Product[]
    tax:number,
}

export function taxCalculation(options: TaxCalculationOptions):[number, number] {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price
    });

    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });

// console.log('Total: ', total.toFixed(2));
// console.log('Tax: ', taxTotal.toFixed(2));