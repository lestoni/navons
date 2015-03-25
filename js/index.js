(function(document){
  "use strict";
  var controllers = document.querySelectorAll(".controller");

  for (var i = 0; i < controllers.length; i++) {
    controllers[i].addEventListener("click", handleClick, false);
  }

  function handleClick(event) {
    var target = event.target,
        tagName = target.tagName.toLowerCase(),
        className;
    if (tagName === "div") {
       className = target.className.split(" ")[2];
       toggleState( className, target );
    }
  }

  function toggleState ( selector, target ) {
    var icons = target.parentNode.querySelectorAll(".icon." + selector),
        i = 0,
        len= icons.length,
        icon;

    for (; i < len; i++) {
      icon = icons[i];
      console.log(icon);
      if(icon.classList.contains("roll")){
        icon.classList.remove("roll");
      } else {
        icon.classList.add("roll");
      }
    }
  }
})(document);