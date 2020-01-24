



$( "#btn1" ).click(function() {
    $("#btn1").css("color","orange");
    $("#btn2").css("color","white");
    $("#btn3").css("color","white");
    $("#launch-page").addClass('d-none');
    $("#about-me-page").removeClass('d-none');
    $("#portfolio-page").addClass('d-none');
    $("#contact-page").addClass('d-none');
});
$( "#btn2" ).click(function() {
    $("#btn1").css("color","white");
    $("#btn2").css("color","orange");
    $("#btn3").css("color","white");
    $("#launch-page").addClass('d-none');
    $("#about-me-page").addClass('d-none');
    $("#portfolio-page").removeClass('d-none');
    $("#contact-page").addClass('d-none');
});
$( "#btn3" ).click(function() {
    $("#btn1").css("color","white");
    $("#btn2").css("color","white");
    $("#btn3").css("color","orange");
    $("#launch-page").addClass('d-none');
    $("#about-me-page").addClass('d-none');
    $("#portfolio-page").addClass('d-none');
    $("#contact-page").removeClass('d-none');
});