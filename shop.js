// Dựng danh sách phụ kiện từ products.js, chia theo dòng xe
(function () {
  var products = window.PRODUCTS || [];
  var fmt = function (n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₫"; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var shop = window.SHOP || {};

  var ZALO = "https://zalo.me/0937175260";

  function card(p, idx) {
    var href = "https://shopee.vn/product/" + shop.id + "/" + p.shopee;
    var tags = "";
    if (p.isNew) tags += '<span class="tg new">Hàng mới</span>';
    if (p.sold) tags += '<span class="tg">' + p.sold + ' đã bán</span>';
    if (p.imgs > 1) tags += '<span class="tg cnt">' + p.imgs + ' ảnh</span>';
    return '<article class="pcard rv">' +
      '<button type="button" class="pimg" data-i="' + idx + '" aria-label="Xem ảnh: ' + esc(p.name) + '"><img src="assets/shop/' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy" width="640" height="640">' + tags + '</button>' +
      '<div class="pbody"><h3><button type="button" data-i="' + idx + '">' + esc(p.name) + '</button></h3>' +
      '<b class="price">' + fmt(p.price) + '</b>' +
      '<div class="pbtns">' +
        '<a class="pb zalo" href="' + ZALO + '" target="_blank" rel="noopener">Zalo</a>' +
        '<a class="pb shopee" href="' + href + '" target="_blank" rel="noopener">Shopee</a>' +
      '</div></div></article>';
  }

  // ---- popup xem nhiều ảnh ----
  var modal, cur = null, curImg = 0, lastFocus = null;
  function gallery(p) {
    var n = p.imgs || 1, out = [];
    for (var i = 1; i <= n; i++) out.push(p.imgs ? "assets/shop/g/" + p.shopee + "-" + i + ".jpg" : "assets/shop/" + p.img);
    return out;
  }
  function build() {
    modal = document.createElement("div");
    modal.className = "pm";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.hidden = true;
    modal.innerHTML =
      '<div class="pm-bg" data-close></div>' +
      '<div class="pm-box">' +
        '<button class="pm-x" type="button" data-close aria-label="Đóng">✕</button>' +
        '<div class="pm-view">' +
          '<button class="pm-nav prev" type="button" aria-label="Ảnh trước">‹</button>' +
          '<img class="pm-main" alt="">' +
          '<button class="pm-nav next" type="button" aria-label="Ảnh sau">›</button>' +
          '<span class="pm-count"></span>' +
        '</div>' +
        '<div class="pm-thumbs"></div>' +
        '<div class="pm-info"><h3 class="pm-title"></h3><b class="price pm-price"></b><p class="pm-opts"></p>' +
        '<div class="pbtns"><a class="pb zalo" target="_blank" rel="noopener">Zalo</a><a class="pb shopee" target="_blank" rel="noopener">Shopee</a></div></div>' +
      '</div>';
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) return close();
      if (e.target.classList.contains("prev")) show(curImg - 1);
      else if (e.target.classList.contains("next")) show(curImg + 1);
      else if (e.target.closest(".pm-thumbs button")) show(+e.target.closest("button").dataset.k);
    });
    var sx = null, view = modal.querySelector(".pm-view");
    view.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    view.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) show(curImg + (dx < 0 ? 1 : -1));
    });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(curImg - 1);
      else if (e.key === "ArrowRight") show(curImg + 1);
    });
  }
  function show(k) {
    var g = gallery(cur);
    curImg = (k + g.length) % g.length;
    var main = modal.querySelector(".pm-main");
    main.src = g[curImg];
    main.alt = cur.name + " — ảnh " + (curImg + 1);
    modal.querySelector(".pm-count").textContent = (curImg + 1) + " / " + g.length;
    var multi = g.length > 1;
    modal.querySelector(".prev").hidden = !multi;
    modal.querySelector(".next").hidden = !multi;
    [].forEach.call(modal.querySelectorAll(".pm-thumbs button"), function (b, i) {
      b.classList.toggle("on", i === curImg);
      if (i === curImg) b.scrollIntoView({ block: "nearest", inline: "center" });
    });
  }
  function open(p) {
    if (!modal) build();
    cur = p; lastFocus = document.activeElement;
    var g = gallery(p), href = "https://shopee.vn/product/" + shop.id + "/" + p.shopee;
    modal.querySelector(".pm-title").textContent = p.name;
    modal.querySelector(".pm-price").textContent = fmt(p.price);
    modal.querySelector(".pm-opts").textContent = p.opts || "";
    modal.querySelector(".pm-opts").hidden = !p.opts;
    modal.querySelector(".pb.zalo").href = ZALO;
    modal.querySelector(".pb.shopee").href = href;
    var th = modal.querySelector(".pm-thumbs");
    th.hidden = g.length < 2;
    th.innerHTML = g.map(function (u, i) { return '<button type="button" data-k="' + i + '" aria-label="Ảnh ' + (i + 1) + '"><img src="' + u + '" alt="" loading="lazy"></button>'; }).join("");
    modal.hidden = false;
    document.documentElement.classList.add("pm-open");
    show(0);
    modal.querySelector(".pm-x").focus();
  }
  function close() {
    modal.hidden = true;
    document.documentElement.classList.remove("pm-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-i]");
    if (b && b.closest(".pgrid")) open(products[+b.dataset.i]);
  });

  ["EX2", "EX5"].forEach(function (car) {
    var list = products.filter(function (p) { return p.car === car; });
    var grid = document.getElementById("grid-" + car.toLowerCase());
    var cnt = document.getElementById("cnt-" + car.toLowerCase());
    if (cnt) cnt.textContent = list.length ? list.length + " sản phẩm" : "Sắp có";
    if (!grid) return;
    grid.innerHTML = list.length
      ? list.map(function (p) { return card(p, products.indexOf(p)); }).join("")
      : '<div class="empty rv"><b>Phụ kiện EX5 đang được cập nhật</b><p>Nhắn Xe Chơi qua Zalo để được tư vấn và đặt trước phụ kiện cho Geely EX5.</p>' +
        '<a class="btn primary sm" href="https://zalo.me/0937175260" target="_blank" rel="noopener">💬 Hỏi qua Zalo</a></div>';
  });
})();
