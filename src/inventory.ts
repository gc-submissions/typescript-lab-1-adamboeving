import { Product } from "./products";

interface InventoryItem {
    product: Product
    quantity: number
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor',
            price: 10.00
            
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
            
        },
        quantity: 4
        
    },

    {
        product: {
            name: 'LED',
            price: 1.00
            
        },
        quantity: 20
    }
]

function calcInventoryValue(arrayOfInventory: InventoryItem[]): number{
    let total = 0;
    for (let i = 0; i < arrayOfInventory.length; i++){
       total += arrayOfInventory[i].product.price * arrayOfInventory[i].quantity 
    } return total;
}
console.log(calcInventoryValue(inventory))