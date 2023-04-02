$(function(e){
// this works for having multiple events 
   /* $('#clickEventTwo').on('click mouseenter mouseleave',function(e){
alert(`${e.pageX},${e.pageY} `)


// this is chaining functions this also works 

  /* $('#clickEventTwo').on('click',function(e){
alert(`${e.pageX},${e.pageY} `)}).on('mouseenter'function(e){

    alert(`${e.pageX},${e.pageY} `)
  });
*/

$('#clickEventTwo').on('click',function(e){
    console.log(`${e.pageX},${e.pageY} `);
});


$('#eventTarget').on('click',function(e){
if($(e.target).hasClass('high')){
    alert('high');
}else {
    alert('low');

}
});

$('#eventClosest').on('click',function(e){
  $(e.target).closest('.low').removeClass('low').addClass('high')
})

$('#preventDefault').on('click',function(e){
    e.preventDefault()
})
});