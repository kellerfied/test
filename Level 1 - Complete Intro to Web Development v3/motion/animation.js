const ball = document.querySelector(".ball");

popmotion.animate({
  from: "0px",
  to: "50px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.top = update;
  },
});
