let array = [
    
    {
        home:{
            siblings:"3",
            members:2,
            address:[{city:"kochi"}]
        },
        school:"svghsss"
    },
    {
        home:{
            siblings:"0",
            members:6,
            address:[{city:"malappuram"}]
        },
        school:"gvhss"
    },{
        home:{
            siblings:"2",
            members:7,
            address:[{city:"kozhikode"}]
        },
        school:"scss"
    },
]
 
// change to the city from address
for(i of array){
    if(i.home.members===7 ){
        for(j of i.home.address)
       if(j.city === 'kozhikode'){
        j.city = 'malappuram'

       }
       console.log(j);
    }
 
}
 





//  array.forEach((x)=>{
//     x.home.address.forEach((y)=>{
//         if(y.city=== 'city'){
//             y.city="malappuram"
//         }
//     })
//  })

// array.forEach((x)=>{
//     if(x.home.members === 7){
//         x.school = "midlaj"
//     }
// })

// for(i of array){
//     if(i.home.members===7 ){
//         i.school = 'Ghssboys school'
//     }
// }


