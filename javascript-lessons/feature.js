const carButton = document.getElementById('car')

carButton.addEventListener('click', function(e){
    const newCar = document.createElement('li')

    newCar.innerText = prompt("Add Car to list")

    for (let i=0; i<ul.children.length; i++){
        console.log(ul.children[i].innerText)

        if (newCar.innerText.toLowerCase() === ul.children[i].innerText.toLowerCase()){
            alert("This car is already in the list add a diff car")
            return false
        }
    }
    

    newCar.setAttribute('id', 'list-items')

    ul.append(newCar)
})

array = ['pink', 'brown', 'red', 'yellow', 'purple']


Colour = prompt("Add colour to list")
newColour = Colour.trim()

if (newColour !== ""){
    array.push(newColour);
}


const backgroundButton = document.getElementById('background');

backgroundButton.addEventListener('click', function(e){

    


    var random = Math.floor(Math.random()*array.length)

    

    body.style.backgroundColor = array[random]

    console.log(random)
    console.log(array.length)
    console.log(array)
    console.log(array[random])

    // currentBackgroundColour = backgroundColours[random]

    // if (backgroundColours[random].toLocaleLowerCase() === "yellow"){
    //     body.style.backgroundColor = '#1e1e27'
    // }
})





const pressButton = document.getElementById('press')
