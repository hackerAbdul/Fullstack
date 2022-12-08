//write a function that checks if the number inputted is a prime number

let number = 298

// // 2 3 5 7 11 13 17 19 23 


if (number===1){
    console.log(false);  
}else if(number === 2){
    console.log(true);  
}else{
    for (let i=2; i<number; i++){
        if (number%i===0){
            console.log(number + " is not prime number")
        }
    }
}

// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
// // var largest = arr[0];
// // for(var i=0;i<arr.length;i++){
// //    largest = arr[i]>largest ? arr[i]:largest; //Check largest number
// // }
// // console.log(largest) //567
// let largest = arr[0]
// for (let i=0; i<arr.length; i++){
//     if (arr[i]>largest){
//         largest = arr[i]
//     }
// }
// console.log(largest)

// function test_prime(n){
//     if (n===1){
//         console.log(false);  
//     }else if(n === 2){
//         console.log(true);  
//     }else{
//         for(var x = 2; x < n; x++){
//             if(n % x === 0){
//                 console.log(false);  
//             }
//         }
//         console.log(true);  
//     }
// }

// test_prime(4)