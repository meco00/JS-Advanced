function solve(){

    let object={};

    const canCast= (state)=> ({

        cast: (spell) => {
            state.mana--;
            console.log(`${state.name} cast ${spell}`);
              }

    });

    const canFight= (state)=> ({

        fight: () => {
            state.stamina--;
             console.log(`${state.name} slashes at the foe!`);
              }

    });

    const fighter= (name)=>{
       let state=
       { name,
        health: 100,
        stamina:100,
       };

       return Object.assign(state,canFight(state));
        
    };
     
    const mage= (name)=>{
        let state=
        { name,
         health: 100,
         mana:100,
        };
 
        return Object.assign(state,canCast(state));
         
     };


    

    return {mage: mage,fighter: fighter};



    // return{
    //  mage(name){
    //        return{
    //                name,
    //                health: 100,
    //                mana:100,
    //               cast(spell){
    //                         this.mana--;
    //                         console.log(`${this.name} cast ${spell}`);
    //                           }
    //       }  

    //     },
    //     fighter(name){
    //         return{
    //              name,
    //              health: 100,
    //              stamina:100,
    //              fight(){
    //                  this.stamina--;
    //                  console.log(`${this.name} slashes at the foe!`);
    //              }

    //         }

    //     }
    // }




}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
