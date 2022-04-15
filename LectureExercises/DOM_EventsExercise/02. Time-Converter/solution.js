function attachEventsListeners() {

   let ratios= {
       days: 1,
       hours:24,
       minutes:1440,
       seconds:86400
   }

    function convert(value,unit)
    {
       const inDays=value/ratios[unit];

       return {
           days: inDays,
           hours: inDays * ratios.hours,
           minutes: inDays * ratios.minutes,
           seconds: inDays * ratios.seconds
       }

    }

    const mainElement=document.querySelector('main');

    mainElement.addEventListener('click',onClick);

    function onClick(e)
    {
        if(e.target.tagName=='INPUT'&& e.target.type=='button' && e.target.value=='Convert')
        {
           const currentTimeUnit=e.target.parentNode.querySelector('input[type="text"]');

           const getNewTimeUnits=convert(currentTimeUnit.value,currentTimeUnit.id);

            Object.keys(ratios).map(unit=> document.getElementById(unit))
           .forEach((el)=> el.value=getNewTimeUnits[el.id]);
           
        }
    }

}