let a ;

a =89

console.log(a);


function getname(){
    let a =23;

}

console.log(a);


{
   

}

// var y =932;
var y = 9023

var y = 90
console.log(y);

{
const df = 90;

}

var df = 23;

console.log(df);


// hoisting

console.log(hs);

var hs ;



let split = 'mihammed'

console.log(split.split(''));



let test = function (){
    console.log('heloo');

} 
test()


function pure(a,b){
    return a + b 
}

console.log(pure(89,1));


 let array = [1,3,45,54,34]

  array.forEach(element => {
   console.log( element+12);
    
 });

 let vas = array.map(val=>val+12)
 
 console.log(vas);


 let filter = array.filter(val => val%2)

 console.log(filter);






 let myPromise = new Promise ((resolve,reject)=>{
    let midlaj = 'Pulladan '
    if(midlaj === 'muhmmed'){
        resolve (midlaj)
    }else{
        reject(`${midlaj} invalid`)
    }
 })


 try{
    myPromise.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log("error",err);
    })
 }catch(Error){
    console.log(Error);
 }