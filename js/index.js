function loadScript(url) {
  var body = document.getElementsByTagName("body")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.defer = true;
  script.async = true;
  script.src = url;
  body.appendChild(script);
}
loadScript("js/components/typewrite.js");
