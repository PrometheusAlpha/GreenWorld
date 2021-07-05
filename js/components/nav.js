var wrapper = document.querySelector(".wrapper");
console.log(wrapper);
wrapper.onscroll = function (f) {
  var logo_left = document.getElementById("logo__disappear__left");
  var logo_right = document.getElementById("logo__disappear__right");

  if (this.oldScroll < this.scrollY) {
    console.log('  ');
    logo_left.style.marginRight = "-80px";
    logo_left.style.opacity = "0";
    logo_right.style.opacity = "0";
  } else {
    logo_left.style.marginRight = "0";
    logo_left.style.opacity = "1";
    logo_right.style.opacity = "1";
  }

  this.oldScroll = this.scrollY;
};
