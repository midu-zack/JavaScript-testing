// promise
const testPromise = new Promise((resolve,reject)=>{

    const data  =  'perfect'

    if(data){
        resolve(data)
    }else{
        reject('sorry this is not possible')
    }

})


testPromise.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


// closure

function outer(){

    let values = 900;

    function inner(){

        console.log(values);

    }
    inner()
}

outer()


// try catch 

let test = 'datas'

if(test){
    try{
        console.log(test);
    }
    
    catch(err){
        console.log('sorry this is not possible ');
        
    }finally{
        console.log('must proper working ');
    }
}




// splice 

let array = [1,2,3,4,5,6,7,8,9] 

let result = array.splice(5,8,100) //the array modify

console.log(array);
console.log(result);



// slice
let array2 = [1,2,3,4,5,6]

let result2 = array2.slice(1,2) //the array not modify , only extract to the array 

console.log(array2);
console.log(result2);





