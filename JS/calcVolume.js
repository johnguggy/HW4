// JavaScript source code

function getVolume(length, width, height) {
    var volume = width * length * height;
    return volume;
}

function startProcess() {
    var result;
    for (var i = 1; i <= 10; i++) {
        result = getVolume(i + 2, i + 3, i + 4);
        if (result >= 0 && result <= 300) {
            document.write("Small Volume: " + result + "<br>");
        }
        else if (result >= 301 && result <= 600) {
            document.write("Medium Volume: " + result + "<br>");
        }
        else if (result >= 601 && result <= 1000) {
            document.write("Large Volume: " + result + "<br>");
        }
        else { document.write("Extra Large Volume: " + result + "<br>") }
    }
    
}