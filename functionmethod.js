//  call example 

let name1= {

    firstName : 'midu',
    lastName: 'zack',

  
}

let printName = function (street,town){
    console.log(this.firstName + " " + this.lastName + " "+ street,town);
}

printName.call(name1)


let name2 = {
    firstName: 'midlaj',
    lastName: 'zackiy',
}


printName.call(name2,'gaya','city')


// apply method
printName.apply(name2,['gaya','city'])


// bind method 
let result = printName.bind(name2,'poor','bad')

result()