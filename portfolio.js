$(document).ready(function () {
    $(".web").click(function(){
        $(".bloc-web").show();
        $(".bloc-graphisme, .bloc-vidéos, .bloc-divers").hide();
    })

    $(".graphisme").click(function(){
        $(".bloc-graphisme").show();
        $(".bloc-web, .bloc-vidéos, .bloc-divers").hide();
    })

    $(".vidéos").click(function(){
        $(".bloc-vidéos").show();
        $(".bloc-graphisme, .bloc-web, .bloc-divers").hide();
    })

    $(".divers").click(function(){
        $(".bloc-divers").show();
        $(".bloc-graphisme, .bloc-vidéos, .bloc-web").hide();
    })

    var carousel = $(".caroussel"),
        items = $(".item"),
        currdeg = 0;

    $(".droite").on("click", {
        d: "n"
    }, rotate);
    $(".gauche").on("click", {
        d: "p"
    }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 120
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 120;
        }
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
        items.css({
            "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
            "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
            "-o-transform": "rotateY(" + (-currdeg) + "deg)",
            "transform": "rotateY(" + (-currdeg) + "deg)"
        });
    }

})
