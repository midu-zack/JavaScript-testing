const myPromise = new Promise((resolve,reject)=>{
    let a = 90
    if(a===900){
        resolve('resolved')
    }else{
        reject('rejected')
    }
})

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

async function x (){

    try{
        let wait = await myPromise
        console.log(wait);

    }
   catch(err){
    console.log(err);
   }
}

x()


let object = {

    name :'FidhaSherin',
    age:18,
    from:'malappuram',
    details:'PulladanHouse',

    address:{
        firstName:'Midlaj',
        lastName:'Zack'

    },

    collectionValues:[1,2,3,4,233,12]

}

//

// console.log(object.collectionValues); 
for(let i  in object){
    console.log(i);

    
     
}