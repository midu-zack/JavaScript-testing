// let object = {
//     name: 'muhammed mildaj',
//     age:18,
//     place : 'malappuram'
// }


// for(i in object){
//     console.log(i);
// }


let array = [ 1,3,44,56,83,83,90]


// for(j in array){
//     console.log(j);
// }


let a = array.forEach((val,index,array)=>{
   return val+19
})

console.log(a);

let x = array.map((val,index,array)=>{
    return val + 19
})

console.log(x);



const pro = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const test = true

        if(test){
            
            // let data = 'successful'
            resolve (test)

        }else{
            reject('nothing else')
        }
    },2000);



})


pro.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})