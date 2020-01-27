$(document).ready(function () {
    $(".btn").fadeIn(200).removeClass('d-none');
    $("#launch-page").fadeIn(500);
});

var openPage = 0;
// page 0: launch-page;
// page 1: about-me-page;
// page 2: portfolio-page;
// page 3: contact-page;
// page 4: resume-page;

$("#my-photo").click(function () {
    console.log(openPage);
    var index = openPage;
    openPage = 0;
    $("#btn1").css("color", "white");
    $("#btn2").css("color", "white");
    $("#btn3").css("color", "white");

    switch (index) {
        case 0:
            break;
        case 1:
            $("#about-me-page").fadeOut(200, function () {
                $("#launch-page").fadeIn(500);
            });
            break;
        case 2:
            $("#portfolio-page").fadeOut(200, function () {
                $("#launch-page").fadeIn(500);
            });
            break;
        case 3:
            $("#contact-page").fadeOut(200, function () {
                $("#launch-page").fadeIn(500);
            });
            break;
        case 3:
            $("#resume-page").fadeOut(200, function () {
                $("#launch-page").fadeIn(500);
            });
            break;
    }
});

$("#btn1").click(function () {
    console.log(openPage);
    var index = openPage;
    openPage = 1;
    $("#btn1").css("color", "orange");
    $("#btn2").css("color", "white");
    $("#btn3").css("color", "white");
    $("#btn4").css("color", "white");

    switch (index) {
        case 0:
            $("#launch-page").fadeOut(200, function () {
                $("#about-me-page").fadeIn(500);
            });
            break;
        case 1:
            break;
        case 2:
            $("#portfolio-page").fadeOut(200, function () {
                $("#about-me-page").fadeIn(500);
            });
            break;
        case 3:
            $("#contact-page").fadeOut(200, function () {
                $("#about-me-page").fadeIn(500);
            });
            break;
        case 4:
            $("#resume-page").fadeOut(200, function () {
                $("#about-me-page").fadeIn(500);
            });
            break;
    }
});

$("#btn2").click(function () {
    console.log(openPage);
    var index = openPage;
    openPage = 2;
    $("#btn1").css("color", "white");
    $("#btn2").css("color", "orange");
    $("#btn3").css("color", "white");
    $("#btn4").css("color", "white");

    switch (index) {
        case 0:
            $("#launch-page").fadeOut(200, function () {
                $("#portfolio-page").fadeIn(500);
            });
            break;
        case 1:
            $("#about-me-page").fadeOut(200, function () {
                $("#portfolio-page").fadeIn(500);
            });
            break;
        case 2:
            break;
        case 3:
            $("#contact-page").fadeOut(200, function () {
                $("#portfolio-page").fadeIn(500);
            });
            break;
        case 4:
            $("#resume-page").fadeOut(200, function () {
                $("#portfolio-page").fadeIn(500);
            });
            break;
    }
});

$("#btn3").click(function () {
    console.log(openPage);
    var index = openPage;
    openPage = 3;
    $("#btn1").css("color", "white");
    $("#btn2").css("color", "white");
    $("#btn3").css("color", "orange");
    $("#btn4").css("color", "white");

    switch (index) {
        case 0:
            $("#launch-page").fadeOut(200, function () {
                $("#contact-page").fadeIn(500);
            });
            break;
        case 1:
            $("#about-me-page").fadeOut(200, function () {
                $("#contact-page").fadeIn(500);
            });
            break;
        case 2:
            $("#portfolio-page").fadeOut(200, function () {
                $("#contact-page").fadeIn(500);
            });
            break;
        case 3:
            break;
        case 4:
            $("#resume-page").fadeOut(200, function () {
                $("#contact-page").fadeIn(500);
            });
            break;
    }
});

$("#btn4").click(function () {
    console.log(openPage);
    var index = openPage;
    openPage = 4;
    $("#btn1").css("color", "white");
    $("#btn2").css("color", "white");
    $("#btn3").css("color", "white");
    $("#btn4").css("color", "orange");

    switch (index) {
        case 0:
            $("#launch-page").fadeOut(200, function () {
                $("#resume-page").fadeIn(500);
            });
            break;
        case 1:
            $("#about-me-page").fadeOut(200, function () {
                $("#resume-page").fadeIn(500);
            });
            break;
        case 2:
            $("#portfolio-page").fadeOut(200, function () {
                $("#resume-page").fadeIn(500);
            });
            break;
        case 3:
            $("#contact-page").fadeOut(200, function () {
                $("#resume-page").fadeIn(500);
            });
            break;
        case 4:
            break;
    }
});