const arr = [1,2,3,4,5]
 
const result = arr.reduce((val,index,array)=>{

    return val + index
    
})

console.log('sum of array :',result);


// find to maximum
const maximum = arr.reduce((acc,curr,array)=>{
    return Math.max(acc,curr)
})

console.log("maximum :",maximum);


// find to minimum
const minimum = arr.reduce((acc,curr,array)=>{
    return Math.min(acc,curr)
})

console.log("minimum : ",minimum);