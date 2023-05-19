class Persons{
    takeNap(){
        console.log('i am sleeping');
    }
}

class Students extends Persons{
    takeNap(): void {
        console.log(`I am sleeping 10 hours perday`)
    }
}

class Developer extends Persons{
takeNap(): void {
    console.log(`I am sleeping 5 hours perday`)
}
}

function getNap(param:Persons){
    param.takeNap()
}
const persons1=new Persons()
const persons2=new Students()
const persons3=new Developer()

getNap(persons1)
getNap(persons2)
getNap(persons3)

class Shape{
    getArea():number{
        return 0
    }
}

// area =>pi r*r

class Circle extends Shape{
   radius:number;
    constructor(radius:number){
        super()
        this.radius=radius

    }

    getArea():number{
        return Math.PI*this.radius*this.radius
    }
}

class rectangle extends Shape{
    height:number;
    width:number;

    constructor(height:number, width:number){
        super()
        this.height=height;
        this.width=width
    }

    getArea():number{
        return this.width*this.width
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea)
}

getAreaOfShape(new Circle(20))