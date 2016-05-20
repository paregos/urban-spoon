$(document).ready(function() {

   onWindowResize();

   //Opening Bedroom1
    $(".Bedroom1").click(function() {
      var Id = $('.btn.btn-primary.active').attr('id');

      if (Id == "bulbdiv"){
        $('#house').fadeOut(function(){
            $('#Bedroom1Lights').fadeIn();
        });
      }
      if (Id == "cameradiv"){
        $('#house').fadeOut(function(){
            $('#BedRoom1Camera').fadeIn();
        });
      }
    });

     //Opening Bedroom2
    $(".Bedroom2").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#Bedroom2Lights').fadeIn();
          });
        }
    });

    //Entrance
    $(".Entrance").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#EntranceLights').fadeIn();
          });
        }
    });

    //MasterBedroom
    $(".MasterBedroom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#MasterBedroomLights').fadeIn();
          });
        }
    });

    //Kitchen
    $(".Kitchen").click(function() {
      var Id = $('.btn.btn-primary.active').attr('id');

      if (Id == "bulbdiv"){
        $('#house').fadeOut(function(){
            $('#KitchenLights').fadeIn();
        });
      }
    });

    //LivingRoom
    $(".LivingRoom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#LivingRoomLights').fadeIn();
          });
        }
    });


    //=========Changing the values of the light sliders
    $('.slider').change(function() {
      var Id = "." + $(this).attr('id');

      $(Id).html($(this).val() + "%");

    });


    //========Return to floor plan from settings
    $(".return").click(function() {
        $('.settings').fadeOut(function(){
            $('#house').fadeIn(1000);
        });
        onWindowResize();
    });

    //=========Icon Hover/Click Section============
    $('#bulbdiv').click(function() {
      alert("bulbdiv");
    });

    $('#lockdiv').click(function() {
      alert("lockdiv");
    });

    $('#cameradiv').click(function() {
      alert("cameradiv");
    });

    $('#homediv').click(function() {
      alert("homediv");
    });

});
