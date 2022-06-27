// class Car {
//     constructor(brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }

//     accelerate = (num) =>{
//         this.speed += num
//     }

//     brake = (num) =>{
//         this.speed -= num
//     }
// }

// var car = new Car("Renault", 30)
// const describe = () => {
//     console.log(`${car.brand} running at ${car.speed}km/h`)
// }
// const display = describe()
// console.log(display)

// var ford = new Car("Ford", 0)
// console.log(ford)

// ford.accelerate(50)
// console.log(ford)

// ford.brake(25)
// console.log(ford)

// ford.accelerate(50)
// console.log(ford)

// ford.brake(25)
// console.log(ford)

// --------------------------------------------------------------------------------------------------
class Tv {
    constructor(brand, channel, volume){
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    addVolume = (num) => {
        if(this.volume + num > 100){
            this.volume = 100
        }else{
            this.volume += num
        }
    }

    decreaseVolume = (num) => {
        if(this.volume - num < 0){
            this.volume = 0
        }else{
            this.volume -= num
        }
    }

    changeChannel = (num) => {
        if(num > 50 || num < 0){
            console.log("Chaîne inexistante")
        }else{
            this.channel = num
        }
    }

    resetTv = () => {
        this.channel = 1
        this.volume = 50
    }

    describe = () => {
        console.log(`modèle : ${this.brand} channel: ${this.channel}, volume: ${this.volume}`)
    }
}


var samsung = new Tv("samsung", 1, 50)
samsung.addVolume(12)
samsung.changeChannel(13)

console.log(samsung)