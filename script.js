$(document).ready(function() {
    var currentTime = moment().local().format("dddd, MMMM Do YYYY, hh:mm a");
    $("#currentDay").text(currentTime);



    for (var i = 9; i < 18; i++) {
        var blockTime = i;
        //   checkTime(blockTime);
    }



    // function checkTime(time) {
    //     if (currentTime == time) {
    //         // color is red
    //         $("#" + [time]).attr("class", "col-md-10 description present");
    //     } else if (currentTime >= time) {
    //         // color is gray
    //         $("#" + [time]).attr("class", "col-md-10 description past");
    //     } else {
    //         // color is green
    //         $("#" + [time]).attr("class", "col-md-10 description future");
    //     }
    // }






    $(".saveBtn").on("click", function() {
        //console.log(this);

        var value = $(this).siblings(".description").val();
        // Use this
        // var time = $(this).siblings(".hour").text();
        // Or this
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, JSON.stringify(value));
    });

    for (var i = 9; i < 18; i++) {
        setColor($("." + i), i);
        var retrieve = localStorage.getItem("hour-" + i);
        if (retrieve !== null) {
            console.log("HELLO");
            // $("#" + i).text(retrieve);
            //$("." + i).append(JSON.parse(retrieve));
        }
    }

    function setColor(textarea, number) {
        if (new Date().getHours() > number) {
            textarea.addClass("past")
        } else if (new Date().getHours() === number) {
            textarea.addClass("present")
        } else {
            textarea.addClass("future")
        }
    }

});