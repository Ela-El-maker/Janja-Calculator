function addChar(character) {
    document.getElementById('display').value += character;
}

function cos() {
    document.getElementById('display').value = Math.cos(document.getElementById('display').value);
}

function sin() {
    document.getElementById('display').value = Math.sin(document.getElementById('display').value);
}

function tan() {
    document.getElementById('display').value = Math.tan(document.getElementById('display').value);
}

function sqrt() {
    document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}

function exp() {
    document.getElementById('display').value = Math.exp(document.getElementById('display').value);
}

function deleteChar() {
    var value = document.getElementById('display').value;
    document.getElementById('display').value = value.substring(0, value.length - 1);
}

var val = 0.0;
function percent() {
    val = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value += "%";
}

function changeSign() {
    var value = document.getElementById('display').value;
    if (value.substring(0, 1) == "-")
        document.getElementById('display').value = value.substring(1, value.length);
    else
        document.getElementById('display').value = "-" + value;
}

function compute() {
    var value = document.getElementById('display').value;
    document.getElementById('display').value = eval(value);
}

function square() {
    var value = document.getElementById('display').value;
    document.getElementById('display').value = eval(value) * eval(value);
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!");
                return false;
            }
        }
    }
    return true;
}