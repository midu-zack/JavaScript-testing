 class object {
    
    constructor(nickname,old){
        this.name = nickname;
        this.age = old;
    }

    static testStatic (...params) {
        let result = params.map((val)=> val.age)
        console.log(Math.min(...result));
    }


    getage (){
        return 100-this.age
    };

    getname(){
        return this.name
    }
 }

 

 let b1 = new object('midlaj',1992)
 let b2 = new object('muhammed',78)
 let b3 = new object('zack',228)

//  console.log(b1,b2,b3);


// Static function all time calling to class
 object.testStatic(b1,b2,b3)


// console.log( b2.getage());