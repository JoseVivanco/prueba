var indicador =0;

$(document).on("ready",function(){

    $('.left').on('click',function(e){
		e.preventDefault();
		moveSlider('left');

	});
	$('.right').on('click',function(e){
		e.preventDefault();
		moveSlider('right');

	});
	
   defineSize();
});


$(window).on('resize',defineSize);
  function defineSize(){
  	$(".slide").each(function(i,el){
  		$(el).css({
  			'background-image' : 'url('+$(el).data('background')+')',
  			'height' : ($('#containerPublicidad').width()* 0.47619047619 )+'px',
  			'width' :($('#containerPublicidad').width())+'px'

  		});

  	});
  	$('#containerSlider').css({
  			'margin-left' : -(indicador * $('#containerPublicidad').width())+'px'

  		});

  	  }
  	

  	function moveSlider(direccion){
  		var limite = $('.slide').length;
  		indicador = (direccion == 'right') ? indicador +1 : indicador -1;
  		
  		

  		$('#containerSlider').animate({
  			'margin-left' : -(indicador * $('#containerPublicidad').width())+'px'

  		});

    }