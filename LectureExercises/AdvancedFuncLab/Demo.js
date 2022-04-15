// const obj=
// {
//     name:'Peter',
//     outer()
//     {
//         console.log(this);// Object {name: "Peter"}
//         const inner = () =>  console.log(this);
//          inner();

//     }
// }


// //console.log(obj.outer());


// function greet(){
//     console.log(this.name)
// }


// let Peter= { name:'Peter'};

// //greet.call(Peter);


// let Mikael={
//     name:'Mikael',
//     shareInfo(){
//         console.log('Hello' + this.name);
//     }
// }


// const George={name:'George'};


//Mikael.shareInfo.apply(George);


const x=42;

const getXn= function() {
 return this.x;
}
const module1 = {x, getX};
const unboundGetX= module1.getX;
console.log(unboundGetX());// undefined
const boundGetX=unboundGetX.bind(module1);
console.log(boundGetX());// 42
