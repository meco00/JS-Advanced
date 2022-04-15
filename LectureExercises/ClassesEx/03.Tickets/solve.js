

function solve(array,sortingCriteria)
{
    class Ticket{
        constructor(destination,price,status)
        {
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    const tickets=[];

    array.forEach(element => {
        
        let [destination,price,status]=element.split('|');

        tickets.push(new Ticket(destination,Number(price),status));

    });

    // for (const item of tickets) {

    //     console.log(item[sortingCriteria]);
        
    // }

    const sortings = {

        'price' : (a,b)=> a-b.price,
        'destination': (a,b)=> a[sortingCriteria].localeCompare(b[sortingCriteria]),
        'status': (a,b)=> a[sortingCriteria].localeCompare(b[sortingCriteria])

    };

    const sortFunc=sortings[sortingCriteria];

   return tickets.sort(sortFunc);

}


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'


));