function OddPosition(array)
{
  return  array
   .filter((a,i)=> i%2!=0)
   .map(x=> x*2)
   .reverse()
   .join(' ');
}

let result=OddPosition([3, 0, 10, 4, 7, 3]);

console.log(result);