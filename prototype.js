 function myButton (name){
   return this.name=name
 
 }


 let b1 = new myButton('midlaj')
 console.log(b1.name);


 myButton.prototype.sayhello = function (){

  console.log('hello ' + this.name  + '!' );
 
 }

 b1.sayhello()