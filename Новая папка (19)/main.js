var elements = $('.modal-overlay, .modal');

$('.cooperation__wrapper-link').click(function(){
    elements.addClass('active');
    $(document).on('keydown', function(e){
      if(e.which === 27){ // key = esc (27)
          elements.removeClass('active');
          var home = $.Event("keydown", {keyCode: 36}); //
          $(document).trigger(home);
          e.preventDefault();
          return false;
      }
  });
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});