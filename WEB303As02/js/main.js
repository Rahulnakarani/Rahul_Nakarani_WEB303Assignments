// WEB303 Assignment 2 
var content = $('#content');

$('a[href="#"]').on('click', function() {
    
    var xhr = new XMLHttpRequest();
    var page = $(this).attr("id");
    
    content.fadeOut(500, function() {
        $(this).empty(); 

        xhr.open('GET', page+'.html', true);
        xhr.onload = function() {
            if (this.status === 200) {
                content.html(xhr.responseText);
                content.fadeIn(1000);
            }
        }
        
        xhr.send();
    });    
});
