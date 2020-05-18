$(function(){
    $('#name').keyup(function(){
        $('#textH1').text('Hi ' + $('#name').val());
    })
})