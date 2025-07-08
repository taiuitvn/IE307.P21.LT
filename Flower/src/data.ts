
export interface Flower {
  mahoa: string;
  maloai: string; 
  tenhoa: string;
  giaban: number;
  hinh: string;
  mota: string;
}
export const flowerData: Flower[] = [
  { mahoa: "1", maloai: "Hoa-Cuc", tenhoa: "Đón xuân", giaban: 50000, hinh: "hoa1.jpg", mota: "Hoa cúc các màu: trắng, vàng, cam\r\n" },
  { mahoa: "2", maloai: "Hoa-Cuc", tenhoa: "Hồn nhiên", giaban: 60000, hinh: "hoa1.jpg", mota: "Hoa cúc vàng, cam. lá măng\r\n" },
  { mahoa: "3", maloai: "Hoa-Cuc", tenhoa: "Tím thuỷ chung", giaban: 45000, hinh: "hoa1.jpg", mota: "Hoa cúc tím\r\n" },
  { mahoa: "4", maloai: "Hoa-Cuc", tenhoa: "Nét duyên tím hoa cà", giaban: 40000, hinh: "hoa1.jpg", mota: "Hoa cúc màu tím nhạt\r\n" },
  { mahoa: "5", maloai: "Hoa-Cuc", tenhoa: "Cùng khoe sắc", giaban: 70000, hinh: "hoa1.jpg", mota: "Hoa cúc các màu: trắng, vàng, cam\r\n" },
  { mahoa: "6", maloai: "Hoa-Cuc", tenhoa: "Trắng thơ ngây", giaban: 65000, hinh: "hoa2.jpg", mota: "Hoa cúc trắng\r\n" },
  { mahoa: "7", maloai: "Hoa-Cuoi", tenhoa: "Dây tơ hồng", giaban: 250000, hinh: "hoa2.jpg", mota: "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng\r\n" },
  { mahoa: "8", maloai: "Hoa-Cuoi", tenhoa: "Cầu thuỷ tinh", giaban: 220000, hinh: "hoa2.jpg", mota: "Hoa hồng và hoa thuỷ tiên trắng\r\n" },
  { mahoa: "9", maloai: "Hoa-Cuoi", tenhoa: "Duyên thầm", giaban: 260000, hinh: "hoa2.jpg", mota: "Hoa cúc trắng, baby, lá măng\r\n" },
  { mahoa: "10", maloai: "Hoa-Cuoi", tenhoa: "Đâm chồi nảy lộc", giaban: 180000, hinh: "hoa2.jpg", mota: "Hoa hồng trắng và các loại lá măng\r\n" },
  { mahoa: "11", maloai: "Hoa-Cuoi", tenhoa: "Hoà quyện", giaban: 270000, hinh: "hoa3.jpg", mota: "Hoa hồng trắng, lá thuỷ tùng\r\n" },
  { mahoa: "12", maloai: "Hoa-Cuoi", tenhoa: "Nồng nàn", giaban: 210000, hinh: "hoa3.jpg", mota: "Hoa hồng đỏ, lá thuỷ tùng, lá măng\r\n" },
  { mahoa: "13", maloai: "Hoa-Hong", tenhoa: "Together", giaban: 120000, hinh: "hoa3.jpg", mota: "Hồng xác pháo, cúc tím\r\n" },
  { mahoa: "14", maloai: "Hoa-Hong", tenhoa: "Long trip", giaban: 85000, hinh: "hoa3.jpg", mota: "Hoa hồng đỏ, lá kim thuỷ tùng\r\n" },
  { mahoa: "15", maloai: "Hoa-Hong", tenhoa: "Beautiful life", giaban: 100000, hinh: "hoa3.jpg", mota: "Hoa hồng đỏ, lá măng, lá đệm\r\n" },
  { mahoa: "16", maloai: "Hoa-Hong", tenhoa: "Morning Sun", giaban: 75000, hinh: "hoa4.jpg", mota: "Hoa hồng vàng\r\n" },
  { mahoa: "17", maloai: "Hoa-Hong", tenhoa: "Pretty Bloom", giaban: 65000, hinh: "hoa4.jpg", mota: "Hoa hồng trắng và lá thông\r\n" },
  { mahoa: "18", maloai: "Hoa-Hong", tenhoa: "Red Rose", giaban: 45000, hinh: "hoa4.jpg", mota: "Hoa hồng đỏ và lá măng\r\n" },
  { mahoa: "19", maloai: "Hoa-Xuan", tenhoa: "Vấn vương", giaban: 150000, hinh: "hoa4.jpg", mota: "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá\r\n" },
  { mahoa: "20", maloai: "Hoa-Xuan", tenhoa: "Nắng nhẹ nhàng", giaban: 50000, hinh: "hoa4.jpg", mota: "Hoa cúc xanh, hoa lys vàng, lá đệm\r\n" },
];


export interface Category {
  maloai: string;
  tenloai: string;
  hinh?: string; // Optional property for category image
}

export const categoryData: Category[] = [
  { maloai: "Hoa-Cuc", tenloai: "Hoa cúc" },
  { maloai: "Hoa-Cuoi", tenloai: "Hoa cưới" },
  { maloai: "Hoa-Hong", tenloai: "Hoa hồng" },
  { maloai: "Hoa-Xuan", tenloai: "Hoa xuân" }
];