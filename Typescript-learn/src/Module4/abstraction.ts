// interface IVehicle{
//     name:string;
//     modal:string
// }

// const Vehicle:IVehicle={
//     name:"car",
//     modal:"55656ht"
// }

interface IVehicle{
    startEngine():void;
    stopEngine():void;
    move():void
}

class Vehicle implements IVehicle{
    constructor( public name:string,public brand:string,public model:number){
       
    }
    startEngine():void{
        console.log('i am starting the vehicle')
    }
    stopEngine():void{
        console.log('i am starting the vehicle')
    }
    move():void{
        console.log('stop vehicle')
    }
    test(){
        console.log('i am testing the vehicle')
    }

    
}
const Vehicles1= new Vehicle("car", "toyoty", 23434);
// abstract class
abstract class Vehicle3 {
    constructor( 
        public name:string,
        public brand:string,
        public model:number
        )
    {}
    
    abstract startEngine():void
    abstract stopEngine():void
    move():void{
        console.log('stop vehicle')
    }  
}

class Car extends Vehicle3{
   
      startEngine():void{
        console.log('i am starting the vehicle...')
    }  
    stopEngine():void{
        console.log('i am starting the vehicle..')
    }
    test(){
        console.log('i am testing the vehicle..')
    }
}
//const car2 =new Vehicle3('car', 'honda', 98989)
//crash2.
