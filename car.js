class Car {
    constructor(brand, speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate(num){
        this.speed += num
    }

    brake(num){
        this.speed -= num
    }
}

// var car = new Car("Renault", 30)
// const describe = () => {
//     console.log(`${car.brand} running at ${car.speed}km/h`)
// }
// const display = describe()
// console.log(display)

var ford = new Car("Ford", 0)
console.log(ford)

ford.accelerate(50)
console.log(ford)

ford.brake(25)
console.log(ford)