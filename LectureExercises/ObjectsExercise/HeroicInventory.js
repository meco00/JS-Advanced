function heroFactory(array){
    
    let heroes=[];

    array.forEach((el) => {
       
        let [name,level,items]=el.split(" / ");
       let currentHero={
           name,
           level: Number(level),
           items: items ? items.split(", "):[]
       }

       heroes.push(currentHero);
        
    });
    return JSON.stringify(heroes);
}

console.log(heroFactory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));