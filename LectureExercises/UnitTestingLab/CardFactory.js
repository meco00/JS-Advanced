function cardFactory(face,spade)
{
   const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
   
   const spades={
       S: '\u2660',
       H: '\u2665',
       D: '\u2666',
       C: '\u2663'
   };

    if(!faces.includes(face))
    {
       throw new Error('invalid face: '+face);
    }

    return{
        face,
        spade: spades[spade],
        toString()
        {
            return this.face+this.spade.toString();
        }
    }

}

//console.log(cardFactory('A','S').toString());

console.log(cardFactory('1','C').toString());