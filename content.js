$(document).ready(function() {
    $(".Bedroom1").click(function() {
      var Id = $('.btn.btn-primary.active').attr('id');

      if (Id == "bulbdiv"){
        $('#house').fadeOut(function(){
            $('#Bedroom1Lights').fadeIn();
        });
      }

    });
});

$(document).ready(function() {
    $(".Bedroom2").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#Bedroom2Lights').fadeIn();
          });
        }

    });
});

$(document).ready(function() {
    $(".Entrance").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#EntranceLights').fadeIn();
          });
        }

    });
});

$(document).ready(function() {
    $(".MasterBedroom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#MasterBedroomLights').fadeIn();
          });
        }

    });
});

$(document).ready(function() {
    $(".Kitchen").click(function() {
      var Id = $('.btn.btn-primary.active').attr('id');

      if (Id == "bulbdiv"){
        $('#house').fadeOut(function(){
            $('#KitchenLights').fadeIn();
        });
      }

    });
});

$(document).ready(function() {
    $(".LivingRoom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        if (Id == "bulbdiv"){
          $('#house').fadeOut(function(){
              $('#LivingRoomLights').fadeIn();
          });
        }

    });
});

//fade out of the current menu and back to the origional menu
$(document).ready(function() {
    $(".return").click(function() {

        $('.settings').fadeOut(function(){
            $('#house').fadeIn(1000);
        });

    });
});


// $(".Bedroom2").on("click", function(e){
//     e.preventDefault();
//     alert('Bedroom2');
// });
//
// $(".Entrance").on("click", function(e){
//     e.preventDefault();
//     alert('Entrance');
// });
// $(".MasterBedroom").on("click", function(e){
//     e.preventDefault();
//     alert('MasterBedroom');
// });
// $(".Kitchen").on("click", function(e){
//     e.preventDefault();
//     alert('Kitchen');
// });
// $(".LivingRoom").on("click", function(e){
//     e.preventDefault();
//     alert('LivingRoom');
// });
