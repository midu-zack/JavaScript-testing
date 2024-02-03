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

