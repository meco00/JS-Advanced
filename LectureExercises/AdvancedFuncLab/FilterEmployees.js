function solve(input,filter) {
    
   const [prop,value]=filter.split('-');

    let counter=0
    let result=JSON.parse(input).filter(i=> i[prop] == value )
    .map(e=>`${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`)
        .forEach(employee => {
            console.log(employee);
        });
}



solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

);