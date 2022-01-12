 export interface Mountain {
    name: string,
    height: number
}

const mountains: Mountain[] = [
    {
        name: 'kilimanjaro',
        height: 19341

    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];

export function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {

        let tallest = Math.max.apply(Math, arrayOfMountains.map(function(o){return o.height}))

        // for (let i: any = 0; i < arrayOfMountains.length; i++) {
        //     if(arrayOfMountains[i].height < arrayOfMountains[i + 1].height){


        //     }
        // }
        const found = arrayOfMountains.find(mountain => mountain.height === tallest )
     
        
        return found?.name || '' 
}

console.log(findNameOfTallestMountain(mountains))
