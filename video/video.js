$(function() {
    var $moveable = $('.layer--movable'),
        $player = $(".item__play"),
        $playerItem = $(".player .item"),
        $previewInner = $(".preview__inner"),
        $video = $("#preview-video");
    $(document).mousemove(function(e) {
        $moveable.css({ 'top': e.pageY - 12, 'left': e.pageX - 12 });
    });
    $player.on("click", function(e) {
        e.preventDefault();
        $moveable.css({ display: 'none' });
        $player.css({ display: 'none' });
        /*
             是否加滤镜
        */
        // $('.layer--overlay').css({ display: 'none' });
        /*视频播放完毕后需要自动进入下个part */
        new TimelineLite({
                onStart: function() {
                    $video[0].currentTime = 0;
                    $video.prop("muted", false);
                }
            })
            .add("start")
            .to($playerItem, 1.2, {
                scale: 2,
                autoAlpha: 0,
                ease: Power4.easeOut
            }, "start")
            .to($('.player'), 1.2, {
                scale: 2,
                autoAlpha: 0,
                ease: Power4.easeOut
            }, "start")
            .to($previewInner, 0.8, {
                background: "transparent",
                ease: Power4.easeOut
            }, "-=0.8")
    })
    setInterval(function() {
        if ($video[0].currentTime >= $video[0].duration) {
            $('.sp-content').css({
                display: 'flex'
            });
            // setTimeout(function() { window.location.href = "../audio/audio.html"; }, 2000);
        }
    }, 1000);
});