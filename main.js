
// Wait till document is ready before calling this code
// If you add script tag at bottom of document, this is not needed
$(document).ready(function() {

    // ┌─────────────────────────────────────────────┐
    // │   Use . notation to access jQuery Methods   │	
    // └─────────────────────────────────────────────┘

    // ┌──────────────────────────────────────────────────┐
    // │   Change h1 color to red using the .css method   │	
    // └──────────────────────────────────────────────────┘
    // If only first inputs then get
    // If two inputs then set
    // $("h1").css("color", "green");

    // Selects all buttons
    $("button").css("color", "blue");

    // ┌───────────────────────────────────────────────┐
    // │   Change elements styling by adding a class   │	
    // └───────────────────────────────────────────────┘
    $("h1").addClass("big-title margin-50");

    // ┌─────────────────────────────────────────────────┐
    // │   Change elements styling by removing a class   │	
    // └─────────────────────────────────────────────────┘
    //$("h1").removeClass("big-title");

    // ┌──────────────────────────────────┐
    // │   Check if element has a class   │	
    // └──────────────────────────────────┘
    //$("h1").hasClass("margin-50"); // Returns true

    // ┌─────────────────────────────┐
    // │   Change the elements text  │	
    // └─────────────────────────────┘
    $("h1").text("Bye");

    // ┌────────────────────────────────────┐
    // │   Change the text on the buttons   │	
    // └────────────────────────────────────┘
    $("button").text("Don't Click Me");

    // ┌────────────────────────────────────────────┐
    // │   Change the text by adding html elements  │	
    // └────────────────────────────────────────────┘
    $("button").html("<em>Hey</em>");

    // ┌────────────────────────────────────────┐
    // │   Manipulate attributes using jQuery   │	
    // └────────────────────────────────────────┘
    $("a").attr("href", "https://www.yahoo.com");

    // ┌─────────────────────────────────────────┐
    // │   Adding Event Listeners using jQuery   │	
    // └─────────────────────────────────────────┘
    // Click listener for H1
    $("h1").click(function() {
        $("h1").css("color", "purple");
    })

    // Click listener for button
    $("button").click(function() {
        $("h1").css("color", "purple");
    })

    // With Out jQuery
    // for(let i = 0; i < 5; i++){
    //     document.querySelectorAll("button")[i].addEventListener("click", function() {
    //         document.querySelector("h1").style.color = "purple";
    //     })
    // }

    // Listen to keys typed on input
    $("input").keypress(function(event){
        console.log(event.key);
    })

    // Listen to all keys
    $(document).keypress(function(event){
        console.log(event.key);
    })

    // Show key in h1
    $(document).keypress(function(event){
        $("h1").text(event.key);
    })

    // Instead of .keypress or .click you can use .on("")
    // Event and callback function (function() {// What to do when event occurs})
    $("h1").on("mouseover", function(){
        $("h1").css("color", "blue");
    })
});
