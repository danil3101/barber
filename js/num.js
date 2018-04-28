$(function () {
	$({numberValue: 0}).animate({numberValue: 1500}, {
		duration: 900, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		step: function(val) {
			$(".num1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		}
	});

	$({numberValue: 0}).animate({numberValue: 7200}, {
		duration: 1200, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		step: function(val) {
			$(".num2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		}
	});

	$({numberValue: 0}).animate({numberValue: 90000}, {
		duration: 1500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		step: function(val) {
			$(".num3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		}
	});

	$({numberValue: 0}).animate({numberValue: 500000}, {
		duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		step: function(val) {
			$(".num4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		}
	});
});