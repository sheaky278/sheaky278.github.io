function changeColor(color) {
    document.body.style.backgroundColor = color;
} 

$(document).ready(function() {
    $(".thumbnail1").hover(function() {
        $(this).attr("src", "Video/Alternative Solutions.gif");
    }, 
        function() {
            $(this).attr("src", "Image/thumbnail1.jpg");
        }                         
    );                  
});

$(document).ready(function() {
    $(".thumbnail2").hover(function() {
        $(this).attr("src", "Video/Getting It Right.gif");
    }, 
        function() {
            $(this).attr("src", "Image/thumbnail2.jpg");
        }                         
    );                  
});

$(document).ready(function() {
    $(".thumbnail3").hover(function() {
        $(this).attr("src", "Video/Mr Lucas's Morning Routine.gif");
    }, 
        function() {
            $(this).attr("src", "Image/thumbnail3.jpg");
        }                         
    );                  
});

$(document).ready(function() {
    $(".thumbnail4").hover(function() {
        $(this).attr("src", "Video/Mr. Skeleton's Storybook Ideas.gif");
    }, 
        function() {
            $(this).attr("src", "Image/thumbnail4.jpg");
        }                         
    );                  
});document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": { "value": "#ade4ff" },/*#def1fb*/
                "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": { "enable": false }
                },
                "size": {
                    "value": 8,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": false },
                    "onclick": { "enable": false },
                    "resize": false
                }
            }, "retina_detect": true
        });
    }
    document.head.append(script);
});

function changeBgImg1() {
    document.body.style.backgroundImage = "url('Image/SantaFriend.png')";
    document.getElementById("xmasText").style.color = "black";
    document.getElementById("hny").style.color = "green";
}

function changeBgImg2() {
    document.body.style.backgroundImage = "url('Image/SantaClause.png')";
    document.getElementById("xmasText").style.color = "white";
    document.getElementById("hny").style.color = "lightgreen";
}

function changeBgImg3() {
    document.body.style.backgroundImage = "url('Image/Reindeers.png')";
    document.getElementById("xmasText").style.color = "black";
    document.getElementById("hny").style.color = "green";
}

function changeBgImg4() {
    document.body.style.backgroundImage = "url('Image/ChristmasBackground.png')";
    document.getElementById("xmasText").style.color = "black";
    document.getElementById("hny").style.color = "green";
}

document.addEventListener("play", function(evt) {
    if(window.$_currentlyPlaying && window.$_currentlyPlaying !== evt.target) {
        window.$_currentlyPlaying.pause();
    } 
        window.$_currentlyPlaying = evt.target;
    }, true);


$(document).ready(function() {
    $(".middleKid").hover(function() {
        $(this).attr("src", "Image/MiddleKidHover.png");
    }, 
        function() {
            $(this).attr("src", "Image/MiddleKid.png");
        }                         
    );                  
});

$(document).ready(function() {
    $(".sourcePresent").hover(function() {
        $(this).attr("src", "Image/Present Open.png");
    }, 
        function() {
            $(this).attr("src", "Image/Present.png");
        }                         
    );                  
});

$(document).ready(function(){
    $(".sourcePresent").click(function(){
        $("#msgModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
});
