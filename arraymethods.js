// push
// push to last Element
let array = [ 1,3,25,6]
array.push(90,34)
console.log(array);
    

// unshift
// push to first Element
array.push(23)
console.log(array);


// pop
// remove to last Element
array.pop()
console.log(array);


// shift
// remove to first Element
array.shift()
console.log(array);
 


// splice 

let sample= [ 476,299,5,78,34,2,43]
console.log(sample.slice(1,3));


// splice
let test =[2,7,83,52,91,29]
// console.log(test.splice(1,3,8989898))
// console.log(test);


// map
let arraym=[2,3,4,51,5,99,23,44]

let result = arraym.map((val,index)=>{
    return  val+12

})
console.log(result);



// forEech

let testingArray = [44,33,6,4,633,11,66,3]
  testingArray.forEach((val,index)=> 
  {
    console.log('ForEached',val+90)
});
 


//  map
let resultMap = testingArray.map((val,index)=>{
    return val + 90
})
console.log(resultMap,testingArray);


// filter

let resultFilter =testingArray.filter((val,index)=>{
    return val>40
})

console.log(resultFilter);


// reduce
let resultReduc=testingArray.reduce((acc,curr)=>{

    if(curr > acc){

        acc=curr
   
    }
    
    return acc

    // console.log(resultReduc);
})

console.log(resultReduc);

// findsum
let resultsum = testingArray.reduce((curr,val)=>{
    return curr+val
})
console.log(resultsum);