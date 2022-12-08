const randomGenerator = () =>{
    generator = Math.random()*100
    console.log(generator)
    return generator
}


floor = randomGenerator();

console.log(Math.floor(floor))

const combineArray = () =>{
    let array1 = ["this", "will be"]
    let array2 = ["combined"]    
    console.log(array1.concat(array2))
}


combineArray()

const reverse = (variable) =>{
    reverser = variable.toString().split("").reverse().join("")
    console.log(reverser)
    return reverser
}

reverse(1234)

const palindrome = (str) =>{
    reverseString = reverse(str)
    if (str === reverseString){
        console.log(`${str} is a palindrome because it equals to ${reverseString} backwards`)
    }else {
        console.log(`${str} is not a palindrome`)
    }
}

palindrome("this")

const oddEven = (num) =>{
    if (Math.floor(num)%2 === 0){
        console.log(`${num} is an even number`)
    }else{
        console.log(`${num} is an odd number`)
    }
}

oddEven(1)

