//JavaScript source code for button clicker

var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Likes: " + count;
};