function AMPComponents() {
  var loaded = "Successful loaded component: _s";
  var error = "Cannot load component: _s";
  var isInit = false;
  this.init = function() {
    isInit = true;
    var _main = document.createElement("script");
    document.head.appendChild(_main);
    _main.setAttribute("async", "");
    _main.src = "https://cdn.ampproject.org/v0.js";
    _main.addEventListener("load", function() {
      console.log("Successful generated AMP ⚡");
    });
    _main.addEventListener("error", function() {
      this.remove();
      isInit = false;
      var err = "Cannot generate AMP ⚡ and load script v0.js";
      console.error(err);
      throw TypeError(err);
    });
  }
  this.component = function(componentName, version) {
    if (isInit) {
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
    else {
      var errInit = "You need .init() function instead. [amp-" + componentName + "-" + version + ".js]";
      console.error(errInit);
      throw Error(errInit);
    }
  }
}
