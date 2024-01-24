function plus(x,b){

    try{
        if( x===0 ){
            console.log('not possible');
        }
        console.log(x+b);

    }catch(err){

        console.log(err);

    }
}

plus(2,4)