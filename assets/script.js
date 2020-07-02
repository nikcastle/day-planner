//Assignment code
var day = moment().format('dddd'); //day of the week
var date = moment().format("MMM Do, YYYY"); //date
var time = moment().format('h:mm a'); //current time
var hour = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm","4:00 pm","5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm" ]

//set display for current day of the week & date, add time as well
$("#currentDay").text(day);

$("#currentDate").text(date);

$("#currentTime").text(time);


//show timeblocks for standard business hours, 9:00 am - 5:00 pm
for( var i = 0; i < hour.length-1; i++) {
    var hourBlock = $("<div>");
    // hourBlock.addClass("");
    // hourBlock.attr("data-letter", hour[i]);
    hourBlock.text(hour[i]);
    $(".container").append(hourBlock);
}



//color code time blocks according to actual time, if it's 11:15 am, 11:00 hour will be red, 9:00 & 10:00 am will be grey, all later hours will be green

//create text input area within each timeblock

//create save button for each time block, this should save to local storage

//when page is refreshed, saved events are still visible