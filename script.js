function show() {
    if (document.getElementById("1").className == "flip-card rounded") {
        document.getElementById("1").className = "flip-card rounded absolute";
        document.getElementById("2").className = "flip-card rounded absolute";
        document.getElementById("3").className = "flip-card rounded absolute";
        document.getElementById("4").className = "flip-card rounded absolute";
        document.getElementById("fade").innerText = "See More";
    } else {
        document.getElementById("1").className = "flip-card rounded";
        document.getElementById("2").className = "flip-card rounded";
        document.getElementById("3").className = "flip-card rounded";
        document.getElementById("4").className = "flip-card rounded";
        document.getElementById("fade").innerText = "Close";
    }
}