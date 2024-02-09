// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateButton").click(function (e) {
        e.preventDefault(); // Prevent default form submission behavior
        var hours = $("#hours").val();
        if (hours <= 0) {
            let message = "You must enter a number greater than 0.";
            alert(message);
        } else {
            var rate = 15;
            var total = hours * rate;
            $("#output").val('$' + total);
        }
    });
});