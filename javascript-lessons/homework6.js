//q.1 Write a JS code to print numbers from 1 to 10
// for (let iterator=1; iterator<11; iterator++){
//     console.log(iterator)
// }



//q.2 Write a JS code to print Even numbers in given array

// const array = [0,1,2,3,1,4,5,6,1,9,10]

// for (let iterator=0; iterator<array.length; iterator++){
//     if(array[iterator]%2===0){
//         console.log(array[iterator])
//     }
// }


// array = [1,2,2,4,5,6,6,8,9,10]

// for (let i = 0; i<=array.length;i++){
//     if (array[i] % 2 ===0)
//     console.log(array[i])
// }

//q.3 Write a JS code to print Odd numbers in given array
// for (let iterator=0; iterator<array.length; iterator++){
//     if(array[iterator]%2!=0){
//         console.log(array[iterator])
//     }
// }

//q.4 Write a JS code that iterates by 2 up to 100 ( i.e 0,2,4,6,8,10,12)

// let i = 100
// while (i>0){
//     console.log(i)
//     i-=2
// }

// for (let i=0; i<=100; i+=2){
//     console.log(i)
// }

//q.5 Write a JS code to print largest number in array. Array = [2, 45, 3, 67, 34, 567, 34, 345, 123]

var arr = [2, 45, 3, 67, 34,345, 567, 5000]
var max = 3
for ( i = 0; i < arr.length; i++){
    if(arr[i] === max){
        console.log(max)
        console.log(i)

        arr.splice(i, arr[i])
    }
}

console.log(arr)

// console.log(Math.max(...arr))