
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

// x();

function xs(hoo) {
  for (var j = 1; j < hoo; j++) {
    function sevenPlus() {
      setTimeout(() => {
        console.log(j);
      }, 3000);
    }
    sevenPlus();
  }
}

xs(12);
