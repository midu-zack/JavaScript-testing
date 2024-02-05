// console.log('start');

// setTimeout(() => {
//     console.log('callback');
// }, 3000);

// console.log('end');


// setTimeout(() => {
//     console.log('hello');
// }, 3000);



function sample()
{
    let x =9
   

    setTimeout(() => {
        for(let i = 1 ; i <= x ; i++){
       
            console.log(i);
        }
       
    }, 3000);
}

sample()