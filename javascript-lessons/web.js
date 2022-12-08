const body = document.body
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
const para = document.createElement("p")

array = ["pink", "blue","green", "orange", "red"]

console.log(array)

random = Math.floor(Math.random()*5)
console.log(random)

color = array[random]
console.log(color)


h1.innerText = "Lesson 1"
h2.innerText = "We are learning about DOMs"
para.innerText = "This will change the background colour to " + color


body.append(para)
body.append(h1)
body.append(h2)





body.style.backgroundColor = color;