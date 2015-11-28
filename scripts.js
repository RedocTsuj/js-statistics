"use strict";


function isBlank(o){return isEmpty(o);}
function notBlank(o){return ! isBlank(o);}
function notEmpty(o){return ! isEmpty(o);}

function isObj(o){ 
	var t=typeof(o);
	var e=true;
	var v=o;
	t=t.toLowerCase();
	if (t=="string") {
		e=false
	} else if ((t=="number") || (t=="function")) {
		e=false; 
	} else if (t=="object")  {
		e=true; 
	} else if ((v===null) || (v===undefined) ){
		e=false;
	} else if (! isEmpty(v.length) ){
		e=true;
	} else {
		var c=0;
		for (var x in v){c+=1;}
		e=(c==0);
	}
	return e;
}

function isEmpty(o){
	var t=typeof(o);
	var e=true;
	var v=o;
	t=t.toLowerCase();
	if (t=="string") v=o.trim();
	if ((t=="number") || (t=="function")) {
		e=false; 
	} else if ((v===null) || (v===undefined) ){
		e=true;
	} else if (! isEmpty(v.length) ){
		e=v.length==0;
	} else {
		var c=0;
		for (var x in v){c+=1;}
		e=(c==0);
	}
	return e;
}


var stats_class=function(array){
	this.values = new Array();
	array.forEach(
		function(item){ 
			if (notEmpty(item) && ! isNaN(item)) { 
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

stats_class.prototype.min=function(){
		var min ;
  		this.values.forEach(function(v) {
			  if (isEmpty(min)) {
				  min=v
			  } else {
				 if (v<min) min=v; 
			  }
  		});
		return min;
}

stats_class.prototype.max=function(){
		var max ;
  		this.values.forEach(function(v) {
			  if (isEmpty(max)) {
				  max=v
			  } else {
				 if (v>max) max=v; 
			  }
  		});
		return max;
}

function doAdd(listAsString){
	var stats=new stats_class( listAsString.split(","));
	return stats.sum();
}

function doAvg(listAsString){
	var stats=new stats_class( listAsString.split(","));
	return stats.average();
}

function doStDev(listAsString){
	var stats=new stats_class( listAsString.split(","));
	return stats.stdev();
}
function doMin(listAsString){
	var stats=new stats_class( listAsString.split(","));
	return stats.min();
}

function doMax(listAsString){
	var stats=new stats_class( listAsString.split(","));
	return stats.max();
}
