function AMPComponents() {
  var loaded = "Successful loaded component: _s";
  var error = "Cannot load component: _s";
  this.init = function() {
    var _main = document.createElement("script");
    document.head.appendChild(_main);
    _main.setAttribute("async", "");
    _main.src = "https://cdn.ampproject.org/v0.js";
  }
  this.component = function(componentName, version) {
    var scripts = document.createElement("script");
    document.head.appendChild(scripts);
    scripts.setAttribute("async", "");
    scripts.setAttribute("custom-element", "amp-" + componentName);
    scripts.src = "https://cdn.ampproject.org/v0/amp-" + componentName + "-" + version + ".js";
    scripts.addEventListener("load", function() {
      console.log(loaded.replace("_s", "amp-" + componentName + "-" + version + ".js"));
    });
    scripts.addEventListener("error", function() {
      this.remove();
      var err = error.replace("_s", "amp-" + componentsName + "-" + version + ".js");
      console.error(err);
      throw TypeError(err);
    });
  }
}
