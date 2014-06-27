var tvvtObj = {
    tagcloud: function() {
        var $tagcloud = $(".tagcloud");
        if ( !! $tagcloud.length) {
            var $tagcloud_a = $tagcloud.find("a"),
                $temp;
            for (var i = 0; i < $tagcloud_a.length; i++) {
                $temp = $tagcloud_a.eq(i).text().replace(/^s*|s*$/g, '');

                if ($temp === "iOS" || $temp === "Objective-C") {
                    $tagcloud_a.eq(i).css({
                        "font-size": "20px"
                    });
                }
            }
        }
    },
    brDelete:function(){
        var $photoTwo=$(".photoTwo");
        if(!!$photoTwo.length){
            $photoTwo.find("br").remove();
        }
        $("footer .alignleft").next().remove();
    },
    inition: function() {
        this.tagcloud();
        this.brDelete();
    }
}
$(document).ready(function() {
    tvvtObj.inition();
});
