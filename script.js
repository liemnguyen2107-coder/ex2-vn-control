// Hiện dần các khối khi cuộn tới
(function () {
  var items = document.querySelectorAll(".rv");
  // chốt an toàn: sau 2,5 giây luôn hiện hết, kể cả khi trình duyệt không báo cuộn tới
  setTimeout(function () { items.forEach(function (el) { el.classList.add("in"); }); }, 2500);
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
        // chỉ cuộn thanh chip theo chiều ngang, không đụng tới cuộn của trang
        var nav = a.parentNode;
        nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
})();
