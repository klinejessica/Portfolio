$(document).ready(function() {
    getQuote();
    colorRandomizer();
    function getQuote() {
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
        $.getJSON(url, function(data) {
            // store the quote and author in var
            var currentQuote = data.quoteText;
            var currentAuthor = data.quoteAuthor;

            // add them to HTML
            $("#quoteText").html(currentQuote);
            $("#quoteAuthor").html("~ " + currentAuthor);
        });
    }

    // NEW QUOTE
    $("#new-quote").on("click", function () {
        //run color randomizer and get quote
        colorRandomizer();
        getQuote();
    });

    //Color Randomizer
    function colorRandomizer() {
        var myColors = ['#827AC4',
        '#937FBB',
        '#BE8ABF',
        '#EA9ABB',
        '#FEA5AD',
        '#F8C3AF'];
        var randomNum = Math.floor(Math.random() * myColors.length);

        var randomColor = myColors[randomNum];
        // modify ng and txt color with my color
        $(".randomBgColor").css("background-color", randomColor);
        $(".randomtxtColor").css("color", randomColor);
    }
});