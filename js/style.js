var style = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'css/style.min.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};

var print = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'css/print.min.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) {
  raf(style);
  raf(print);
} else {
  window.addEventListener('load', style);
  window.addEventListener('load', print);
}
