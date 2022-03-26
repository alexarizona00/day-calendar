update = function () {
    let timeNow = document.querySelector("#datetime")
    timeNow.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000)


// function to set classes

///////////////////////////////////////////////////////////////////////////////////////

function classSetter() {

    let currentTime = moment().format('H')

    for (i = 9; i < 18; i++) {
        let selector = '[hour="' + i + '"]'
        let theRow = document.querySelector(selector)
                // debugger


        if (i < currentTime) {
            // theRow.setAttribute('style', 'background-color: pink');
            theRow.classList.add("past")
        }
        else if (i > currentTime) {
            theRow.classList.add('future')
        }
        else {
            theRow.classList.add('present')
        }
    }
}

classSetter()

let bnine = document.getElementById("buttnine");
let bten = document.getElementById("buttten")
let beleven = document.getElementById("butteleven")
let btwelve = document.getElementById("butttwelve")
let bthirteen = document.getElementById("buttthirteen")
let bfourteen = document.getElementById("buttfourteen")
let bfifteen = document.getElementById("buttfifteen")
let bsixteen = document.getElementById("buttsixteen")
let bseventeen = document.getElementById("buttsteen")

bnine.addEventListener("click", function () {
    var message = document.getElementById("9text").value;
    //localStorage
    localStorage.setItem("9text", message);
    alert("9am description saved");

}, false);
bten.addEventListener("click", function () {
    var message = document.getElementById("10text").value;
    //localStorage
    localStorage.setItem("10text", message);
    alert("10am description saved");

}, false);
beleven.addEventListener("click", function () {
    var message = document.getElementById("11text").value;
    //localStorage
    localStorage.setItem("11text", message);
    alert("11am description saved");

}, false);
btwelve.addEventListener("click", function () {
    var message = document.getElementById("12text").value;
    //localStorage
    localStorage.setItem("12text", message);
    alert("12 Noon description saved");

}, false);
bthirteen.addEventListener("click", function () {
    var message = document.getElementById("13text").value;
    //localStorage
    localStorage.setItem("13text", message);
    alert("1pm description saved");

}, false);
bfourteen.addEventListener("click", function () {
    var message = document.getElementById("14text").value;
    //localStorage
    localStorage.setItem("14text", message);
    alert("2pm description saved");

}, false);
bfifteen.addEventListener("click", function () {
    var message = document.getElementById("15text").value;
    //localStorage
    localStorage.setItem("15text", message);
    alert("3pm description saved");

}, false);
bsixteen.addEventListener("click", function () {
    var message = document.getElementById("16text").value;
    //localStorage
    localStorage.setItem("16text", message);
    alert("4pm description saved");

}, false);
bseventeen.addEventListener("click", function () {
    var message = document.getElementById("17text").value;
    //localStorage
    localStorage.setItem("17text", message);
    alert("5pm description saved");

}, false);


function displayStoredData() {
    for (i = 9; i < 18; i++) {

        let storedValue = localStorage.getItem(i +'text')
        document.getElementById(i +'text').textContent = storedValue

        console.log(storedValue)
    }

}

displayStoredData()



//     // saves data to localStorage
// function saveReminders() {
//     localStorage.setItem("myDay", JSON.stringify(myDay));
// }

// // sets any data in localStorage to the view
// function displayReminders() {
//     myDay.forEach(function (_thisHour) {
//         $(`#${_thisHour.id}`).val(_thisHour.reminder);
//     })
// }

// // sets any existing localStorage data to the view if it exists
// function init() {
//     var storedDay = JSON.parse(localStorage.getItem("myDay"));

//     if (storedDay) {
//         myDay = storedDay;
//     }

//     saveReminders();
//     displayReminders();
// }