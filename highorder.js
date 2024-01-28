//  function x(){
//     console.log('hello zack');
//  }

//  function y(x){
//     x()
//  }


// const radius = [1, 3, 4, 2];

// const calcArea = function (radius) {
//     let output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calcArea(radius));


function highOrder(x){
    console.log('highOrder function');
   
    return(function sample(){
        console.log('hey zack');
        
        // console.log('zack');
        
    })
    
 }


highOrder()