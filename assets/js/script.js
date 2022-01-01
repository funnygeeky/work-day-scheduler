//Display the current day and time
var todayNow = moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss a");
var displayToday = document.getElementById("seeToday").innerHTML =todayNow;
displayToday;
console.log("displayToday");

//make function available after page load
$(document).ready(function() {
//Save button click listener
$(".saveBtn").on("click", function (){
    //get value of description
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //Save in local storage
    localStorage.setItem(time, text);
})
})

function timeTracker() {
    //get current hour
    var timeNow = moment().hour();

    //loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($this).attr("id").split("hour"[1]);
        
        //Check time and add class for color indication 
        //Past
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        //Present
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        //Future
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        }
    )
}
