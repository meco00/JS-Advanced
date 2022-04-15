function notation(input){

    let operations = {
        '+': (first, second) => first + second, 
        '-': (first, second) => first - second, 
        '*': (first, second) => first * second, 
        '/': (first, second) => first / second, 
    }


    let numbers=[];

    for(const element of input)
    {
        if(isNaN(element))
        {
            if(numbers.length <= 1){
                console.log('Error: not enough operands!');
                return;
            }
           let secondNumber=numbers.pop();
           let firstNumber=numbers.pop();
           numbers.push(operations[element](firstNumber,secondNumber));

        }
        else{
            
            numbers.push(element);
        }


    }

  
    numbers.length == 1 ?  
    console.log(numbers[0]) :  console.log('Error: too many operands!'); 

}

notation([3,
    4,
    '+']
   
   
 );