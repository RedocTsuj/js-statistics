var stats_class=function(array){
	var intArray = new Array();
	array.forEach(
	this.values=intArray
}

stats_class.prototype.sum=function(){
		var total = 0;
  		this.values.forEach(function(operand) {
    			total += operand;
  		});
		return total;
}

function doAdd(){
	var stats=new stats_class( $("#my-items").val().split(","));
	alert(stats.sum());
}
