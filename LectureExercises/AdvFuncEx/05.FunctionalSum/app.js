function add(num){

    let sum=num;

    function add2(num2){
       sum+= num2;

       return add2;

    }

    add2.toString = function()
    {
        return sum;
    }

  return add2;

}


console.log(add(1)(6)(-3).toString());