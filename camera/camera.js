$(function() {
    document.getElementById("bgm").volume = 0.1;
    /*
        google 无法自动播放
    */
    $(document).on('click', function() {
        document.getElementById("bgm").volume = 0.1;
        document.getElementById("bgm").play();
    });
    $('.avatar').on('click', function() {
        document.getElementById("bgm").volume = 0.1;
        document.getElementById("bgm").play();
        document.getElementById("audio").play();
        // 在扩展闪光动画未结束前就消失(防止缩小)
        document.querySelector(".light").style.animation = '10s flash';
        document.querySelector(".light").style.opacity = 0;
        // $('.avatar').addClass('open');
        document.querySelector(".avatar").style.display = "none";
        document.querySelector(".sp-content").style.display = "none";
        document.querySelector(".cover img").style.opacity = 1;
        document.querySelector(".the-end1").style.animation = 'imageAnimation1 10s ease-in 5s';
        document.querySelector(".the-end2").style.animation = 'imageAnimation1 10s ease-in 5s';
        document.querySelector("#the_end").style.animation = 'imageAnimation2 10s ease-in 5s';
    });
    // added code to close the modal if you click outside
    // $('html').click(function() {
    //     $('.avatar').removeClass('open');
    // });

    $('.avatar').click(function(event) {
        event.stopPropagation();
    });
});