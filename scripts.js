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

function ArrayToInteger(array){
	var intArray = new Array();
	array.forEach(function(item){ intArray.push(parseInt(item)); });
	return intArray;
}

function doAdd(){
	var items = $("#my-items").val().split(",");
	alert(statistics.add(ArrayToInteger(items)));
}
