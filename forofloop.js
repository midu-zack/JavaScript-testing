const array = [
    {
        name: 'zack',
        age:18,
        place:'malappuram',
        area : 'muttipplam'
    },
    {
        name: 'zain',
        age:18,
        place:'london',
        area : 'townhall'
    },
    {
        name: ' malik',
        age:18,
        place:'rashya',
        area : 'topstar'
        ,test:
        [{
            how:'koxi'
        }]
    },
]

 for(i of array){

    if(i.name==='malik'){

        for(j of i.name.test ){
        
            if(j.how === 'koxi'){
    
                j.how = 'muhammad midlaj'
        
           }
           console.log(array);
    
        }
        
 
            
    }
 
  
   
    
 }
 console.log(array);