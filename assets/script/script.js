//Array of times that will be used
var timeArray = [
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",
]
//inserts the current date to DOM
document.getElementById('currentDay').textContent = moment().format('dddd, MMMM Do');


function timeSection() {
    var timeBlock = $('<div />');
    timeBlock.addClass('row time-clock');
    console.log(timeBlock);



}

