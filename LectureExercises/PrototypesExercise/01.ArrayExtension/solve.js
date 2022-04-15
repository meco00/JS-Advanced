
    (function extendArray() {
        Array.prototype.last= function(){
            return this[this.length-1]
        };
    
        Array.prototype.skip = function(n){
            return this.slice(n);
        }
    
        Array.prototype.take = function(n){
            return this.slice(0,n);
        }
    
        Array.prototype.sum = function(){
            return this.reduce((a,x)=> a+x,0);
        }
    
        Array.prototype.average = function(){
            return this.sum() / this.length;
        }
      })();
   



let arr=[5,5];

console.log(arr.last());

console.log(arr.skip(2));

console.log(arr.take(2));



console.log(arr.sum());

console.log(arr.average());