let slide = (e) => {
  const sliderPos = e.target.value;
  e.target.previousElementSibling.style.width = `${sliderPos}%`;
  e.target.nextElementSibling.style.left = `calc(${sliderPos}% - 18px)`;
};
