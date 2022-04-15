function printDeckOfCards(cards) {
    let result;
    try {
        result =  cards.map(c=> {
              let face=c.slice(0,-1);
              let spade=c.slice(-1);
                  try {
                      return createCard(face,spade).toString();
                  } catch (error) {
                      throw new Error(`Invalid card: ${face+spade}`);
                  }}).join(' ');
    } catch (error) {
        result= error.message;
    }

    console.log(result);

        function createCard(face,spade)
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
    
  }


printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['5S', '3D', 'QD', '1C']);
  