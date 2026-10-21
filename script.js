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
      if (!a) return;
      if (a) {
        a.classList.add("on");
        // chỉ cuộn thanh chip theo chiều ngang, không đụng tới cuộn của trang
        var nav = a.parentNode;
        nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  Array.prototype.forEach.call(document.querySelectorAll("main > section[id]"), function (s) { spy.observe(s); });
})();


// Thanh dock phía dưới: sáng theo mục đang xem
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".dock a[data-spy]"));
  if (!links.length) return;
  var map = {};
  links.forEach(function (a) {
    a.dataset.spy.split(",").forEach(function (id) { map[id] = a; });
  });
  var sections = document.querySelectorAll("main > section[id]");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var a = map[e.target.id];
      links.forEach(function (l) { l.classList.toggle("on", l === a); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  Array.prototype.forEach.call(sections, function (s) { spy.observe(s); });
})();
