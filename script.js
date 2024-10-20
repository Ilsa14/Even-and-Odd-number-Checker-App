document.getElementById('checkButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultText = document.getElementById('result');

    if (isNaN(number)) {
        resultText.textContent = 'Please enter a valid number.';
        return;
    }

    if (number % 2 === 0) {
        resultText.textContent = `${number} is an even number.`;
    } else {
        resultText.textContent = `${number} is an odd number.`;
    }
});
