$(function() {
    $('.avatar').on('click', function() {
        document.getElementById("audio").play();
        // 在扩展闪光动画未结束前就消失(防止缩小)
        document.querySelector(".light").style.animation = '10s flash';
        document.querySelector(".light").style.opacity = 0;
        // $('.avatar').addClass('open');
        document.querySelector(".avatar").style.display = "none";
        document.querySelector("img").style.opacity = 1;
    });
    // added code to close the modal if you click outside
    // $('html').click(function() {
    //     $('.avatar').removeClass('open');
    // });

    $('.avatar').click(function(event) {
        event.stopPropagation();
    });
});