// calling vars from document

let stars = document.getElementById("stars");

let moon = document.getElementById("moon");

let mountains3 = document.getElementById("mountains3");

let mountains4 = document.getElementById("mountains4");

let river = document.getElementById("river");

let boat = document.getElementById("boat");

let nouvil = document.querySelector(".nouvil");

let main = document.querySelector(".main");

window.onscroll = function () {
  let value = scrollY;
  //   control objects as to value of scrollY

  stars.style.left = value + "px";

  moon.style.top = value * 4 + "px";

  mountains3.style.top = value * 2 + "px";

  mountains4.style.top = value * 1.5 + "px";

  river.style.top = value + "px";

  boat.style.top = value + "px";

  boat.style.left = value * 3 + "px";

  nouvil.style.fontSize = value + "px";

  // making title more bigger as to scroll

  if (scrollY >= 67) {
    nouvil.style.fontSize = 67 + "px";
    // make title fixed at identified point

    nouvil.style.position = "fixed";

    // hide title at 375px or bigger

    if (scrollY >= 375) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }

    // make background morning in the point

    if (scrollY >= 100) {
      main.style.background = "linear-gradient(#276281,#10001f)";
    } else {
      main.style.background = "linear-gradient(#200016, #10001f)";
    }
  }
};
