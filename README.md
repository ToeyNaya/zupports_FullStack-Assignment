
# 🥢 ระบบค้นหาร้านอาหาร (Restaurant Search System)

ระบบเว็บแอปพลิเคชันสำหรับค้นหาร้านอาหาร โดยสามารถค้นหาจาก **ชื่อร้าน** หรือ **ที่อยู่ร้าน** ได้แบบเรียลไทม์  
Frontend พัฒนาโดยใช้ **Vite + React + TailwindCSS**  
Backend พัฒนาโดยใช้ **Node.js + Express.js**  
ฐานข้อมูลใช้ **MySQL**

---

## 🔍 ฟีเจอร์หลัก

- ค้นหาร้านอาหารแบบทันที (Debounced Search)
- รองรับการค้นหาจากชื่อร้าน หรือที่อยู่ร้าน
- แสดงผลลัพธ์แบบรายการ พร้อมภาพและรายละเอียดร้าน
- ระบบ cache (ถ้ามี) เพื่อเพิ่มความเร็วการตอบสนอง

---

## 🧑‍💻 Tech Stack

### Frontend
- Vite
- React
- TailwindCSS

### Backend
- Node.js
- Express.js
- MySQL
- MySQL2 (library สำหรับเชื่อมต่อฐานข้อมูล)

---

## 📁 โครงสร้างโปรเจกต์

```
restaurant-search/
│
├── backend/                 # Node.js + Express API
│   ├── config/              # การตั้งค่า DB
│   ├── routes/              # Route ของ API
│   ├── controllers/         # Logic จัดการข้อมูล
│   └── server.js            # จุดเริ่มต้นของ server
│
├── frontend/                # Vite + React + Tailwind
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── pages/           # หน้าเว็บ
│   │   └── App.jsx
│   └── index.html
│
└── README.md                # ไฟล์คำอธิบายโปรเจกต์
```

---

## 📦 API ตัวอย่าง

- `GET /api/restaurants?q=keyword`  
  → ค้นหาร้านอาหารจาก **ชื่อ** หรือ **ที่อยู่**

---

## 📌 หมายเหตุ

- ระบบรองรับการค้นหาแบบ real-time โดยใช้ Debounce
- ควรเปิดใช้งาน CORS ที่ฝั่ง Backend หาก frontend กับ backend คนละพอร์ต

---

## 🙋‍♂️ ผู้พัฒนา

- [ใส่ชื่อของคุณที่นี่]
- GitHub: [ใส่ลิงก์ GitHub ของคุณที่นี่]

---

## 📃 License

This project is licensed under the MIT License.
