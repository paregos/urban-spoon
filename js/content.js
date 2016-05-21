$(document).ready(function() {

    onWindowResize();

    //Opening Bedroom1
    $(".Bedroom1").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#Bedroom1Lights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#BedRoom1Camera').fadeIn();
            });
        }
    });

    //Opening Bedroom2
    $(".Bedroom2").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#Bedroom2Lights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#BedRoom2Camera').fadeIn();
            });
        }

    });

    //Entrance
    $(".Entrance").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#EntranceLights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#EntranceCamera').fadeIn();
            });
        }

    });

    //MasterBedroom
    $(".MasterBedroom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#MasterBedroomLights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#MasterBedRoomCamera').fadeIn();
            });
        }
    });

    //Kitchen
    $(".Kitchen").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#KitchenLights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#KitchenCamera').fadeIn();
            });
        }
    });

    //LivingRoom
    $(".LivingRoom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv") {
            $('#house').fadeOut(function() {
                $('#LivingRoomLights').fadeIn();
            });
        }
        if (Id == "cameradiv") {
            $('#house').fadeOut(function() {
                $('#LivingRoomCamera').fadeIn();
            });
        }
    });


    //=========Changing the values of the light sliders
    $('.slider').change(function() {
        var Id = "." + $(this).attr('id');

        if ($(this).val() == 0) {
            $(Id).html("OFF");
        } else {
            $(Id).html($(this).val() + "%");
        }

    });


    //========Return to floor plan from settings
    $(".return").click(function() {
        $('.settings').fadeOut(function() {
            $('#house').fadeIn(1000);
        });
        onWindowResize();
    });

    //=========Icon Hover/Click Section============
    $('.Icons').click(function() {
        $('.Icons').addClass("greyed");
        $(this).removeClass("greyed");
    });


});
