$(function(){
 $('#slideElement').on('click',function(e){
   
    $('#slideMe').slideToggle(1000,'swing',function(){
        alert('complete')
    /* $('#slideMe').slideToggle(1000,function(){
        alert('complete')
    */});
 })   
});
