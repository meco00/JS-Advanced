function sortArray(array,criteria){

    if(criteria=='asc')
    {
        return array.sort((a,b)=> a-b);

    }
    else if(criteria=='desc')
    {
        return array.sort((a,b)=> b-a);
    }

}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));