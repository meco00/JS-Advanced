function ex1(array){

    let result={};

    for(let i=0  ; i < array.length ; i+=2)
    {         
      result[array[i]]= Number(array[i+1]) 
    }

    console.log(result);


}




ex1(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);