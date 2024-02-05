 


function sample(x){
    return new Promise((resolve,reject)=>{
        if(x === 10){
            resolve('true')

        }else{
            reject('false')
        }
    })
}

sample(10)

    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
