function getParagraph1() {
    var l = [];
    for (var a = 1; a <= 4; a++) {
        l.push(document.getElementById("k" + a).value);
    }
    document.getElementById("p1").innerHTML = l.join(". ");
}

function getParagraph2() {
    var m = [];
    for (var b = 1; b <= 4; b++) {
        m.push(document.getElementById("j" + b).value);
    }
    document.getElementById("p2").innerHTML = m.join(". ");
}