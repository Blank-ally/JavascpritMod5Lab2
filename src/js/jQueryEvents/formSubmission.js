$(function(){
    $('#testForm').on('submit',function(e){
        e.preventDefault();
        $('#results').append(`${$('#testInput').val()} `);
       this.reset();
    });
})