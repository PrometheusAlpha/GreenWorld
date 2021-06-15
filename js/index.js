function loadScript(url) {
  var body = document.getElementsByTagName("body")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  body.appendChild(script);
}
loadScript("js/components/typewrite.js");
loadScript("js/components/post.js");
loadScript("js/components/name.js");
