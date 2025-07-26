# 🥢 ระบบรายชื่อร้านอาหาร (Restaurant List System)

ระบบเว็บแอปพลิเคชันสำหรับค้นหาร้านอาหาร โดยสามารถค้นหาจาก **ชื่อร้าน** หรือ **ที่อยู่ร้าน** ได้แบบเรียลไทม์  
Frontend พัฒนาโดยใช้ **Vite + React + TailwindCSS**  
Backend พัฒนาโดยใช้ **Node.js + Express.js**  
ฐานข้อมูลใช้ **MySQL**

---

## 🔍 ฟีเจอร์หลัก

- ค้นหาร้านอาหารแบบทันที (Debounced Search)
- รองรับการค้นหาจากชื่อร้าน หรือที่อยู่ร้าน
- แสดงผลลัพธ์แบบรายการ พร้อมภาพและรายละเอียดร้าน
- รองรับการแสดงผลแผนที่ Google Map
- ระบบ cache เพื่อเพิ่มความเร็วการตอบสนอง

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
│   ├── routes/              # Route ของ API
│   ├── controllers/         # Logic จัดการข้อมูล
│   ├── config.js              # การตั้งค่า DB
│   └── app.js            # จุดเริ่มต้นของ server
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

## ⚙️ วิธีการติดตั้งและรันโปรเจกต์

### 1. Clone โปรเจกต์

```bash
git clone https://github.com/ToeyNaya/zupports_FullStack-Assignment.git
cd zupports_FullStack-Assignment
```

---

### 2. ติดตั้งและรัน Backend

```bash
cd backend
npm install
```

#### 🔧 ตั้งค่าไฟล์ config

```
// backend/config.js
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // หรือใส่รหัสผ่านของคุณ
  database: 'restaurant_cache',
});
```

#### ▶️ เริ่มรัน Server

```bash
npm run dev
```

---

### 3. ติดตั้งและรัน Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

### 4. สร้างฐานข้อมูล MySQL

```sql
CREATE DATABASE restaurant_cache;

-- นำเข้าตาราง cache จากไฟล์ restaurant_cache.sql
```


---

## 📦 API ตัวอย่าง

- `GET /api/restaurants?q=keyword`  
  → ค้นหาร้านอาหารจาก **ชื่อ** หรือ **ที่อยู่**

---

## 📌 หมายเหตุ

- ระบบรองรับการค้นหาแบบ real-time โดยใช้ Debounce
- ควรเปิดใช้งาน CORS ที่ฝั่ง Backend หาก frontend กับ backend คนละพอร์ต
- หากเรียก API ไม่ได้ ให้เช็กว่า frontend เรียก URL ถูกต้อง เช่น `http://localhost:8000/api/restaurants?q=...`

---

## 🙋‍♂️ ผู้พัฒนา

- นันทวัฒน์ งามภูเขียว (Nanthawat Ngamphukhiao)  
- Tel : 084-251-7806
