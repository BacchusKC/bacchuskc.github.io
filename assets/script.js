// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 101;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // console.log(st)
    if (st <= 0){
        $('header').addClass('transparent nav-down').removeClass('nav-up');
    }
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
        
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    }else {
        if (st >= 80){
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up transparent').addClass('nav-down');
        }}
    }
    lastScrollTop = st;
}
//crab movement and name vanish
$(document).ready(function () {
    var crabPos = $('#crab');
    
    $(window).scroll(function () {
        var s = $(this).scrollTop();
            if (s >= 750){
                $('#crab').addClass("crab");
            }
            if (s >=600){
                $('#name').addClass("noName");
            }else {
                $('#name').removeClass("noName");
            }
    });
});
//make name vanish
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var s = $(this).scroll
//     })
// });
//octo sign change
$(document).ready(function () {
    var images = ["'assets/images/js.png'", "'assets/images/css.png'", "'assets/images/ajax.png'", "'assets/images/jquery.png'", 
        "'assets/images/mongo.png'", "'assets/images/node.png'", "'assets/images/react.png'", "'assets/images/sql.png'", "'assets/images/html.png'"];
    var pic = 0;
    // var showImage;

    function displayImage () {
        $("#octDiv").html("<img id='oct' src=" + images[pic] + ">");
        pic++
        if (pic === images.length) {
            pic = 0;
        }
    }
    function nextImage () {
        setInterval(displayImage, 1500);
        
    }
    // function startOct() {
    //     showImage = setInterval(nextImage, 2000);
    // }
    nextImage();
});            