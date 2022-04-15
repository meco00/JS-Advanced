function Echo(word){
    console.log(word.length);
    console.log(word);
}

Echo('Hello, JavaScript!');
Echo('strings are easy');

function StringLength(firstWord, secondWord,thirdWord)
{

    let result=firstWord+secondWord+thirdWord;

    console.log(Math.floor(result.length));

    console.log(Math.floor(result.length/3));


}


StringLength('chocolate', 'ice cream', 'cake');
StringLength('pasta', '5', '22.3');



function LargestNumber(firstNumber,secondNumber,thirdNumber)
{
    let result;

    if(firstNumber > secondNumber)
    {
       if(firstNumber>thirdNumber)
      {
        result=firstNumber;
      }
      else
      {
          result=thirdNumber;

      }

    }
    else if(secondNumber > firstNumber)
    {
        if(secondNumber>thirdNumber)
      {
        result=secondNumber;
      }
      else
      {
          result=thirdNumber;

      }
    }
    else
    {
        result=thirdNumber;

    }

    console.log(`The largest number is ${result}.`);
}

LargestNumber(5, -3, 16);
LargestNumber(-3, -5, -22.5);


function CircleArea(radius)
{

if(typeof(radius) !== 'number')
{
console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
}
else
{
 let area=radius**2*Math.PI;
    
 console.log(area.toFixed(2));

}


}


CircleArea(5);
CircleArea('zaza');



function SolveMath(firstNumber,secondNumber,operator)
{
    let result;
    switch(operator)
    {
      case '+':
          result=firstNumber+secondNumber;
          break;
       case '-':
          result=firstNumber-secondNumber;
          break;
       case '*':
            result=firstNumber*secondNumber;
            break;   
       case '/':
            result=firstNumber/secondNumber;
            break; 
       case '%':
            result=firstNumber%secondNumber;
            break;
       case '**':
            result=firstNumber**secondNumber;
            break;            
    }

    console.log(result);


}

SolveMath(5, 6, '+');
SolveMath(3, 5.5, '*');


function SolveNumbersNtoM(n,m)
{
    let firstNumber=Number(n);
    let secondNumber=Number(m);

    let result=0;

    for(let i=firstNumber;i <= secondNumber;i++)
    {
      result+=i;
    }     

    console.log(result);

}

SolveNumbersNtoM('1', '5' );
SolveNumbersNtoM('-8', '20');


function DayOfWeek(day)
{

  let result;
    switch(day)
    {
      case 'Monday':
          result=1;
          break;
       case 'Tuesday':
          result=2;
          break;
       case 'Wednesday':
            result=3;
            break;   
       case 'Thursday':
            result=4;
            break; 
       case 'Friday':
            result=5;
            break;
       case 'Saturday':
            result=6;
            break; 
        case 'Sunday':
                result=7;
                break; 
        default:
        result='error';
        break;          
    }

    console.log(result);

}

DayOfWeek('Monday');
DayOfWeek('Friday');
DayOfWeek('Invalid');


function DaysInMonth(month,year)
{
    console.log(new Date(year,month,0).getDate());
}

DaysInMonth(1, 2012);
DaysInMonth(2, 2021);


function SquareOfStars(size)
{
    if(size == null)
    {
        size=5;
    }

    for(let i=0;i < size; i++)
    {
      let result='';

     for(let m=0;m < size; m++)
     {
        result+='* ';

     }

     console.log(result);

    }


}

SquareOfStars();

function AggregateElements(array)
{
    let result=0;
    for(let i=0;i < array.length;i++)
    {
      result+= array[i];
    }  

    console.log(result);

    let inverseSum=0;
    for (let i = 0; i < array.length; i++) {
        inverseSum += 1/array[i];
    }
    console.log(inverseSum);

    let concatSum='';
    for (let i = 0; i < array.length; i++) {
        concatSum += array[i];
    }
    console.log(concatSum);



}

let array=[1, 2, 3];

AggregateElements(array);





function aggregateElements(elements) {
        aggregate(elements, 0, (a, b) => a + b);
        aggregate(elements, 0, (a, b) => a + 1 / b);
        aggregate(elements, '', (a, b) => a + b);
        function aggregate(arr, initVal, func) {
            let val = initVal;
            for (let i = 0; i < arr.length; i++)
                val = func(val, arr[i]);
            console.log(val);
        }
    }

    
    aggregateElements([1, 2, 3]);


//Reduce

let demoArray=[10,30,,30,50,60,70,80];

const sum=demoArray.reduce(((a,x)=> a+x),0);

const average=demoArray.reduce((a,x,i,array)=>
{
    a+=x;
    if(i==array.length-1){
        return a/array.length
    }
    else{
        return a;
    }

},0)

const averageSecondWay=demoArray.reduce((a,x,i,array)=>
{
    return a+x/array.length
},0)

console.log(averageSecondWay);


