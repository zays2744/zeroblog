//script(src=`${url_for(theme.js)}/clicklovenew.js?v=${stun_env("version")}`)   鼠标点击心形

var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        function c() {
            return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        }
        var color=c()
        // var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
        var a = ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"];
        // var $i = $("<span/>").text("ʚ "+a[a_idx]+" ɞ");
        var $i = $("<span/>").text("༺ "+a[a_idx]+" ༻");
        // var $i = $("<span/>").text("꧁ "+a[a_idx]+" ꧂"); //爪洼语
        // var $i = $("<span/>").text("☙ "+a[a_idx]+" ❧");
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-size":10,
            "color": color
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            2300,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}