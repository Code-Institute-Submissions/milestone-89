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

let moreInfo = document.getElementsByTagName("a")

function changeInfoButtonColor() {
    this.style.backgroundColor = "blue";
}

moreInfo.addEventListener('mouseover', changeInfoButtonColor);


