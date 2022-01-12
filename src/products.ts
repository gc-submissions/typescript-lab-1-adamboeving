export interface Product {
    name: string,
    price: number
}
const products: Product[] = [
    {
        name: 'fries',
        price: 3
    },
    {
        name: 'burger',
        price: 5,
    },
    {
        name: 'chicken',
        price: 6
    },
];

export function calcAverageProductPrice(arrayOfProducts: Product[]): number {
    let counter = 0;

    for(let i = 0; i < arrayOfProducts.length; i++){
        counter = counter + arrayOfProducts[i].price;
         
        
    }
    return counter / arrayOfProducts.length

}

console.log(calcAverageProductPrice(products))