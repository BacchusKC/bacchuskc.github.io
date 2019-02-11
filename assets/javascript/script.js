// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 101;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // console.log(st)
    if (st <= 0) {
        $('header').addClass('transparent nav-down').removeClass('nav-up');
    }

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st >= 80) {
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up transparent').addClass('nav-down');
            };
        };
    };
    lastScrollTop = st;
};
//crab movement and name vanish
$(document).ready(function () {
    $(document).scrollTop(0);
    var crabPos = $('#crab');

    $(window).scroll(function () {
        var s = $(this).scrollTop();
        if (s >= 750) {
            $('#crab').addClass("crab");
        }
        if (s >= 570) {
            $('#name').addClass("noName");
        } else {
            $('#name').removeClass("noName");
        };
    });
});
$(document).ready(function () {
    var images = ["'assets/images/js.png'", "'assets/images/css.png'", "'assets/images/ajax.png'", "'assets/images/jquery.png'",
        "'assets/images/mongo.png'", "'assets/images/node.png'", "'assets/images/react.png'", "'assets/images/sql.png'", "'assets/images/html.png'"];
    var pic = 0;

    function displayImage() {
        $("#octDiv").html("<img id='oct' src=" + images[pic] + ">");
        pic++
        if (pic === images.length) {
            pic = 0;
        };
    };
    function nextImage() {
        setInterval(displayImage, 1500);
    };
    nextImage();

    $('.portItem').on('click', function () {
        var arrayItem = (this.id);
        var projects = [
            {
                name: "Siri Bot",
                body: "A node.js script that uses APIs and NPM packages to return data based on input from the user. Then the data is nicely originized with select data presented to the user and also written to a log.txt file. Since this site can't be deplyed, it links to the readme with a gif showing it in use.",
                code: "https://github.com/BacchusKC/liri-node-app",
                site: "https://github.com/BacchusKC/liri-node-app/blob/master/README.md"
            },
            {
                name: "What to Watch",
                body: "My first coding group project, using React, Bootstrap, Javascript and APIs. We designed a site that users can use to find things they may want to watch. Parts of the code that I wrote were all of search.js, most of home.js, some of index.html and the main and sub topic dropdowns in react-ui-nav.js (lines 267-323).",
                code: "https://github.com/csinlasath/Project-1",
                site: "https://csinlasath.github.io/Project-1/"
            },
            {
                name: "Sunday Funnies Trivia",
                body: "A Sunday comics themed trivia game that was my first project using timers. I also went a bit above and randomized the questions each time you play. The game can be easily modified to add more questions and then pick the total you want asked from the total.",
                code: "https://github.com/BacchusKC/triviaGame",
                site: "https://bacchuskc.github.io/triviaGame/"
            },
            {
                name: "Rupee Collector",
                body: "A basic game that uses math and random assigned values to rupees that when clicked add up to try to reach a random number and all values are renewed for each time playing.",
                code: "https://github.com/BacchusKC/crystalCollector",
                site: "https://bacchuskc.github.io/crystalCollector/"
            },
            {
                name: "Hangman: Video Game Edition",
                body: "One of my favorite apps to develop and one of my first. Guess the video game, hangman style. The reset button on the console resets the game and the start button on the controller starts the game. After winning, the TV changes to an image of the game and theme music is played.",
                code: "https://github.com/BacchusKC/wordGuessGame",
                site: "https://bacchuskc.github.io/wordGuessGame/"
            },
            {
                name: "Gif Finder",
                body: "A very basic gif finder using ajx calls to pull JSON data from Giphy and load up ten gifs at a time. Click on the gifs to start and click again to stop.",
                code: "https://github.com/BacchusKC/gifFinder",
                site: "https://bacchuskc.github.io/gifFinder/"
            },
            {
                name: "Train Scheduler",
                body: "An app that was my first with Firebase. Input data that is stored on a database that will reload every minute to update the next train arrival time and minutes left until then.",
                code: "https://github.com/BacchusKC/trainScheduler",
                site: "https://bacchuskc.github.io/trainScheduler/"
            },
            {
                name: "Placeholder",
                body: "Placeholder",
                code: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                site: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
        ]
        $("#myModal").css("display", "block");
        $(".card-header").html("<span class='close'>&times;</span>");
        $(".card-header").append("<h2 id='cardTitle'>" + projects[arrayItem].name + "</h2>");
        $(".card-body").html("<p class='card-text'>" + projects[arrayItem].body + "</p>");
        $(".card-body").append("<a href='" + projects[arrayItem].site + "' target='_blank' class='btn btn-primary'>Deployed Site</a>");
        $(".card-body").append("<a href='" + projects[arrayItem].code + "' target='_blank' class='btn btn-primary'>Github Code</a>");
    });
    $(document).on('click', '.close', function () {
        $("#myModal").css("display", "none");
    });
    var modal = document.getElementById('myModal');
    document.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
});            