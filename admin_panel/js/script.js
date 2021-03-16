$(document).ready(function(){
	$('.toggler').click(function (){
		if(window.innerWidth <= 992){
			$('.sidebar').toggleClass('show');
		}else{
			$('.sidebar').toggleClass('hide');
			$('.main').toggleClass('w-100')
		}
	})


	$('.sidebar ul li, .toggler').click(function (argument) {
		$(this).addClass('anime');
		setTimeout(function (argument) {
			$("*").removeClass('anime');
		},500);
	})
})