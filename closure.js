
function outerFunction() {

  let axios = "I am a fullstack developer";

  function innerFunction() {

    console.log(axios);

  }

  innerFunction();

}

outerFunction();

 




function x() {
  // var abc = 'alhmadhulillah'

  for (var i = 2; i <= 60; i++) {

    function close(x) {
      if (x % 2 == 0) {
        setTimeout(() => {
          console.log(x);
        }, i * 1000);
      }
    }
    close(i);
  }

  console.log("where are you going");
}

x();


 