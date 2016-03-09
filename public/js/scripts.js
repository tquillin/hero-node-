$(document).ready(function(){
  $('#like').click(function(e){
    var $likes = $('.material-icons').css('color', 'blue');
  });
  $('#header').css('color', 'red');
  $('#header').css('position', 'relative');
    function bounce(){
      $('#header').animate({right: '-=5'}, 100);
      $('#header').animate({left: '+=5'}, 100);
      $('#header').animate({right: '+=5'}, 100);
      $('#header').animate({left: '-=5'}, 100);
    }
    setInterval(bounce, 1500);


  $('#register').click(function(){
    $('#address').val('');
    alert('Awesome, you\'re registered. Please enjoy Music Life responsibly.');
  });

  $('#submit').click(function(){
    function clear(){
      $('#nickname').val('');
      $('#entry').val('');
    }
    clear();
  });

});
