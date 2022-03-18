const weightSlider = document.getElementById("sliderWeight");
const weightOutput = document.getElementById("weightOutput");
const heightSlider = document.getElementById("sliderHeight");
const heightOutput = document.getElementById("heightOutput");
const button = document.getElementById("btnCalcular");

function updateInputValue(e) {
  console.log(e.target.id);
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
}

weightOutput.addEventListener("input", updateInputValue);
weightSlider.addEventListener("input", updateInputValue);
heightOutput.addEventListener("input", updateInputValue);
heightSlider.addEventListener("input", updateInputValue);

const bmiCalculator = (weight, height) => {
  const heightMeters = height / 100
  return (weight / (heightMeters * heightMeters)).toFixed(2)
}

const showBmi = (bmi) => {
  const output = document.querySelector("#resultado p")
  output.textContent = bmiCalculator(weightOutput.value, heightOutput.value)
}

button.addEventListener("click", showBmi);