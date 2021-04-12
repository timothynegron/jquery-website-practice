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

    // ┌──────────────────────────────────┐
    // │   Adding elements using jQuery   │	
    // └──────────────────────────────────┘
    // Create a button element before the h1 element (outside h1)
    $("h1").before("<button>Before New Button</button>");

    // Create a button element after the h1 element (outside h1)
    $("h1").after("<button>After New Button</button>");

    // Create just after the opening tag (Inside h1)
    $("h1").prepend("<button>Prepend New Button</button>");

    // Create just before the ending tag (Inside h1)
    $("h1").append("<button>Append New Button</button>");

    // Get rid of all the elements
    //$("button").remove();
    $("input").after("<br><br><button id=\"remove-button\">Remove All Buttons</button>");
    $("#remove-button").on("click", function(){
        $("button").remove();
    });

    // ┌────────────────────────────────────┐
    // │   Adding animations using jQuery   │	
    // └────────────────────────────────────┘
    //let isVisible = true;
    $("#remove-button").after("<br><br><button id=\"hide-button\">Toggle H1</button>");
    $("#hide-button").on("click", function(){
        $("h1").slideUp().slideDown().animate({opacity: 0.5});

        // if(isVisible){
        //     $("h1").hide();
        //     $("#hide-button").text("Show h1")
        //     isVisible = false;
        // }else{
        //     $("h1").show();
        //     $("#hide-button").text("Hide h1")
        //     isVisible = true;
        // }
    });

    // .fadeOut()
    // .fadeIn()
    // .fadeToggle()

    // .slideOut()
    // .slideIn()
    // .slideToggle()

    // $("h1").animate({opacity: 0.5});

});
