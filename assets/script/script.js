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


function timeSection(currentHour, pastHour, thisHour) {
    var timeBlock = $('<div />');
    timeBlock.addClass('row time-clock');

    //makes div for the hours
    var hourDiv = $('<div />');
    hourDiv.addClass('hour col-md-1 col-sm-2 col-2');
    hourDiv.append(thisHour);
    timeBlock.append(hourDiv);

    //div for the user input
    var userInput = $('<textarea />');
    
    //change colour of div based on corresponding time
    if (pastHour < currentHour) {
        userInput.addClass('past col-md-10 col-sm-8 col-6');
    } else if (currentHour === pastHour) {
        userInput.addClass('present col-md-10 col-sm-8 col-6');
    } else {
        userInput.addClass('future col-md-10 col-sm-8 col-6');
    }
    timeBlock.append(userInput);

    //div for the user to save their data
    var saveData = $('<div />');
    saveData.addClass('saveBtn')
    
    timeBlock.append(saveData);



    var container = $('.container');
    container.append(timeBlock);

    
    


}

var now = moment().format('H');
for (i in timeArray) {
    var showTime = moment(timeArray[i], ['hA']).format('HH');
    timeSection(now, showTime, timeArray[i]);
}

console.log(timeArray)

