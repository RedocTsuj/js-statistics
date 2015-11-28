var stats_class=function(array){
	this.values = new Array();
	array.forEach(
		function(item){ 
			if (item && item!="" && ! isNaN(item)) { 
				this.values.push(parseInt(item));
			} else {
				console.log("[" + item + "] is not a proper number");
			}
		},this);
}

stats_class.prototype.sum=function(){
		var total = 0;
  		this.values.forEach(function(operand) {
    			total += operand;
  		});
		return total;
}


stats_class.prototype.average=function(){
		var count = this.values.length
		if (count>0) 
			return this.sum()/count
		else
  			return "Can not calc avg";
}

function doAdd(listAsString){
	var stats=new stats_class( listAsString.split(","));
	alert(stats.sum());
}

function doAvg(listAsString){
	var stats=new stats_class( listAsString.split(","));
	alert(stats.average());
}
