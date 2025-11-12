import Vehicle from "./Vehicle.js";
class Bicycle extends Vehicle{
    constructor(color,n=2,h="honk honk"){
        super(color,n,h)
        this.color=color
        this.horn=h;
        this.numOfWheels=n;
    }
    honkHorn() {
        return this.horn
    }
}
export default Bicycle;