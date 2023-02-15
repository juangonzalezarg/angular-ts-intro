import { calculaISV, Producto } from './06-desestrucuracion-funcion';

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);