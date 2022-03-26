let nineAm = document.getElementsByClassName('r1')
let tenAm = document.getElementById('r2')
let elevenAm = document.getElementById('r3')
let noon = document.getElementById('r4')
let onePm = document.getElementById('r5')
let twoPm = document.getElementById('r6')
let threePm = document.getElementById('r7')
let fourPm = document.getElementById('r8')
let fivePm = document.getElementById('r9')

let rowsArray = [nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm]

let currentTime = moment().format('H')

update = function () {
    let timeNow = document.querySelector("#datetime")
    timeNow.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000)

for (i = 0; i < rowsArray.length; i++) {

    let theRow = rowsArray[i].getAttribute('id')

    if (theRow < currentTime) {
        rowsArray[i].setAttribute("style", "background-color: #d3d3d3");
        rowsArray[i].setAttribute("style", "font-color: white");
        console.log(rowsArray[i])
    }
    else if (theRow > currentTime) {
        rowsArray[i].setAttribute("style", "background-color: #77dd77");
        rowsArray[i].setAttribute("style", "font-color: white");
        console.log(rowsArray[i])
    }
    else if ( theRow == currentTime) {
        rowsArray[i].setAttribute("style", "background-color:  #ff6961");
        rowsArray[i].setAttribute("style", "font-color: white")
        console.log(rowsArray[i])

    }

}


