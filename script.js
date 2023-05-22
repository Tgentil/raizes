function calculateSquareRoot() {
	var numberInput = document.getElementById("number");
	var resultElement = document.getElementById("result");

	var number = parseFloat(numberInput.value);
	var squareRoot = Math.sqrt(number);

	if (isNaN(squareRoot)) {
		resultElement.textContent = "Por favor, insira um número válido.";
	} else {
		resultElement.textContent = squareRoot.toFixed(2);
	}
}
