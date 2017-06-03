// (function () {
//       // Stepper non-linear demonstration 
//       var demoNonLinear = function (e) {
//         var element = document.querySelector('.mdl-stepper#demo-stepper-non-linear');
      
//         if (!element) return;
      
//         var stepper = element.MaterialStepper;
//         var steps = element.querySelectorAll('.mdl-step');
//         var step;
      
//         for (var i = 0; i < steps.length; i++) {
//           step = steps[i];
//           step.addEventListener('onstepnext', function (e) {
//             stepper.next();
//           });
//         }
        
//       };

//       window.addEventListener('load', demoNonLinear);
// })();

(function () {
// Editable steps demonstration 
	var demoEditableSteps = function (e) {
		var element = document.querySelector('.mdl-stepper#demo-editable-steps');

		if (!element) return;

		var stepper = element.MaterialStepper;
		var steps = element.querySelectorAll('.mdl-step');
		var step;

		for (var i = 0; i < steps.length; i++) {
			step = steps[i];
			step.addEventListener('onstepnext', function (e) {
			stepper.next();
			});
		}
	};

	window.addEventListener('load', demoEditableSteps);
})();