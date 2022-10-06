//$("body").css("background-color", "lightblue");

$("body").addClass("bg-primary bodyFont");

$("#textInput").keyup(function () {
    console.log("Key Up");
    $("#appendDiv").append("<p>" + $("#textInput").val() + "</p>")
});