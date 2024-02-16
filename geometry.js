function calculation(input1Id, input2Id, resultId, name, optional) {
  const inputValue1 = document.getElementById(input1Id);
  const input1 = inputValue1.value;
  const inputValue2 = document.getElementById(input2Id);
  const input2 = inputValue2.value;
  const result = document.getElementById(resultId);

  const area = optional * input1 * input2;

  if (inputValue1.value > 0 && inputValue2.value > 0) {
    if (input1 && input2) {
      result.innerHTML = `${name}-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  inputValue1.value = "";
  inputValue2.value = "";
}
function calculation2(input1Id, input2Id, resultId, name, optional) {
  const inputValue1 = document.getElementById(input1Id);
  const input1 = inputValue1.value;
  const inputValue2 = document.getElementById(input2Id);
  const input2 = inputValue2.value;
  const result = document.getElementById(resultId);

  const area = input1 * input2;

  if (inputValue1.value > 0 && inputValue2.value > 0) {
    if (input1 && input2) {
      result.innerHTML = `${name}-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  inputValue1.value = "";
  inputValue2.value = "";
}
