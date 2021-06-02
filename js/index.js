function loadScript(url) {
  var head = document.getElementsByTagName("body")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.defer = true;
  script.async = true;
  script.src = url;
  head.appendChild(script);
}
loadScript("js/components/typewrite.js");
loadScript("js/components/compare.js");
