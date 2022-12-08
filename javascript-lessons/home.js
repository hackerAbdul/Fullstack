// // Statement 1
// function variable (number){
//     difference = number - 13
//     console.log( difference*2)
// }

// num = 15

// if (num >13){
//     variable(num)
// }






// // Statement 2

// function sum(var1, var2){
//     answer = var1 + var2
//     console.log(answer);

//     if(var1 === var2){
//         console.log(answer*3);
//     }
// }
// sum(3,3);

// // Statement 3

function check (num1, num2){
    

    if(num1 === 50 || num2 === 50 || num1 + num2 === 50){
        console.log(true);
    // console.log("true")
    }
    else{
        console.log(false);
    }
}
// check (5, 3);





// // Statement 5

function print(str){

    firstThree = (str.substring(0, 3)).toLowerCase();
    console.log(firstThree);  
}


// str = "jav"

// if (str.length<3){
//     console.log(str.toUpperCase())
// }else{
//     print(str)
// }

// Statement 7

function str(word){

    newString = word.split("").sort()
    console.log(newString);
}
// str("apple");

// Statement 6

// function word(str){
//     newWord = str.split(" ")
//     meow = newWord[0].toUpperCase()
    
    
//     console.log(newWord)
//     console.log(meow)
// }

// word("apple multiple words")

// // Statement 8

function newString(word){
    newWord = word.substring(1, word.length-1)
    if(word[0] === 'P' || word[word.length-1] === 'p'){
        console.log(newWord);
    }
    else if(word[0] === 'p' || word[word.length-1] === 'p'){
        console.log(newWord);
    }
    else{
        console.log(word);
    }
}
newString("python")


// ytho
// thon

array = [92341,1234,676]

if (array.length===3){
    reverse(array)
}else{
    console.log(array)
}

function reverse(arr){
    console.log(arr.reverse())
}

//q10 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.