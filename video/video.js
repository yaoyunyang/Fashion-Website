$(function() {
    var $moveable = $('.layer--movable'),
        $player = $(".player"),
        $playerItem = $(".player .item"),
        $previewInner = $(".preview__inner"),
        $overlay = $(".layer--overlay"),
        $video = $("#preview-video");
    $(document).mousemove(function(e) {
        $moveable.css({ 'top': e.pageY - 50, 'left': e.pageX - 50 });
    });
    $player.on("mouseover", function() {
        new TimelineLite()
            .to($moveable, 0.2, {
                autoAlpha: 0,
                ease: Power4.easeOut
            })
            .to($player, 0.4, {
                width: "75vh",
                height: "75vh"
            }, "-=0.2")
    })
    $player.on("mouseout", function() {
        new TimelineLite()
            .to($moveable, 0.2, {
                autoAlpha: 1,
                ease: Power4.easeOut
            })
            .to($player, 0.3, {
                width: "65vh",
                height: "65vh"
            }, "-=0.2")
    })
    $player.on("click", function(e) {
        e.preventDefault();
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
            .to($previewInner, 0.8, {
                background: "transparent",
                ease: Power4.easeOut
            }, "-=0.8")
    })
});