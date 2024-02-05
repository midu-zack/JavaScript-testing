// callback to syncrns
function getname(callback){

    console.log('Syncrns call back');

    callback()

    console.log('Thats is possible');
}

 getname(function (){
    console.log('This is a callback function');
 })






//  callback to asyncrnss
function test(testCallback){

    console.log("asyncrns callback ");

        setTimeout(()=>{
            console.log('time function');
        },3000)

        let result = testCallback * testCallback

        console.log(result);

}

 test(12)
