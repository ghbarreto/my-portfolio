$(document).ready(function(){
    $('.description').hide();
    $(function() {
        $(".learnProject").on('click', function() {
            $(this).parent().next(".description").toggle(500);
            $(this).find("i").toggleClass('fa-plus fa-minus');
        });
    })
});