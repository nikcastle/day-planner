//Assignment code
var day = moment().format('dddd'); //day of the week
var date = moment().format("MMM Do, YYYY"); //date
var time = moment().format('h:mm a'); //current time
var currentHour = moment().format('H');
var hour = ["9:00 am", 
"10:00 am", 
"11:00 am",
 "12:00 pm", 
 "1:00 pm", 
 "2:00 pm", 
 "3:00 pm",
 "4:00 pm",
 "5:00 pm", 
 "6:00 pm", 
 "7:00 pm", 
 "8:00 pm", 
 "9:00 pm", 
 "10:00 pm", 
 "11:00 pm"
]

//set display for current day of the week & date, add time as well
$("#currentDay").text(day);

$("#currentDate").text(date);

$("#currentTime").text(time);


//show timeblocks for standard business hours, 9:00 am - 5:00 pm
for( var i = 0; i < hour.length; i++) {
    var hourBlock = $("<div>");
    var hour24 = i + 9;
    var p = $("<p>");
    hourBlock.addClass("hour row time-block");
    hourBlock.attr("data-hour", hour[i]);
    p.text(hour[i]).addClass("col-md-2");
    // console.log(hour24);
    // console.log(currentHour);
    
    //color code time blocks according to actual time, if it's 11:15 am, 11:00 hour will be gold, 9:00 & 10:00 am will be grey, all later hours will be green
    if (hour24 < parseInt(currentHour)) {
        hourBlock.addClass("past");
    } else if (hour24 > parseInt(currentHour)) {
        hourBlock.addClass("future")
        
    } else {
        hourBlock.addClass("present")
    }
    
    //create text input area within each timeblock
    var textArea = $("<textarea>").addClass("col-md-9");

    //create save button for each time block, this should save to local storage
    var saveBtn = $("<div>").addClass("col-md-1 saveBtn").text("Save");
    // var image = $("<img src=>");

    
    hourBlock.append(p, textArea, saveBtn);
    $(".container").append(hourBlock);
    var task = localStorage.getItem(hour[i]);
    textArea.val(task);
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log(hour[i], textArea.val());
    console.log(saveBtn);
    
    var task = $(this).siblings("textarea").val();
    var key = $(this).siblings("p").text();
    localStorage.setItem(key, task)
})

//when page is refreshed, saved events are still visible



