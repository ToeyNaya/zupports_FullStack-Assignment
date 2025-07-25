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
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [MySQL2](https://github.com/sidorares/node-mysql2) (สำหรับเชื่อมต่อ DB)

---

## 📁 โครงสร้างโปรเจกต์

restaurant-search/
│
├── backend/ # Node.js + Express API
│ ├── config/ # การตั้งค่า DB
│ ├── routes/ # Route ของ API
│ ├── controllers/ # Logic จัดการข้อมูล
│ └── server.js # จุดเริ่มต้นของ server
│
├── frontend/ # Vite + React + Tailwind
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # หน้าเว็บ
│ │ └── App.jsx
│ └── index.html
│
└── README.md # ไฟล์คำอธิบายโปรเจกต์
