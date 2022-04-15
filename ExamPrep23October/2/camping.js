class SummerCamp
{
   constructor(organizer,location)
   {
       this.organizer=organizer;
       this.location = location;
       this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
       this.listOfParticipants = [];
   }

   registerParticipant (name, condition, money)
   {
       if(this.priceForTheCamp[condition]==undefined)
       {
           throw new Error('Unsuccessful registration at the camp.');
       }

       if(this.listOfParticipants.some(p=> p.name == name))
       {
          return `The ${name} is already registered at the camp.`;
       }

       if(money < this.priceForTheCamp[condition])
       {
         return `The money is not enough to pay the stay at the camp.`;
       }

       this.listOfParticipants.push({
           name,
           condition,
           power: 100,
           wins: 0
       });

       return `The ${name} was successfully registered.`;
   }


   unregisterParticipant (name)
   {
       const participant=this.listOfParticipants.find(p=> p.name == name);

      if( participant == undefined )
      {
         throw new Error(`The ${name} is not registered in the camp.`);
      }

      const indexOfParticipant=this.listOfParticipants.indexOf(participant);

      this.listOfParticipants.splice(indexOfParticipant,1);

      return `The ${name} removed successfully.`;
   }

   timeToPlay (typeOfGame, participant1, participant2)
   {
       const firstParticipant= this.listOfParticipants.find(p=> p.name == participant1);

       if(firstParticipant == undefined)
       {
           throw new Error(`Invalid entered name/s.`);
       }

       if(typeOfGame=='Battleship')
       {

          firstParticipant.power +=20;

          return `The ${participant1} successfully completed the game ${typeOfGame}.`
       }

       const secondParticipant = this.listOfParticipants.find(p=> p.name == participant2);
        
       if(secondParticipant == undefined)
       {
           throw new Error(`Invalid entered name/s.`);
       }

       if(firstParticipant.condition != secondParticipant.condition)
       {
           throw new Error('Choose players with equal condition.');
       }

       const firstParticipantPower=firstParticipant.power;
       const secondParticipantPower=secondParticipant.power;

       if(firstParticipantPower == secondParticipantPower)
       {
           return `There is no winner.`;
       }

       let winnerName='';

       if(firstParticipantPower > secondParticipantPower)
       {
           winnerName=participant1;
           firstParticipant.wins += 1;
       }
       else{
           winnerName=participant2;
           secondParticipant.wins += 1;
       }

       return `The ${winnerName} is winner in the game ${typeOfGame}.`;

   }

   toString()
   {
       let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

       if(this.listOfParticipants.length >0)
       {
           this.listOfParticipants
           .sort((a,b)=> b.wins - a.wins)
           .forEach(p=>{

            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);

           });
       }


       return result.join('\n');


   }






}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

