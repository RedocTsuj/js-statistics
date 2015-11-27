window.calculator = window.calculator || {};

window.calculator.global = {
  init: function(){
    console.log("Calculator Initialized...");
  },
};

$( window ).load(function() {
  calculate.global.init();
});
