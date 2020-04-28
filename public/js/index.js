
window.onload =function(){
  jQuery('.image').animate({width: '500px'}, 2000,()=>{
    jQuery('.corona').addClass('myStyle');
    jQuery('.detail-button').animate({borderWidth: '1px'},4000);
    jQuery('.detail-button').css({border:'dashed white'});
  });
  // jQuery('.image').css('position','relative');
  // jQuery('.image').animate({right: '35vw', width: '300px'}, 1000);
}
