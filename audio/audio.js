$(function() {
    console.clear();
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function(elem) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    $(document).ready(function() {
        // 解析json文件, 将里面的数据存入变量data, data是一个字典, songs属性是一个歌曲的列表 (其中每个元素是一个对象 json(相关信息)和audio(音源)属性)
        $.getJSON('https://fashion13.oss-cn-beijing.aliyuncs.com/audio/TO_WELL.json', function(data) {
            var abort_other_json;
            var playlist = data;
            var index = 0;
            var indexing = playlist.songs[index];
            // 初始化当前歌曲的当前时间 和 总时间 都为 0
            var time = 0;
            var totalTime = 0;
            var timeList = [];
            var play = 0;
            var counter = 0;
            var stopTimer;
            var bannerTimer;
            var safeKill = 0;
            var flag = 1;
            // 这个是实时更新啊??? 下面函数中每次更改源的时候页面都会加载一次, 触发一次ready函数
            var next_slide;
            var audio = document.getElementById('audioFile');

            function centerize() {
                if (play == 0) return;
                if ($(".current").length == 0) return;
                // 返回元素的高度
                var a = $(".current").height();
                var c = $("#lyrics").height();
                // 返回元素的便宜值, 相对于左上角
                var d = $(".current").offset().top - $(".current").parent().offset().top;
                var e = d + (a / 2) - (c * 1 / 4);
                $("#lyrics").animate({ scrollTop: e + "px" }, { easing: "swing", duration: 500 });
            }

            function next() {
                var current = $('#lyrics .current');
                if (current.length == 0) {
                    $('#lyrics-content h2:nth-child(1)').addClass("current");
                    return;
                }
                current.removeClass('current');
                current.next().addClass('current');
            }

            function previous() {
                var current = $('#lyrics .current');
                if (current.length == 0) { return; }
                var first = $('#lyrics-content h2:nth-child(1)');
                current.removeClass('current');
                if (current === first) { return; }
                current.prev().addClass('current');
            }
            // 播放 或 暂停 歌曲
            function playSong() {
                if (flag == 1) {
                    flag = 0;
                    time = 290000;
                }
                if (play == 0) {
                    play = 1;
                    audio.play();
                    $('#play i').removeClass("fa-play");
                    $('#play i').addClass("fa-pause");
                } else {
                    play = 0;
                    audio.pause();
                    $('#play i').removeClass("fa-pause");
                    $('#play i').addClass("fa-play");
                }
            }

            // 处理数据
            function processing(data) {
                if (data.author == "") { data.author = "Unknown"; }
                var html = "";
                timeList = [];
                // 遍历每一句歌词, 将歌词出现的时间放入timeList列表. 同时把歌词包装成一个h2标签
                for (var i = 0; i < data.lyrics.length; i++) {
                    timeList.push(data.lyrics[i].time);
                    html = html + "<h2>" + data.lyrics[i].line + "</h2>";
                }
                // 讲歌词载入页面
                $('#lyrics-content').html(html);
            }

            function updateTimer(data) {
                if (time >= totalTime) {
                    $('#music-player').css({
                        transition: 'opacity 3s ease-out',
                        opacity: 0
                    });
                    $('#play').css({
                        opacity: 0
                    });
                    $('#lyrics').css({
                        transition: 'opacity 3s ease-out',
                        opacity: 0
                    });
                    $('.sp-content').css({
                        display: 'flex'
                    });
                    // setTimeout(function() { window.location.href = "../camera/camera.html";; }, 6000);
                }
                if (totalTime == 0 || isNaN(totalTime)) {
                    totalTime = parseInt((audio.duration * 1000));
                    processing(data);
                }
                //update timer
                // 更新歌曲播放的时间
                if (play == 1) {
                    time = time + 1000;
                } else if (play == -1) {
                    time = 0;
                }
                safeKill = 0;
                while (true) {
                    safeKill += 1;
                    if (safeKill >= 100) break;
                    if (counter == 0) {
                        if (time < timeList[counter]) {
                            previous();
                            break;
                        }
                    }
                    if ((counter == timeList.length) && (time <= timeList[counter - 1])) {
                        counter--;
                        previous();
                    }
                    if (time >= timeList[counter]) {
                        if (counter <= timeList.length) {
                            counter++;
                        }
                        next();
                    } else if (time < timeList[counter - 1]) {
                        counter--;
                        previous();
                    } else {
                        if (play == 1 && !audio.paused && !audio.ended)
                            centerize();
                        break;
                    }
                }
            }

            function loadSong() {
                // 给audio标签 增加播放源
                $('#audioFile').attr('src', indexing.audio);
                abort_other_json = $.getJSON(indexing.json, function(data) {
                    processing(data);
                    // 异步?? 上面函数还没有执行完, 下面已经给totalTime赋值了. 因为上面函数中用到了totalTime变量
                    totalTime = NaN;
                    // 计时器 每一秒执行一次updateTimer函数
                    stopTimer = setInterval(function() { updateTimer(data); }, 1000);
                });
            }

            loadSong();
            $('#play').on('click', playSong);
        });
    });
})