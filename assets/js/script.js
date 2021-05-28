//dont want videos to load straight away, only when links are clicked should they appear  
//also don't want google map to load straight away
window.onload = function() {
    document.getElementById("tlou-trailer").style.display="none";
    document.getElementById("gow-trailer").style.display="none";
    document.getElementById("uncharted-trailer").style.display="none";
    document.getElementById("wtb-map").style.display="none";
}

function tlouInfo() {
    let x = document.getElementById("tlou-trailer");
    let y = document.getElementById("wtb-map");
    let z = document.getElementById("gow-trailer");
    let t = document.getElementById("uncharted-trailer");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    }
    if (t.style.display === "block") {
        t.style.display = "none";
    }
}

function gowInfo() {
    let x = document.getElementById("gow-trailer");
    let y = document.getElementById("wtb-map");
    let z = document.getElementById("tlou-trailer");
    let t = document.getElementById("uncharted-trailer");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    }
    if (t.style.display === "block") {
        t.style.display = "none";
    }
}

function unchartedInfo() {
    let x = document.getElementById("uncharted-trailer");
    let y = document.getElementById("wtb-map");
    let z = document.getElementById("gow-trailer");
    let t = document.getElementById("tlou-trailer");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    }
    if (t.style.display === "block") {
        t.style.display = "none";
    }
}
//The Last of Us link mouse actions
$(".tlou-info").mouseenter(function(){
    $(".tlou-info").css("background-color", "rgb(102, 252, 241)");
    $(".tlou-info").css("color", "rgb(11, 12, 16)");
});

$(".tlou-info").mouseleave(function(){
    $(".tlou-info").css("background-color", "rgb(11, 12, 16)");
    $(".tlou-info").css("color", "rgb(197, 198, 199)");
});


//God of War link mouse actions
$(".gow-info").mouseenter(function(){
    $(".gow-info").css("background-color", "rgb(102, 252, 241)");
    $(".gow-info").css("color", "rgb(11, 12, 16)");
});

$(".gow-info").mouseleave(function(){
    $(".gow-info").css("background-color", "rgb(11, 12, 16)");
    $(".gow-info").css("color", "rgb(197, 198, 199)");
});


//Uncharted link mouse actions
$(".uncharted-info").mouseenter(function(){
    $(".uncharted-info").css("background-color", "rgb(102, 252, 241)");
    $(".uncharted-info").css("color", "rgb(11, 12, 16)");
});

$(".uncharted-info").mouseleave(function(){
    $(".uncharted-info").css("background-color", "rgb(11, 12, 16)");
    $(".uncharted-info").css("color", "rgb(197, 198, 199)");
});

