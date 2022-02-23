class Car {
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
        this.speed = 0;
        this.motion = ["car has to start", "car is moving", "car has stopped"];
    }

    accelerate(value) {
        this.speed += value;
    }

    brake(value) {
        this.speed -= value;
        if(this.speed < 0)
            this.speed = 0;
    }

    emergencyBrake() {
        this.speed = 0;
    }

    status() {
        let temp = this.motion[0];

        if(this.speed > 0)
            temp = this.motion[1];
        else if(this.speed === 0)
            temp = this.motion[2];

        return "" + this.model + " " + this.brand + ", running at " + this.speed + "; status check: " + temp; 
    }

}

let car = new Car("Ford", "Fiesta");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(20);
console.log(car.status());
car.brake(200);
console.log(car.status());