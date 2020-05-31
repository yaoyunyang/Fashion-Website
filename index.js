$(function() {
    var flag = 0;
    $('#enter').on('click', function() {
        document.getElementById("input_rectangle").style.display = "inline-block";
        document.getElementById("enter").style.display = "none";
        document.querySelector(".confirm-btn").style.display = "inline-block";
    });

    $('#confirm_btn').on('click', function() {
        var name_list = ['zl', 'hyp', 'wzx', 'lzy', 'lwk', 'yxy', 'wl', 'cj', 'cyx', 'hh', 'qdy', 'hjc', 'zzq', 'hz', 'gws', 'zzr', 'mxl', 'nrx', 'gwj', 'kyl', 'ljy', 'hzb', 'wzg', 'yh', 'zf', 'zgb', 'ly', 'zt', 'wyz', 'zb'];
        var input_value = document.getElementById("input_rectangle").value;
        if (name_list.indexOf(input_value) == -1) {
            if (input_value == 'vistor') {
                document.querySelector(".welcome").style.display = "none";
                document.querySelector(".avatar").style.opacity = 1;
            } else {
                document.querySelector(".layer_mask").style.width = "100%";
                document.querySelector(".layer_mask").style.transition = "width 1s ease";
                document.querySelector(".welcome").style.opacity = 0;
                flag = 1;
            }
        } else {
            document.getElementById("imagePreview").style.backgroundImage = "url(https://fashion13.oss-cn-beijing.aliyuncs.com/Q_avatar/" + input_value.toLowerCase() + ".jpg)";
            document.querySelector(".welcome").style.display = "none";
            document.querySelector(".avatar").style.opacity = 1;
            document.getElementById("graduate_name").innerHTML = input_value.toUpperCase();
        }
    });

    $('#input_rectangle').blur(function() {
        var input_value = document.getElementById("input_rectangle").value;
        if (input_value == "") {
            document.getElementById("input_rectangle").placeholder = "name";
        }
    });

    $('.layer_mask').on('click', function() {
        if (flag == 1) {
            console.log('hello world');
            document.querySelector(".layer_mask").style.width = 0;
            document.querySelector(".layer_mask").style.transition = "none";
            document.querySelector(".welcome").style.opacity = 1;
            flag = 0;
        }
    })

    $('.next_btn').on('click', function() {
        $('.sp-content').css({
            display: 'flex'
        });
        $('.avatar').css({
            transition: 'top 2s ease-out',
            top: '100%'
        });
    })
})