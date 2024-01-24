// const cart = [ 'shoe','pants','shirt'] 

//  createOrder(cart , function (oderId){
//     proceedToPayment (oderId,function(paymentInfo){
//         showOrderSummery(paymentInfo,function(){
//             updateBalance()
//         })
//     })

// })


// createOrder(cart)

//         .then((oderId)=> proceedToPayment(oderId))
//         .then((paymentInfo)=> showOrderSummery(paymentInfo))
//         .then((paymentInfo)=> updateBalance(paymentInfo));




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
