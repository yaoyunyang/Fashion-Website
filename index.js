$(function() {
    // document.getElementById("bgm").volume = 0.1;
    // document.getElementById("bgm").play();
    /*
        google 无法自动播放
    */
    // $(document).on('click', function() {
    //     document.getElementById("bgm").volume = 0.1;
    //     document.getElementById("bgm").play();
    // });
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
            // document.querySelector(".layer_mask").style.display = "block";
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
        // text = ['很幸运', '遇见了你们', '一群优秀可爱又负责的学长血迹', '很遗憾', '无法回学校', '在专场的舞台上送别你们', '......', '在这个特殊的时期', '请允许我们用这种方式表达感激与祝福', '因为你们', 'Fashion Crew变得越来越好', '因为你们', '我们拥有一段难忘的回忆', '......', '愿有前程可奔赴', '亦有岁月可回首']
        // var len = text.length;
        // var i = 1;
        $('.sp-content').css({
            display: 'flex'
        });
        $('.avatar').css({
            transition: 'top 2s ease-out',
            top: '100%'
        });

        // timeout = setInterval(function() {
        //     if (i < 5) {
        //         e = document.querySelector($('#center_text_' + i).selector)
        //         i++;
        //         e.style.opacity = 1;
        //         console.log(i);
        //         console.log(e);
        //     } else {
        //         clearInterval(timeout)
        //     }
        // }, 2000);
    })
})