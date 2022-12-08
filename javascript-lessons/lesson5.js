//functions

// var abdul = "abdul"
// console.log(abdul)

var variable2 = "cups"

function superHeroes(name){
    var hero = "superman"
    var sentence = "this will return this sentence"
    if (hero.toLowerCase() === "superman" || hero.toLowerCase() === "batman"){
        console.log(`${hero} ${name} is a dc character`)
    }else if (hero.toLowerCase() === "spiderman" || hero.toLowerCase() === "hulk"){
        console.log(`${hero} ${name} is a marvel character`)
    }else{
        console.log("Sorry I only know marvel or dc super heroes")
    }
    return sentence
}

superHeroes("smith");
