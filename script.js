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
});