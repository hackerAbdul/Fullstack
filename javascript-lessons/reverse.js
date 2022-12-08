function split(variable){
    str = variable+""
    result = str.split("")
    return result
}

function reverse(variable){
    number = split(variable)
    res = number.reverse().join("")
    return res
}


function add(var1,var2){
    var1 = reverse(var1)
    // console.log(typeof var1)
    console.log(parseInt(var1)+var2)
}




add(1234,23452345467);

console.log(23452345467+4321)