const arr = [1,2,3,4,5]
 
const result = arr.reduce((val,index,array)=>{

    return val + index
    
})

console.log('sum of array :',result);


// find to maximum
const maximum = arr.reduce((acc,curr,index,array)=>{
    return Math.max(acc,curr)
})

console.log("maximum :",maximum);


// find to minimum
const minimum = arr.reduce((acc,curr,index,array)=>{
    return Math.min(acc,curr)
})

console.log("minimum : ",minimum);





// this reduce method


let smallest = arr.reduce((acc,curr)=>{
    if(curr<acc){
        acc=curr
        
    }
    return acc
 } )

 console.log(smallest);


 let biggest = arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr
        
    }
    return acc
 } )

 console.log(biggest);

// find average
 let average = arr.reduce((acc,curr,index,array)=>{

           return  acc+curr
 },0)

 const avg = average/arr.length

 console.log(`average:${avg}`);