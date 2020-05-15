function show_input() {
    document.getElementById("input_rectangle").style.display = "inline-block";
    document.getElementById("enter").style.display = "none";
    document.querySelector(".confirm-btn").style.display = "inline-block";
}

function confirm() {
    name_list = ['zl', 'hyp', 'wzx', 'lzy', 'lwk', 'yxy', 'wl', 'cj', 'cyx', 'hh', 'qdy', 'hjc', 'zzq', 'hz', 'gws', 'zzr', 'mxl', 'nrx', 'gwj', 'kyl', 'ljy', 'hzb', 'wzg', 'yh', 'zf', 'zgb', 'ly', 'zt', 'wyz', 'zb'];
    input_value = document.getElementById("input_rectangle").value;
    if (name_list.indexOf(input_value) == -1) {
        alert('you are not graduate for fashion crew');
    } else {
        document.getElementById("imagePreview").style.backgroundImage = "url(http://39.102.67.244/wp-content/uploads/2020/05/avatar/" + input_value.toLowerCase() + ".jpg)";
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".avatar").style.opacity = 1;
        document.getElementById("graduate_name").innerHTML = input_value.toUpperCase();
    }
    // alert(document.getElementById("imagePreview").style.backgroundImage)
}

function get_value() {
    input_value = document.getElementById("input_rectangle").value;
    if (input_value == "") {
        document.getElementById("input_rectangle").placeholder = "name";
    }
}