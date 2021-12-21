function calc() {
  const value1 = Number(
    document.querySelector('.calc__value-one').value.trim(),
  );
  const value2 = Number(
    document.querySelector('.calc__value-two').value.trim(),
  );
  const select = document.querySelector('.calc__select');
  const selectedValue = select.options[select.selectedIndex].value;
  const result = document.querySelector('.calc__result');

  switch (selectedValue) {
    case 'add':
      resultValue = Math.round(value1 + value2);
      result.textContent = resultValue;
      break;
    case 'subtract':
      resultValue = Math.round(value1 - value2);
      result.textContent = resultValue;
      break;
    case 'multiply':
      resultValue = Math.round(value1 * value2);
      result.textContent = resultValue;
      break;
    case 'divide':
      resultValue = Math.round(value1 / value2);
      result.textContent = resultValue;
      break;
  }
}

function res() {
  return (document.querySelector('.calc__result').innerHTML = '');
}
