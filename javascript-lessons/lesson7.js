// const person = {
//     firstName: "abdul",
//     lastName: "Maxamed",
//     age: 24,
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     },
//     blog: ["How to make baaris iyo chicken", "My fav cars"],
//     id: 2
// }

const car = {
    name: "abdul",
    make: "bmw",
    model: "3 series",
    year: 2022,
    owner: function(){
        return this.name
    }
}

// console.log(person.fullName())
console.log(car.owner())

// delete person.age
// person.race = "black"
car.colour = "green"

console.log(car)
// console.log(person)


function person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

console.log(person)

const abdul = new person("Abdulkadir", "Maxamed", 24)
const rayan = new person ("Rayan", "F", 21)
const huda = new person("Huda", "H", 20)

console.log(abdul)