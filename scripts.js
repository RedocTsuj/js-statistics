window.statistics = window.statistics || {};

window.statistics = {
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
	statistics.init();
});

$( "#add-items" ).click(function() {
	var items = $("my-items").val().split(",");
	alert(statistics.add(items));
});