function getname(x) {
  return new Promise((resolve, reject) => {
    if (x === 10) {
      setTimeout(() => {
        resolve("resolved", x);
      }, 5000);
    } else {
      setTimeout(() => {
        reject("reject");
      }, 3000);
    }
  });
}

// getname(10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


async function x (){
    try{
        let xs = await getname(10)
        console.log(xs);

    }catch(err){
        console.log(err);
    }
 
}
x()