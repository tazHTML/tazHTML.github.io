var counter = 3
var win = Math.floor(Math.random()*12)
var losing = Math.floor(Math.random()*12)

function treasure(location) {

    if (location === win) {
        document.getElementById(location).innerHTML = "🍕"
        alert("WIN 🍕😍")
    }
    else if (location === losing) {
        document.getElementById(location).innerHTML = "👎"
        alert("NO PIZZA 4 U 😎")
    }
    else {
        document.getElementById(location).innerHTML = "🤷‍"
        counter = counter -1
        //document.getElementById("theCounter").innerHTML = "counters left: "+counter
        document.getElementById("theCounter").innerHTML = `Counters Left: ${counter}`
        if (counter === 0) {
            alert("Too Many Tries")
        }


    }



}
