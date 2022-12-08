// // function newFunction(a,b){
// //     var1 = a
// //     var2 = b

// //     res = var1+var2

// //     return res
// // }



// // var answer = newFunction(1,2);
// // console.log(answer)


// var a = "abdul"
// var b = 12


// function c(){
//     answer = a+b
//     console.log(a+b)
//     console.log(answer)
// }

// c();




// function conditionals(param){
//     if(typeof param === "string"){
//         console.log(`${param} is a string`)
//     }else{
//         console.log("error")
//     }
// }

// function anotherOne(params){
//     if(typeof params === "number"){
//         console.log(`${params} is a number`)
//     }else{
//         console.log("error")
//     }
// }

// conditionals("this");
// anotherOne(123);



//---------------------------------------------------

var num1 = 5
var num2 = 20
var operator = "subtract"

if(operator === "add"){
    addition()
}else if(operator === "subtract"){
    subtraction()
}else if(operator === "multiply"){
    multiply()
}else if(operator === "didve"){
    divide()
}else{
    errorMessage(operator)
}

function addition(){
    answer = num1+num2
    console.log(answer)
}

function subtraction(){
    answer = num1-num2
    console.log(answer)
}

function multiply(){
    answer = num1*num2
    console.log(answer)
}

function divide(){
    answer = num1/num2
    console.log(answer)
}

function errorMessage(params){
    console.log(`${params} is not an option I know`)
}