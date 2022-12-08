//q1
function sentence(){
    console.log("Hello world")
}

// const sentence = () => {
//     console.log("Hello world")
// }

sentence();

//q2

function numberGenerator(num){
    generator = Math.floor(Math.random()*num)
    console.log(generator)
}

numberGenerator(3000);

//q3

function combineArrays(param1,abdul){
    
    console.log(param1.concat(abdul))
}

combineArrays([1, 2, 3, 4],['this', 'will', 'not be combined']);

//q4 - not possible loops 

//q5

function oddEven(num){
    if (num % 2 === 0){
        console.log(`${num} is an even number`)
    }else{
        console.log(`${num} is an odd number`)
    }
}

oddEven(15)

//q6 -- write a function that reverses the order of an array e.g 54326 = 62345

function reverse(array){
    console.log(array.reverse())
    
}

reverse([5,4,3,2,6])


//q7 - write a case statement every day of the week with output being either a working day or a weekend

function weekday(variable){
    console.log(`${variable} is a weekday`)
}

function weekend(variable){
    console.log(`${variable} is a weekend`)
}

day = 'abdul'

switch(day.toLowerCase()){
    case 'monday':
        weekday(day)
        break;
    case 'tuesday':
        weekday(day)
        break;
    case 'wednesday':
        weekday(day)
        break;
    case 'thursday':
        weekday(day)
        break;
    case 'friday':
        weekday(day)
        break;
    case 'saturday':
        weekend(day)
        break;
    case 'sunday':
        weekend(day)
        break;
    default:
        console.log("Sorry thats is not possible")
        break;
}

/*q8 -- write a function to check if a string is a palindrome. 
(palindrome is if the word spells the same opposite, e.g madam is true as its madam backwards, sight is false because it is this backwards.*/
// civic -- civic
// radar
// level
// rotor
// kayak
// eye
// break -- kaerb

function checkPalindrome(variable){
    var reverse = variable.split("").reverse().join('')
    console.log(reverse)
    if (variable === reverse){
        console.log(`${variable} is a palindrome`)
    }else{
        console.log(`${variable} is not a palindrome`)
    }
}

checkPalindrome("level")

"level"
"l","e","v","e","l"
"l","e","v","e","l"
"level"


["break"] //--position 0
["b","r","e","a","k"]
["b","r","e","a","k"] //- .split
["k","a","e","r","b"] //- .reverse
"kaerb" //-- .join