const user = [
    {name : 'midu',age:18, place : 'malappuram'},
    {name : 'zack',age:12, place : 'kozhikode'},
    {name : 'midlaj',age:16, place : 'kazorkode'}


]


const result = user.filter(x => x.age < 15).map((x)=>{
    return x.name
})

console.log(result);