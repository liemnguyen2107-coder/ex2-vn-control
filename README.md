# Trang giới thiệu EX2 VN Control

Trang tĩnh (HTML/CSS/JS thuần, không cần build) để đăng lên GitHub Pages.

## Chạy thử trên máy

```bash
python3 -m http.server 8765 --directory .
```

Mở http://localhost:8765

## Đăng lên GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ `ex2-vn-control`), chép **toàn bộ nội dung thư mục này** vào gốc repo (kể cả file `.nojekyll`).
2. Repo → **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, thư mục `/ (root)`.
3. Sau ~1 phút trang chạy ở `https://<tên-github>.github.io/ex2-vn-control/`.

Muốn dùng tên miền riêng: thêm file `CNAME` chứa tên miền, rồi trỏ DNS về GitHub Pages.

## Sửa nội dung

- Chữ: `index.html` (mỗi mục là một `<section>`).
- Màu, cỡ chữ: biến `:root` đầu `style.css`.
- Ảnh: thay file trong `assets/` (giữ nguyên tên, tỉ lệ 16:9). Nên thay bằng ảnh chụp bản app mới nhất.
- Link nhóm Zalo: tìm `zalo.me` trong `index.html`.
