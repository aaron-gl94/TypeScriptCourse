import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    },

];


const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Subtotal: ', total.toFixed(2));
console.log('Tax: ', taxTotal.toFixed(2));
console.log('Total: ', (total + taxTotal).toFixed(2));


