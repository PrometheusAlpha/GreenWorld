let slide = (e) => {
  const sliderPos = e.target.value;
  document.getElementById(
    "slider"
  ).previousElementSibling.style.width = `${sliderPos}%`;
  document.getElementById(
    "slider-button"
  ).style.left = `calc(${sliderPos}% - 18px)`;
};
