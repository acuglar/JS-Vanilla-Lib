const weightSlider = document.getElementById("sliderWeight");
const weightOutput = document.getElementById("weightOutput");
const heightSlider = document.getElementById("sliderHeight");
const heightOutput = document.getElementById("heightOutput");

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