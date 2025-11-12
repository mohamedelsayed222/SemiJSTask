import Vehicle from "./Vehicle";
class Bicycle extends Vehicle{
    constructor(color,n,h){
        super(color,n=2,h="honk honk")
    }
}
export default Bicycle;