$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log(this);
        var value = $(this).siblings(".description").val();
        // Use this
        // var time = $(this).siblings(".hour").text();

        // Or this
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment());
});