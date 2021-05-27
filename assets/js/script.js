//dont want videos to load straight away, only when links are clicked should they appear  
//also don't want google map to load straight away
window.onload = function() {
    document.getElementById("uncharted-trailer").style.display="none";
    document.getElementById("wtb-map").style.display="none";
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


