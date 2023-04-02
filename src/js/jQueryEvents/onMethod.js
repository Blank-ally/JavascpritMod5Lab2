$(function () {


     $('#clickEvent').on('click',function(e){
         //alert('clicked');
         console.log('the button has been clicked');
 
     });
 
/* $('#clickEvent').on('dblclick',function(e){
         console.log('the button has been clicked');
     });
 
 $('#clickEvent').on('mouseup',function(e){
     console.log('the button has been clicked');
 });
 
 $('#clickEvent').on('mousedown',function(e){
     console.log('the button has been clicked');
 });*/


   // $('.clickEvent').click(function (e) {
    $('.clickEvent').on('click',function (e) {
       // console.log(this);
       //console.log($(this));
       console.log($(this).val());

    });

    $('#mouseEnter').on('mouseenter', function (e) {

        console.log('mouse enter event');

    });
})