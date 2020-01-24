$( "#btn1" ).click(function() {
    $("#about-me-page").removeClass('d-none');
    $("#portfolio-page").addClass('d-none');
    $("#contact-page").addClass('d-none');
});
$( "#btn2" ).click(function() {
    $("#about-me-page").addClass('d-none');
    $("#portfolio-page").removeClass('d-none');
    $("#contact-page").addClass('d-none');
});
$( "#btn3" ).click(function() {
    $("#about-me-page").addClass('d-none');
    $("#portfolio-page").addClass('d-none');
    $("#contact-page").removeClass('d-none');
});