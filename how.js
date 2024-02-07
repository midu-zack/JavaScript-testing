const myPromise = new Promise ((resolve,reject)=>{
    let sample = 'human'

    if (sample === 'human'){

        resolve('resolve')
    }else{
        reject('rejected')
    }
})

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


async function  min(){
    try{
        let result = await myPromise;
        console.log(result);

    }catch(err){
        console.log(Error);
    }
   
}

min()