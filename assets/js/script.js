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
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
}

function gowInfo() {
    let x = document.getElementById("gow-trailer");
    let y = document.getElementById("wtb-map");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
}

function unchartedInfo() {
    let x = document.getElementById("uncharted-trailer");
    let y = document.getElementById("wtb-map");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block"
    }
}


