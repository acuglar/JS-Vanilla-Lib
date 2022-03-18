const weightSlider = document.getElementById('sliderWeight');
const weightOutput = document.getElementById('weightOutput');
const heightSlider = document.getElementById('sliderHeight');
const heightOutput = document.getElementById('heightOutput');
const button = document.getElementById('btnCalcular');
const table = document.querySelector('table');
const result = document.getElementById('resultado');

function updateInputValue(e) {
  if (e.target.id === 'sliderWeight') {
    weightOutput.value = e.target.value;
  }
  if (e.target.id === 'sliderHeight') {
    heightOutput.value = e.target.value;
  }
  if (e.target.id === 'weightOutput') {
    weightSlider.value = e.target.value;
  }
  if (e.target.id === 'heightOutput') {
    heightSlider.value = e.target.value;
  }
  table.classList.add('hidden')
  result.style.backgroundColor = '#D0D0D0';
}

weightOutput.addEventListener('input', updateInputValue);
weightSlider.addEventListener('input', updateInputValue);
heightOutput.addEventListener('input', updateInputValue);
heightSlider.addEventListener('input', updateInputValue);

const bmiCalculator = (weight, height) => {
  const heightMeters = height / 100
  return (weight / (heightMeters * heightMeters)).toFixed(2)
}

const showBmi = (bmi) => {
  const output = document.querySelector('#resultado p')
  output.textContent = bmiCalculator(weightOutput.value, heightOutput.value)
  table.classList.remove('hidden')
}

button.addEventListener('click', showBmi);