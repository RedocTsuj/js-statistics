window.calculator = window.calculator || {};

window.calculator.global = {
	init: function(){
		console.log("Calculator Initialized...");
	},
	add: function(operands){
		var sum = 0;
  		operands.forEach(function(operand) {
    			sum += operand;
  		});
		return sum;
  	}
};

$( window ).load(function() {
  calculate.global.init();
});
