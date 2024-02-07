 
class car {


    constructor(color,carN,year,price){  //class create time autocratically  constructor exicute 
        this. name = carN;
        this. model = year;
        this. color = color;  
        this.price = price;      //this keyword current value ne represent cheyyan aanu
        
    }

// prototype
    getdetails(){

        console.log(this.name);
        console.log(this.model);
        console.log(this.color);
        console.log(this.price);
        

    }
    getmodel(){

        console.log("model"+this.price);

    }

    // static
    static message(){
        console.log('this is a static method');
    }
    
 }

 let tes1 = new car('red','phortuner',2024,4000000)
 let tes2 = new car('blue','maruthi',1999,3000000)
 let tes3 = new car('yellow','bmW',1990,6000000)
 let tes4 = new car('black','benz',2000,8000000)



 tes3.getdetails()
 tes3.getmodel()

car.message()




//inheritance

// baseclass(parent) - bike
// childclass (direved class) - spots bike



class spotsCar extends car {
    


}

let inheritanceCar = new spotsCar('white','mini',2020,170000)


inheritanceCar.getdetails()