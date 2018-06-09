document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const root = document.getElementById('root');
	const colorText1 = document.getElementById('color1');
	const colorText2 = document.getElementById('color2');
	const input = Array.from(document.getElementsByClassName('colorInput'));
	const input1 = input[0];
	const input2 = input[1];
	var color1 = {color: input1.value};
	var color2 = {color: input2.value};

	input1.addEventListener('change', function () { setChanges(color1, input1, colorText1); });
	input2.addEventListener('change', function () { setChanges(color2, input2, colorText2); });



	function setChanges(color, input, colorText, orientation = '90deg') {
		debugger;
			color.color = input.value;
			colorText.innerText = color.color;
			colorText.style.color = color.color;

			root.style.background = 'linear-gradient(' +
				orientation + ', ' + color1.color + ', ' + color2.color + ')';
	}
});