
let a =["https://www.example.com/images/dummy_image_large.jpg",
        "https://www.example.com/images/dummy_video_small.jpg",
        "https://www.example.com/images/dummy_image_large.png",
        "https://www.example.com/images/dummy_video_large.mp4"]




        // let result = a.map((val)=>val.split('.').pop())

        // console.log(result);



        // function test(files){

        //     let ans = files.map((val)=>val.split('.').pop())

        //     return ans;
        // }

        // console.log(test(a));


        let b = []

        for(let i = 0 ; i < a.length  ; i++){

            let object = {
                type:a[i].split('.').pop(),
                filename: a[i].split('/').pop().split('.').shift(),
                http : a[i].split('_')[1]


            }
            console.log(object);
        }

        console.log(b);