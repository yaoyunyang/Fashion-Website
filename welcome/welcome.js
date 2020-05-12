function show_input() {
    document.getElementById("input_rectangle").style.display = "inline-block";
    document.getElementById("enter").style.display = "none";
    document.querySelector(".confirm-btn").style.display = "inline-block";
}

function confirm() {
    input_value = document.getElementById("input_rectangle").value;
    alert(input_value);
}

function get_value() {
    input_value = document.getElementById("input_rectangle").value;
    if (input_value == "") {
        document.getElementById("input_rectangle").placeholder = "name";
    }
}