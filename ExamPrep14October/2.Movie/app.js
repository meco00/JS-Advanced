class Movie{
    constructor(movieName , ticketPrice )
    {
        this.movieName=movieName;
        this.ticketPrice=Number(ticketPrice);
        this.totalProfit=0;
        this.totalSoldTickets=0;
        this.screenings=[];
    }

    newScreening(date, hall, description)
    {
        if(!this.screenings.some(s=> s.date == date && s.hall==hall))
        {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push({
            date,
            hall,
            description
        });
    }

    endScreening(date, hall, soldTickets) 
    {
        const screening = this.screenings.find(s=>s=> s.date == date && s.hall==hall);

        if(screening==undefined)
        {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const currentProfit=this.ticketPrice * soldTickets;
        this.totalProfit +=  currentProfit;
        this.totalSoldTickets+=soldTickets;

        const screeningIndex=this.screenings.indexOf(screening);

        this.screenings.splice(screeningIndex,1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString()
    {
        let result = [`${this.movieName} full information:`,
                     `Total profit: ${this.totalProfit}$`,
                      `Sold Tickets: ${this.totalSoldTickets}`];

        if(this.screenings.length > 0)
        {
            result.push(`Remaining film screenings:`);
            this.screenings
            .sort((a,b)=> a.hall.localeCompare(b.hall))
            .forEach(s=>{

                result.push(`${s.hall} - ${s.date} - ${s.desrtiption}`);

            })

        }
        else{
            result.push(`No more screenings!`);
        }


        return result.join('\n');
    }
}



let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
