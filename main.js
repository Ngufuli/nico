$(document).ready(function(){
    $("input").on("keypress", function(){
        $("p:first").hide();
    });
});