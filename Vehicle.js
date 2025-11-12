class Vehicle {
    constructor(color="blue",numOfWheels=4,horn="beeb beeb"){
        this.color=color;
        this.numOfWheels=numOfWheels;
        this.horn=horn
    }
    honkHorn(){
        return this.horn;
    }
}