let objct = {
    name:'midlaj',
    age:18,
    memmory:['a','b','c','d'],

    address:{
        firstName:'abhi',
        testobject:{
            lastname:'miduzackpulladan'
        }

    }
}

for(let a in objct){

    
    for(let b in objct[a]){

       console.log(b);
        for(let c in b[a]){
            console.log(c);
        }
           
    }
}


// console.log(objct.address.testobject.lastname);
 
 





 