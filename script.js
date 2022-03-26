
let today = [
    {
        id: "1",
        hour: "9"
    },
    {
        id: "2",
        hour: "10"

    },
    {
        id: "3",
        hour: "11"
    },
    {
        id: "4",
        hour: "12"
    },
    {
        id: "5",
        hour: "13"
    },
    {
        id: "6",
        hour: "14"

    },
    {
        id: "7",
        hour: "15",
    },
    {
        id: "8",
        hour: "16",
    },
    {
        id: "9",
        hour: "17",
    },

]
//////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////////////






update = function () {
    let timeNow = document.querySelector("#datetime")
    timeNow.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000)



///////////////////////////////////////////////////////////////////////////////////////

function classSetter() {

    let currentTime = moment().format('H')

    for (i = 9; i < 18; i++) {
        let selector = '[hour="' + i + '"]'
        let theRow = document.querySelector(selector)
        console.log(123123)
        // debugger


        if (i < currentTime) {
            // theRow.setAttribute('style', 'background-color: pink');
            theRow.classList.add("past")
        }
        else if (i > currentTime) {
            theRow.classList.add('future')
        }
        else{
            theRow.classList.add('present')
        }



        // if (theRow < currentTime) {
        //     rowsArray[i].setAttribute("style", "background-color: #d3d3d3");
        //     rowsArray[i].setAttribute("style", "font-color: white");
        //     console.log(rowsArray[i])
        // }
        // else if (theRow > currentTime) {
        //     rowsArray[i].setAttribute("style", "background-color: #77dd77");
        //     rowsArray[i].setAttribute("style", "font-color: white");
        //     console.log(rowsArray[i])
        // }
        // else if (theRow == currentTime) {
        //     rowsArray[i].setAttribute("style", "background-color:  #ff6961");
        //     rowsArray[i].setAttribute("style", "font-color: white")
        //     console.log(rowsArray[i])

        // }
    }
}

classSetter()
