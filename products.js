// Danh sách phụ kiện. Thêm sản phẩm mới = thêm một dòng vào mảng này.
//   car:   "EX2" hoặc "EX5" (trang tự xếp vào đúng nhóm xe)
//   price: giá bằng đồng (số), ví dụ 285000
//   img:   ảnh trong assets/shop/ (nên vuông, ~640px)
//   sold:  số đã bán (bỏ trống nếu không muốn hiện)
//   shopee: mã sản phẩm trên Shopee (số cuối trong link .../i.99881975.XXXXXXXX)
//   imgs:  số ảnh trong popup, file assets/shop/g/<shopee>-1.jpg, -2.jpg ...
//   opts:  mô tả phân loại (màu, size...) hiện trong popup, có thể bỏ trống
window.PRODUCTS = [
  // ---- Geely EX2 ----
  { car: "EX2", name: "Bọc vô lăng đẹp nhiều màu cho xe Geely EX2", price: 285000, img: "boc-vo-lang.jpg", sold: 95, shopee: "51963362908", imgs: 6, opts: "Màu sắc: Trắng xám, Trắng đen, Trắng, Xám đen, Xám, Đen" },
  { car: "EX2", name: "Miếng dán cường lực bảo vệ màn hình 14.6 inch xe Geely EX2", price: 235000, img: "dan-cuong-luc.jpg", sold: 31, shopee: "42679769885", imgs: 4, opts: "Màn hình EX2: Màn hình trung tâm 14.6 inch" },
  { car: "EX2", name: "Lưới chống côn trùng, bảo vệ két nước xe Geely EX2 — thiết kế zin, lắp không cần tháo cản", price: 255000, img: "luoi-ket-nuoc.jpg", sold: 30, shopee: "47960641902", imgs: 8, opts: "Size: Full (Pro), Mini (Pro/Max), Full (Max)" },
  { car: "EX2", name: "Miếng lót hộc đựng ly trung tâm cho xe Geely EX2", price: 180000, img: "lot-hoc-ly.jpg", sold: 28, shopee: "46566157808", imgs: 7, opts: "Màu: Đen, Trắng" },
  { car: "EX2", name: "Hộp đựng nhiều màu để đồ phía ghế phụ cho Geely EX2", price: 289000, img: "hop-ghe-phu.jpg", sold: 10, shopee: "51909318967", imgs: 4, opts: "Màu sắc: Hộp màu trắng, Hộp màu đen" },
  { car: "EX2", name: "Khung cao su dễ thương bảo vệ màn hình xe Geely EX2", price: 220000, img: "khung-cao-su-de-thuong.jpg", sold: 5, shopee: "51860497417", imgs: 4, opts: "Màu: Màu trắng, Màu hồng" },
  { car: "EX2", name: "Miếng dán bậc lên xuống chống trầy xe Geely EX2", price: 360000, img: "dan-bac-len-xuong.jpg", sold: 8, shopee: "48512211193", imgs: 4, opts: "Bảo vệ cửa: Sợi carbon, Đen" },
  { car: "EX2", name: "Hộp đựng đồ tỳ tay trung tâm nhiều ngăn cho xe Geely EX2", price: 240000, img: "hop-ty-tay.jpg", sold: 8, shopee: "46214261182", imgs: 5, opts: "Màu: Đen, Trắng" },
  { car: "EX2", name: "Dè chắn bùn cho xe Geely EX2 dễ lắp đặt", price: 205000, img: "de-chan-bun.jpg", sold: 8, shopee: "42130376959", imgs: 3 },
  { car: "EX2", name: "Vỏ bảo vệ chìa khoá xe Geely EX2", price: 165000, img: "vo-chia-khoa.jpg", sold: 5, shopee: "51212180486", imgs: 5, opts: "Màu: Đen, Trắng" },
  { car: "EX2", name: "Hộc đựng đồ cửa trước sau cho xe Geely EX2", price: 350000, img: "hoc-cua.jpg", shopee: "57064247065", imgs: 9, opts: "Loại: Ghế sau trắng, Ghế sau đen, Ghế trước đen, Ghế trước trắng" },
  { car: "EX2", name: "Hộp đựng đồ trung tâm cho xe Geely EX2", price: 280000, img: "hop-do-trung-tam.jpg", shopee: "56212182749", imgs: 7, opts: "Màu sắc: Màu trắng, Màu đen" },
  { car: "EX2", name: "Khung cao su nhiều màu bảo vệ màn hình Geely EX2", price: 200000, img: "khung-cao-su-nhieu-mau.jpg", shopee: "52708252180", imgs: 4, opts: "Cao su bảo vệ: Màu Trắng, Màu Hồng" },
  { car: "EX2", name: "Trang trí cần số cho xe Geely EX2", price: 250000, img: "trang-tri-can-so.jpg", shopee: "43632998188", imgs: 5 },
  { car: "EX2", name: "Miếng lót hốc sạc cho Geely EX2", price: 165000, img: "lot-hoc-sac.jpg", isNew: true, shopee: "54718504232", imgs: 7, opts: "Màu: Trắng, Đen" },

  // ---- Geely EX5 ----
  { car: "EX5", name: "Bọc vô lăng da nhiều màu cho xe Geely EX5 và EX5 EM-i", price: 285000, img: "boc-vo-lang-ex5.jpg", sold: 5, shopee: "47466102398", imgs: 5, opts: "Màu: Đen + Nâu da, Đen + Xám, Đen" },
  { car: "EX5", name: "Dè chắn bùn bốn bánh Geely EX5 EM-i", price: 285000, img: "de-chan-bun-ex5.jpg", shopee: "45513082158", imgs: 5 }
];
window.SHOP = { id: "99881975", url: "https://shopee.vn/shop/99881975", name: "Phụ Kiện Xe Chơi" };
