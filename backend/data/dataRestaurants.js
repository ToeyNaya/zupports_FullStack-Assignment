const restaurants = [
    {
      id: 1,
      name: "ข้าวมันไก่เจ๊แดง",
      name_en: "Je Daeng Chicken Rice",
      description: "ข้าวมันไก่สูตรต้นตำรับ น้ำจิ้มเด็ด",
      image: "https://img.wongnai.com/p/400x0/2024/04/14/f54095bab93e4b1696a93ac090950c82.jpg",
      location: "บางซื่อ, กรุงเทพฯ",
      location_en: "Bang Sue, Bangkok"
    },
    {
      id: 2,
      name: "ส้มตำแซ่บเวอร์",
      name_en: "Zab Ver Somtum",
      description: "ส้มตำไทย ลาบ น้ำตก พร้อมเสิร์ฟ",
      image: "https://f.ptcdn.info/794/015/000/1392707523-093937ptom-o.jpg",
      location: "จตุจักร, กรุงเทพฯ",
      location_en: "Chatuchak, Bangkok"
    },
    {
      id: 3,
      name: "เฝอหม้อไฟเวียดนาม",
      name_en: "Vietnamese Hotpot Pho",
      description: "ซุปร้อนๆ เส้นเหนียวนุ่ม วัตถุดิบสดใหม่",
      image: "https://img.wongnai.com/p/1920x0/2016/04/14/94a099b1b2f34ba4a229b63bf044f242.jpg",
      location: "บางเขน, กรุงเทพฯ",
      location_en: "Bang Khen, Bangkok"
    },
    {
      id: 4,
      name: "ก๋วยเตี๋ยวเรืออยุธยา",
      name_en: "Ayutthaya Boat Noodles",
      description: "เส้นเล็กเนื้อตุ๋น รสเข้มข้น",
      image: "https://img.wongnai.com/p/1920x0/2020/06/12/73584cbe3bda4de0a3dfd509ad823a45.jpg",
      location: "ลาดพร้าว, กรุงเทพฯ",
      location_en: "Lat Phrao, Bangkok"
    },
    {
      id: 5,
      name: "ข้าวหมูแดงนายฮุย",
      name_en: "Nai Hui Roasted Pork Rice",
      description: "หมูแดงหมูกรอบราดน้ำสูตรพิเศษ",
      image: "https://img.wongnai.com/p/1920x0/2020/08/15/ea44a988ef4549a38f2c347f1f040c77.jpg",
      location: "ดินแดง, กรุงเทพฯ",
      location_en: "Din Daeng, Bangkok"
    },
    {
      id: 6,
      name: "เจ๊เล็กซีฟู้ด",
      name_en: "Je Lek Seafood",
      description: "อาหารทะเลสดๆ ปรุงรสแซ่บ",
      image: "https://img.wongnai.com/p/1920x0/2018/11/27/c04e1d3b584f4e67ab1aaec7a4fe2f3a.jpg",
      location: "บางพลัด, กรุงเทพฯ",
      location_en: "Bang Phlat, Bangkok"
    },
    {
      id: 7,
      name: "ข้าวซอยนิมมาน",
      name_en: "Khao Soi Nimman",
      description: "ข้าวซอยไก่สไตล์เชียงใหม่",
      image: "https://img.wongnai.com/p/1920x0/2019/01/02/35c26c49e3764ad1a64e7f5c2d9606b6.jpg",
      location: "รัชดาภิเษก, กรุงเทพฯ",
      location_en: "Ratchadaphisek, Bangkok"
    },
    {
      id: 8,
      name: "ซูชิสายพานซามูไร",
      name_en: "Samurai Conveyor Sushi",
      description: "ซูชิสดใหม่ หมุนรอบโต๊ะ",
      image: "https://img.wongnai.com/p/1920x0/2021/05/05/bf2a5cc6b7294ae98e0530d04a9cb2ec.jpg",
      location: "อโศก, กรุงเทพฯ",
      location_en: "Asok, Bangkok"
    },
    {
      id: 9,
      name: "หมูกระทะบ้านสวน",
      name_en: "Baan Suan BBQ",
      description: "หมูกระทะรสเด็ด น้ำจิ้มสูตรเฉพาะ",
      image: "https://img.wongnai.com/p/1920x0/2018/06/12/6a03e85842a745e29db617adb0b39e09.jpg",
      location: "จอมทอง, กรุงเทพฯ",
      location_en: "Chom Thong, Bangkok"
    },
    {
      id: 10,
      name: "ติ่มซำฮ่องกง",
      name_en: "Hong Kong Dim Sum",
      description: "ติ่มซำทำสด หลากหลายเมนู",
      image: "https://img.wongnai.com/p/1920x0/2019/07/09/a8268f162a3e4b28942019b7d993dc43.jpg",
      location: "เยาวราช, กรุงเทพฯ",
      location_en: "Yaowarat, Bangkok"
    },
    {
      id: 11,
      name: "ร้านก๋วยเตี๋ยวหมูต้มยำเฮียตี๋",
      name_en: "Hia Tee Spicy Pork Noodles",
      description: "ก๋วยเตี๋ยวหมูต้มยำรสเด็ด",
      image: "https://img.wongnai.com/p/1920x0/2020/05/21/53cc63b616154b6aaf1f4be9f5182f85.jpg",
      location: "สามเสน, กรุงเทพฯ",
      location_en: "Samsen, Bangkok"
    },
    {
      id: 12,
      name: "ครัวคุณแม่",
      name_en: "Mom's Kitchen",
      description: "อาหารไทยบ้านๆ เหมือนกินที่บ้าน",
      image: "https://img.wongnai.com/p/1920x0/2016/01/04/1d00a8bb89ec4a7eb23f7b3f7d760b06.jpg",
      location: "พญาไท, กรุงเทพฯ",
      location_en: "Phaya Thai, Bangkok"
    },
    {
      id: 13,
      name: "เจ๊หน่อยข้าวขาหมู",
      name_en: "Je Noi Stewed Pork Leg Rice",
      description: "ขาหมูเปื่อยนุ่ม น้ำราดกลมกล่อม",
      image: "https://img.wongnai.com/p/1920x0/2020/11/22/167fd35784ad42d7a56a6e74f9056fbd.jpg",
      location: "ห้วยขวาง, กรุงเทพฯ",
      location_en: "Huai Khwang, Bangkok"
    },
    {
      id: 14,
      name: "กะเพราถาดป่าเถื่อน",
      name_en: "Wild Style Kra Pao",
      description: "ผัดกะเพรารสจัดจ้าน เสิร์ฟถาด",
      image: "https://img.wongnai.com/p/1920x0/2022/06/18/e180128a02ee4db79fdfd01f01d2fc53.jpg",
      location: "พระราม 2, กรุงเทพฯ",
      location_en: "Rama II, Bangkok"
    },
    {
      id: 15,
      name: "ครัวริมคลอง",
      name_en: "Canal Side Kitchen",
      description: "ร้านอาหารไทยติดริมน้ำ บรรยากาศดี",
      image: "https://img.wongnai.com/p/1920x0/2022/08/02/93a5df88aa7e423bb52e4db2e06344ce.jpg",
      location: "คลองสาน, กรุงเทพฯ",
      location_en: "Khlong San, Bangkok"
    },
    {
      id: 16,
      name: "หม้อไฟเกาหลีฮันยาง",
      name_en: "Hanyang Korean Hotpot",
      description: "หม้อไฟเกาหลีเครื่องแน่น",
      image: "https://img.wongnai.com/p/1920x0/2017/09/17/626b5f5eb5ce47bdbd49e05d46b60935.jpg",
      location: "รามคำแหง, กรุงเทพฯ",
      location_en: "Ramkhamhaeng, Bangkok"
    },
    {
      id: 17,
      name: "บาร์บีคิวจานยักษ์",
      name_en: "Giant BBQ Platter",
      description: "เนื้อย่างเสียบไม้ไซส์ยักษ์",
      image: "https://img.wongnai.com/p/1920x0/2019/03/15/e7070896f6a34f638e7f49f0e8aa849e.jpg",
      location: "บางนา, กรุงเทพฯ",
      location_en: "Bang Na, Bangkok"
    },
    {
      id: 18,
      name: "เจริญแสงซีฟู้ด",
      name_en: "Charoensang Seafood",
      description: "กุ้ง หอย ปู ปลา สดใหม่ทุกวัน",
      image: "https://img.wongnai.com/p/1920x0/2019/12/03/19f9d86d24f543bdb167e5ee2c8b0b8c.jpg",
      location: "คลองเตย, กรุงเทพฯ",
      location_en: "Khlong Toei, Bangkok"
    },
    {
      id: 19,
      name: "ข้าวต้มโต้รุ่งบางโพ",
      name_en: "Bang Pho Midnight Porridge",
      description: "ข้าวต้มเครื่องแน่น เปิดถึงเช้า",
      image: "https://img.wongnai.com/p/1920x0/2017/02/20/7b7c7c28f7eb43dc9d3ea345d5e6d2b3.jpg",
      location: "บางโพ, กรุงเทพฯ",
      location_en: "Bang Pho, Bangkok"
    },
    {
      id: 20,
      name: "ก๋วยจั๊บน้ำข้นเจ๊หลี",
      name_en: "Je Lee Spicy Pork Roll Noodles",
      description: "ก๋วยจั๊บน้ำข้น เผ็ดร้อนถึงใจ",
      image: "https://img.wongnai.com/p/1920x0/2018/04/14/9a90b5a761684f84a5cf1b9670ad07f9.jpg",
      location: "วังบูรพา, กรุงเทพฯ",
      location_en: "Wang Burapha, Bangkok"
    }
  ];
  
  module.exports = { restaurants };
  