function solve(array){

    let result=[];

    let keys=array[0].split(" | ");

    const Town=keys[0].substring(2,keys[0].length);
    const Latitude=keys[1];
    const Longitude=keys[2].substring(0,keys[2].length-2);

    for(let i=1 ; i<array.length;i++){
     
        const entries=array[i].split(" | ");

        const currentObject={
            Town: entries[0].substring(2,entries[0].length),
            Latitude: Number(Number(entries[1]).toFixed(2)),
            Longitude: Number(Number(entries[2].substring(0,entries[2].length-2)).toFixed(2))
        };

        result.push(currentObject);


    }


    return JSON.stringify(result);

}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));