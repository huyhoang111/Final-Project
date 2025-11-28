# Final Project CMS – Gym Management System

A web-based **Content Management System (CMS)** designed for fitness and gym operations.
Hệ thống hỗ trợ quản lý khách hàng, nhân viên, đặt chỗ, lớp học, đơn hàng, dịch vụ và gói tập.
Frontend được xây dựng bằng **React 18**, kết nối tới RESTful API.

---

## 🚀 Features (Tính năng chính)

### 1. Tổng quan (Dashboard)

* Hiển thị doanh số theo tháng
* Tổng số thành viên
* Khách hàng mới
* Tổng số gói tập đang hoạt động
* Bộ lọc theo **địa điểm – năm – tháng**

### 2. Đặt chỗ (Booking)

* Lịch đặt lớp PT 1:1
* Quản lý trạng thái: Đã đặt, Chờ xác nhận, Hoàn thành, Hủy, Vắng
* Xem chi tiết phiên tập

### 3. Lớp học (Class)

* Quản lý lịch lớp nhóm
* Xem thông tin lớp và lịch học theo ngày
* Quản lý tình trạng lớp

### 4. Đơn hàng (Sale)

* Danh sách đơn hàng
* Xem chi tiết đơn hàng và thanh toán
* Quản lý trạng thái thanh toán

### 5. Khách hàng (Customer)

* Danh sách khách hàng
* Xem thông tin chi tiết
* Lịch sử mua hàng
* Lịch sử booking

### 6. Nhân viên (Staff)

* Danh sách huấn luyện viên / nhân viên
* Thông tin chi tiết nhân viên

### 7. Dịch vụ (Service)

* Danh sách các dịch vụ của phòng tập
* Tạo / sửa / cập nhật dịch vụ

### 8. Gói tập (Package)

* Danh sách gói tập
* Quản lý trạng thái và thông tin gói

### 9. Cài đặt (Settings)

* Quản lý cấu hình hệ thống (cơ bản)

---

## 🧩 Tech Stack

| Layer         | Technology                                 |
| ------------- | ------------------------------------------ |
| Frontend      | React 18, Vite                             |
| State         | Redux Toolkit                              |
| API           | Axios + Interceptors                       |
| UI            | Bootstrap 5, Reactstrap, Styled Components |
| Chart         | ApexCharts, Chart.js, Recharts             |
| Date/Calendar | FullCalendar                               |
| Form          | Formik + Yup                               |
| i18n          | i18next                                    |

---

## 📁 Project Structure

```
src/
├── api/                # Axios instance & interceptors
├── assets/             # Fonts, icons, images, SCSS
├── components/         # Reusable UI components
├── pages/              # Các module chính (Dashboard, Booking, Sale, ...)
├── services/           # API service layer
├── store/              # Redux store
├── utils/              # Helper utilities
├── App.jsx             # App root
└── main.jsx            # Entry file
```

---

## 🔧 Installation

### 1. Clone repo

```
git clone <repo-url>
cd final-project
```

### 2. Install dependencies

```
npm install --legacy-peer-deps
```

### 3. Setup environment

Tạo file `.env`:

```
VITE_APP_BASE_URL=http://your-api-url/v1/cms
VITE_PORT=3001
```

### 4. Run development

```
npm run dev
```

Ứng dụng chạy tại:
👉 [http://localhost:3001](http://localhost:3001)

---

## 📦 Build Production

```
npm run build
```

---

## 🔐 Authentication

* Hệ thống sử dụng **JWT Token**
* Token được lưu trong `sessionStorage`
* Axios interceptor tự động attach token vào mỗi request

---

## 📌 Notes

* Repo chỉ bao gồm **Frontend**
* Một số chức năng ẩn do phụ thuộc backend hoặc chưa dùng trong phiên bản cuối kỳ
* Hệ thống hỗ trợ đa ngôn ngữ (Vie, Eng…)

---

## 👤 Author

**Tran Huy Hoang** – Final Project 2025

---
