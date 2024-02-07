let object = {
    name : 'FirstName',
    nickName : 'lastName',

    address :function ( ){
        console.log(this  );
    }

}


let object1 = {
    firstName:'zack',
    lastName:'zain'
}


var test = object.address;

// test()

// apply == second argument array
// test.apply(object1 ,['muhammed','midlaj'])

// call == argument only (,)
test.call(object1)

// bind  == first time setting the object
 const binding =  test.bind(object1)
 binding()


// object.address()

//  console.log(object);
