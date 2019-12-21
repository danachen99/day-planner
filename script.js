$(document).ready(function() {
    var currentTime = moment().local().format("dddd, MMMM Do YYYY, hh:mm a");
    $("#currentDay").text(currentTime);

    function setColor(textarea, number) {
        if (new Date().getHours() > number) {
            textarea.addClass("past");
        } else if (new Date().getHours() === number) {
            textarea.addClass("present");
        } else {
            textarea.addClass("future");
        }
    }

    function retrieveStorage() {
        for (var i = 9; i < 18; i++) {
            setColor($("." + i), i);
            var retrieve = localStorage.getItem("hour-" + i);
            if (retrieve !== null) {
                $("." + i).text(JSON.parse(retrieve));
            }
        }
    }

    retrieveStorage();

    $(".saveBtn").on("click", function() {
        //console.log(this);

        var value = $(this).siblings(".description").val();
        // Use this
        // var time = $(this).siblings(".hour").text();
        // Or this
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, JSON.stringify(value));
    });


});