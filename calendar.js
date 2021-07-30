$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    var currentx = moment().format("H");

    x.forEach(function (x, index) {
        var startx = [];
        startx.push(moment().hour(x).format("h A"));
        console.log(parseInt(startx));

        console.log(moment().hour());

    $("button").on("click", function (event) {
        event.preventDefault();

        var textInput = $(this).siblings("input").attr("data");
        var textVal = $(this).siblings("input").val();
        localStorage.setItem(textInput, textVal);
        var lsVal = localStorage.getItem(textInput);
        $(this).siblings("input").text(lsVal);
    }}};
