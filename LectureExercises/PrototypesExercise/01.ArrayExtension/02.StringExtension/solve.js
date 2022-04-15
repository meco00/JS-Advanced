
(function extendArray() {

String.prototype.ensureStart=function(str)
{
    if(this.startsWith(str)== false)
    {
        
        return str + this.toString();
    }

    return this.toString();
}

String.prototype.ensureEnd=function(str)
{
    if(this.endsWith(str)== false)
    {
       return this + str.toString();
    }

    return this.toString();
}

String.prototype.isEmpty= function()
{
    return this.length == 0
}

String.prototype.truncate=function(n){

    const toStr=this.toString();
    if(n > this.length)
    {
        return toStr;
    }
    if(n < 4)
    {
        let str=toStr.substring(0,this.length-n-1);
        return str + '.'.repeat(n);
    }  
    if(!this.includes(' '))
    {
        return toStr.substring(0,n-3)+'...';
    }

      const splited=toStr.split(' ');

      let result='';

      for(let i=0 ; i< splited.length;i++)
      {
          if(result.length+splited[i].length <= n)
          {
              result+= ' ' + splited[i];
          }
          else{
              return result.trim();
          }

      }

      return result;

}


String.format=function(string, ...params)
{
    let counter=0;

   for (const param of params) {

      string = string.replace(`{${counter++}}`,param);
       
   }

   return string;


}

})();

var testString = 'quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');

console.log(answer=='the quick brown fox jumps over the lazy dog')
answer = answer.ensureStart('the ');



