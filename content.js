$(document).ready(function() {
    $(".Bedroom1").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');

        $('#house').fadeOut(function(){
            $('#Bedroom1Lights').fadeIn();
        });
        //your code here
    });
});

$(document).ready(function() {
    $(".Bedroom2").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');
        alert(Id);
        //your code here
    });
});

$(document).ready(function() {
    $(".Entrance").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');
        alert(Id);
        //your code here
    });
});

$(document).ready(function() {
    $(".MasterBedroom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');
        alert(Id);
        //your code here
    });
});

$(document).ready(function() {
    $(".Kitchen").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');
        alert(Id);
        //your code here
    });
});

$(document).ready(function() {
    $(".LivingRoom").click(function() {
        var Id = $('.btn.btn-primary.active').attr('id');
        alert(Id);
        //your code here
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
