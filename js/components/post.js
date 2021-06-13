function show(type) {
  var id = type + "_post";
  var target = document.getElementById(id);
  target.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function hide(type) {
  var id = type + "_post";
  var target = document.getElementById(id);
  target.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}
