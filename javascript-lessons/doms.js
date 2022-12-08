console.log("hello world")


const body = document.body
const head = document.head

const page = document.createElement('title')
page.innerText = "Doms 101"

head.append(page)

const h1 = document.createElement('h1')
h1.innerText = "This will be a recorded lesson"
const h2 = document.createElement('h2')

body.append(h1)
h1.setAttribute('id', 'title-page')

// document.body.append(document.createElement('h1'))

const timer = ms => new Promise(res => setTimeout(res, ms))

var backgroundColours = ['pink', 'brown', 'red', 'yellow', 'purple', '#32a852']




// body.style.backgroundColor = backgroundColours[random]




// selecting elements by their id
const title = document.getElementById('title-page')
// title.innerText = "Abdulkadir"


// Query selector
// const title = document.querySelector('h1')
// title.innerHTML = "something Else"

// console.log(title)


const ul = document.querySelector('ul')
// console.log(ul.children[2])
// console.log(ul.lastElementChild)

// ul.lastElementChild.innerText = "Tesla"




const carButton = document.getElementById('car');
const timeButton = document.getElementById('time');

function addCar(){
    const newCar = document.createElement('li')

    

    newCar.innerText = prompt("Add Car")
    console.log(typeof newCar.innerText)

    newCar.setAttribute('id', 'list-items')

    for(let i=0; i<ul.children.length; i++){
        console.log(ul.children[i].innerText)

        if (newCar.innerText.toLowerCase() === ul.children[i].innerText.toLowerCase()){
            alert("The car is already in the list")
            return false
        }
    }
    
    ul.append(newCar)

    console.log(ul.children.length)
}



carButton.addEventListener("click", addCar);


timeButton.addEventListener("click", function(e){
    const time = document.createElement('p')
    time.innerText = Date();

    body.append(time)
})

const backgroundButton = document.getElementById('color')

backgroundButton.addEventListener('click', function(e){



    var random = Math.floor(Math.random()*backgroundColours.length)
    console.log(random)


    

    body.style.backgroundColor = backgroundColours[random]
    

    h2.innerText = backgroundColours[random]
    body.append(h2)

    // currentBackgroundColour = backgroundColours[random]

    // if (backgroundColours[random].toLocaleLowerCase() === "yellow"){
    //     body.style.backgroundColor = '#1e1e27'
    // }
})


const formButton = document.getElementById('signup');

formButton.addEventListener('submit', function(e){
    
    e.preventDefault()
    
    var sentence = document.createElement('p')


    

    console.log(name)

     

    console.log(sentence)

    let firstName = checkName()
    let surname = checkSurname()
    console.log("This will be the return item gotten from the checkName function " + firstName + surname)

    sentence.innerText = "Hello " + firstName + " " + surname

    if (firstName != false && surname != false){
        body.append(sentence)
        console.log(sentence)
    }
})

function checkName(){
    const name = document.getElementById('name').value.trim()

    if (isString(name) === false){
        alert("Name can only contain letters")
    }else{
        return name;
    }

    return false
}

function checkSurname(){
    const name = document.getElementById('surname').value.trim()

    if (isString(name) === false){
        alert("Name can only contain letters")
    }else{
        return name;
    }

    return false
}

function isString(name){
    //regex for string
    const re = /^[a-zA-Z]+$/;
    return re.test(name)
}


const removeCar = document.getElementById('removeCar')

removeCar.addEventListener('click', function(e){
    let car = prompt("Which car would you like to remove?")

    // console.log(car)
    for(let i=0; i<ul.children.length; i++){
        // console.log(typeof ul.children[i].innerText)
        // console.log(typeof car)

        if (car.toLowerCase() === ul.children[i].innerText.toLowerCase()){
            ul.children[i].remove()
            alert("The car has been removed from the list")
            console.log("Item removed")
        }
    }
})

const toggleButton = document.getElementById('toggle')

toggleButton.addEventListener('click', function(e){
    // alert("Hello you have pressed the toggle button")

    // body.style.color = "orange"

    body.classList.toggle("font-colour");
})


//SEARCH BAR FILTER

const search = document.getElementById('search')
var filter = search



// search.addEventListener('keyup', function(e){
//     filter.value = filter.value.trim().toLowerCase()
//     console.log(filter.value)

//     item = filter.value

//     for(let i=0; i<ul.children.length; i++){
//         // console.log(typeof ul.children[i].innerText)
//         // console.log(typeof car)

//         if (ul.children[i].innerText.toLowerCase().indexOf(item) > -1) {
//             ul.children[i].style.display = "";
//         } else {
//             ul.children[i].style.display = "none";
//         }
//     }

// })

// console.log(filter)

const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', function(e){
    e.preventDefault()

    filter.value = filter.value.trim().toLowerCase()
    console.log(filter.value)

    item = filter.value

    console.log(filter.value)

    while (filter.value.trim() === ""){
        console.log("empty")
        break
    }
    

    for(let i=0; i<ul.children.length; i++){
        // console.log(typeof ul.children[i].innerText)
        // console.log(typeof car)

        if (ul.children[i].innerText.toLowerCase().indexOf(item) > -1) {
            ul.children[i].style.display = "";
        } else {
            body.append("Car not in the list")
            break
        }
    }
})