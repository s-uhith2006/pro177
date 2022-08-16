let words=[
    {
        "input":5,
        "category":"sports",
        "word":"chess"
    },
    {
        "input":6,
        "category":"european country name",
        "word":"france"
    }
]


$(function () {
    fillBlanks();
})
var gameOver=false
$(".clickable").click(function () {
    var correctGuess=false;

    let id=$(this).attr("id");

    var life=parseInt($("#life").text())

    for (let i = 0; i < randomWord.word.length; i++) {
        if (randomWord.word.charAt(i).toLowerCase()==id) {
            if (life>0 && ($(".fill_blanks").eq(i).html()=="_"|| $(".fill_blanks").eq(i).html()==id)) {
                $(".fill_blanks").eq().html();
                correctGuess=true;

                if ($("#blanks").text()===randomWord.word.toLowerCase()) {
                    $("#results").text("you win!!")
                    correctGuess=true;
                    gameOver=true
                }
            }
        }
        
    }
})