function FruitPriceCalculator(fruit,weight,price){

let fruitPrice=weight/1000*price;

console.log(`I need $${fruitPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

FruitPriceCalculator('orange', 2500, 1.80);
FruitPriceCalculator('apple', 1563, 2.35);


function GCD(firstNumber,secondNumber)
{
    while(firstNumber!=secondNumber)
    {
        if(firstNumber>secondNumber)
        {
          firstNumber-=secondNumber
        }
        else{
          secondNumber-=firstNumber
        }
    }
   console.log(firstNumber);
}

GCD(15,5);

GCD(2154, 458);


function SameNumbers(number)
{
    let numbersToCheck=number.toString();

    let sum=0;

    let isSameNumbers=true;

    for(let i=0;i<numbersToCheck.length;i++)
    {
       let currentNumber=Number(numbersToCheck[i]);
       
       sum+=currentNumber;

       if(i==0){
           continue;
       }

       let previousNumber=Number(numbersToCheck[i-1]);

       if(currentNumber!=previousNumber)
       {
           isSameNumbers=false;
       }

    }

    console.log(isSameNumbers);
    console.log(sum);

}


SameNumbers(2222222);
SameNumbers(1234);


function GetPreviousDay(year,month,day)
{
    // const date=new Date(year,month,day);
    // const resultDate=new Date();
    // const millisecs=1000*60*60*24;
    // resultDate.setTime(date.getTime()-millisecs);


    // date.setDate(date.getDate()-1);

    // console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)

    let dateString=year+'-'+month+'-'+day;

    let event=new Date(dateString);

    event.setDate(day-1);

    console.log(`${event.getFullYear()}-${(Number(event.getMonth())+1)}-${event.getDate()}`)

}

GetPreviousDay(2016, 9, 30);
GetPreviousDay(2016, 10, 1);


function TimeToWalk(arg1,arg2,arg3)
{
    let studentSteps=Number(arg1);
    let studentsFootprintForMeter=Number(arg2);
    let studentSpeedKm=Number(arg3);

    let totalMetersWalked=studentSteps*studentsFootprintForMeter;
    let speedMetersSec=studentSpeedKm/3.6;
    let time = totalMetersWalked / speedMetersSec;

  let rest = Math.floor(totalMetersWalked / 500);



  let timeMin = Math.floor(time / 60);

  let timeSec = Math.round(time - (timeMin * 60));

  let timeHr = Math.floor(time / 3600);

   console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);


}

TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);

function RoadRadar(speed,zone)
{
    let motorwayLimit=130;
    let interstateLimit=90;
    let cityLimit=50;
    let residentialLimit=20;

    let difference=0;
    let zoneLimit=0;
    switch(zone)
    {
        case 'motorway':
            difference=speed-motorwayLimit;
            zoneLimit=motorwayLimit;
            break;
        case 'interstate':
                difference=speed-interstateLimit;
                zoneLimit=interstateLimit;
                break;
        case 'city':
             difference=speed-cityLimit;
             zoneLimit=cityLimit;
             break;
        case 'residential':
                 difference=speed-residentialLimit;
                 zoneLimit=residentialLimit;
                 break;
    }

    let status;
    if(difference<=20)
    {
      status='speeding';
    }
    else if(difference<=40)
    { 
      status='excessive speeding';
    }
    else if(difference>40)
    {
        status='reckless driving';
    }
    
    if(difference<=0)
    {
        console.log(`Driving ${speed} km/h in a ${zoneLimit} zone`);
    }
    else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zoneLimit} - ${status}`);
    }

}

RoadRadar(40, 'city');
RoadRadar(21, 'residential');
RoadRadar(120, 'interstate');
RoadRadar(200, 'motorway');

function CookingByNumbers(number,firstOperation,secondOperation,thirdOperation,fourthOperation,fifthOperation)
{
    let allOperations=[firstOperation,secondOperation,thirdOperation,fourthOperation,fifthOperation];

    for(let i=0;i<allOperations.length;i++)
    {
       switch(allOperations[i])
       {
           case 'chop':
               number/=2;
               break;
            case 'dice':
                number=Math.sqrt(number);
                break;
            case 'spice':
                number+=1;
                break;
            case 'bake':
                number*=3;
                break;
            case 'fillet':
               number=Math.round((number*0.8) * 10) / 10;
                break;
       }

       console.log(number);
       
    }

}

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function WordsUppercase(text)
{
    words=text.split(/\W+/g);
    let result=[];
    for(word of words)
    {
        if(word!='')
        {
            result.push(word.toUpperCase());
        }
    }

    let output='';
    for(resultWord of result)
    {
        output+=resultWord+', ';

    }

    output=output.substr(0,output.length-2);

    console.log(output);
}

WordsUppercase('Hi, how are you?');
WordsUppercase('hello');


