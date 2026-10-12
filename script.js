// Hiện dần các khối khi cuộn tới
(function () {
  var items = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

// Đánh dấu mục đang xem trên thanh chip
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".chips a"));
  var map = {};
  links.forEach(function (a) {
    var s = document.querySelector(a.getAttribute("href"));
    if (s) map[s.id] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove("on"); });
      var a = map[e.target.id];
      if (a) {
        a.classList.add("on");
        a.scrollIntoView({ inline: "center", block: "nearest" });
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
})();
