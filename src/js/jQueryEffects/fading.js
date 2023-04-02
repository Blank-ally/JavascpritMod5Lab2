$(function(){
    $('#fadeElements').on('click',function(e){
        $('.fading').fadeOut(1000,function(e){
            //alert('complete');
            $(this).fadeIn();
           // $(this).fadeIn(1500,'swing',function(){
           // console.log('complete');
         //  }); 
            /*$('.fading').fadeIn(200,function(){
                console.log('complete')
            });*/
        });

    });
});