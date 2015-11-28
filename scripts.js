var stats_class=function(array){
	var intArray = new Array();
	array.forEach(
		function(item){ 
			if (item && item!="" && ! isNaN(item)) { 
				intArray.push(parseInt(item));
			} else {
				console.log("[" + item + "] is not a proper number");
			}
		});
	this.values=intArray
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
  			return undefined;
}

stats_class.prototype.variance=function(){
		var totdiff=0
		var mean=this.average();
		var count = this.values.length
		if (typeof mean != "undefined") {
			this.values.forEach(function(element) {
				var diff=element-mean
				totdiff += (diff*diff)
			},this);
			return totdiff/count;
		}
		else
  			return undefined;
}


stats_class.prototype.stdev=function(){
		var vrnc=this.variance()
		if (typeof vrnc != "undefined") {
			return Math.sqrt(vrnc)
		}
		else
  			return undefined;
}

function doAdd(listAsString){
	var stats=new stats_class( listAsString.split(","));
	alert(stats.sum());
}

function doAvg(listAsString){
	var stats=new stats_class( listAsString.split(","));
	alert(stats.average());
}

function doStDev(listAsString){
	var stats=new stats_class( listAsString.split(","));
	alert(stats.stdev());
}
