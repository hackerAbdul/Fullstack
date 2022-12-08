function successMessage(){
    console.log("This conditional statement executed successfully")
}

//q1

hero = "superman"


// if (hero.toLowerCase() === "superman" || hero.toLowerCase() === "batman"){
//     console.log(`${hero} is a dc character`)
//     successMessage()
// }else if (hero.toLowerCase() === "spiderman" || hero.toLowerCase() === "hulk"){
//     console.log(`${hero} is a marvel character`)
//     successMessage()
// }else{
//     console.log("Sorry I only know marvel or dc super heroes")
// }

function dc(param){
    console.log(`${param} is a dc character`)
}


switch (hero){
    case "superman":
        dc(hero)
        break;
    case "batman":
        dc(hero)
        break;
    case "wonder woman":
        dc(hero)
        break;
    case "flash":
        dc(hero)
        break;
    case "spiderman":
        console.log(`${hero} is a marvel character`)
        break;
    case "thor":
        console.log(`${hero} is a marvel character`)
        break;
    case "hulk":
        console.log(`${hero} is a marvel character`)
        break;
    default:
        console.log(`error dont know`)
}



//q2

// var age = 0
// //|| = OR
// //&& = AND

// if (age >= 11 && age<=16){
//     console.log("Your year group will be secondary school")
//     successMessage()
// }else if (age > 16 && age <=18){
//     console.log("Your year group will be college/sixth form")
// }else if (age > 18){
//     console.log("Education is optional")
//     successMessage()
// }else{
//     console.log("sorry i only know year group starting from 11 & above")
// }

// //q3

// var list = [1,2,3,4,5]
// //!== -- NOT EQUAL TO

// // console.log(list.length)

// // if (list.length < 5 || list.length > 5){
// //     console.log("error")
// // }

// if (list.length !== 5){
//     console.log("error")
// }else{
//     successMessage()
// }

// //q4

// // superHeroes();
// //q5

// var time = 0650
// var day = "School day"

// if (time > 0700){
//     console.log("take the subway")
//     successMessage()
// }else{
//     console.log("take the bus")
//     successMessage()
// }

// if (day === "School day"){
//     console.log("leave home")
//     console.log("check time")
//     if (time > 0700){
//         console.log("take the subway")
//         console.log("reach school")
//         successMessage()
//     }else{
//         console.log("take the bus")
//         console.log("reach school")
//         successMessage()
//     }
// }else{
//     console.log("Not a school day")
// }
