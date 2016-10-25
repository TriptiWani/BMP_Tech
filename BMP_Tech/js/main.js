$(document).ready(function(){
  $('button').on('click',function(){
    var selectorId = $('select').val().toString();
    var updatedValue = getUpdatedProgressVal(selectorId,this.id);
    var $progressBar = $('#progress'+ selectorId );
    var animateTime = 500;

    $('.progress'+ selectorId +' .label').html(updatedValue) ;

    if (parseInt(updatedValue) < 100) {
      $progressBar.animate({'width':updatedValue}, animateTime).addClass('maxNotExceeded').removeClass('maxExceeded');
    }else if (parseInt(updatedValue) > 100) {
      $progressBar.animate({'width':'100%'}, animateTime).addClass('maxExceeded').removeClass('maxNotExceeded');
    }else{
      $progressBar.animate({'width':updatedValue}, animateTime).addClass('maxExceeded').removeClass('maxNotExceeded');
    }
  });
});
var getUpdatedProgressVal = function(progressNum,increment){
  var progressId ='.progress'+ progressNum +' .label' ;

  var newValue = parseInt($(progressId).html()) + parseInt(increment);
  if ( newValue >= 0) {
    return newValue+'%';
  }else {
    return 0+'%';
  }
};
