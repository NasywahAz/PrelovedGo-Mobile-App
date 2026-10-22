export interface Barang {
  id: number;
  nama: string;
  kondisi: string;
  harga: number;
  lokasi: string;
  kategori: string;
}

export const daftarBarang: Barang[] = [
  {
    id: 1,
    nama: "Laptop Asus",
    kondisi: "Baik",
    harga: 10000000,
    lokasi: "Batu",
    kategori: "Elektronik",
  },
  {
    id: 2,
    nama: "Meja Belajar Kayu",
    kondisi: "Baik",
    harga: 135000,
    lokasi: "Malang",
    kategori: "Furniture",
  },
  {
    id: 3,
    nama: "iPhone 13",
    kondisi: "Sangat Baik",
    harga: 6500000,
    lokasi: "Malang",
    kategori: "Elektronik",
  },
  {
    id: 4,
    nama: "Tas Ransel",
    kondisi: "Baik",
    harga: 150000,
    lokasi: "Batu",
    kategori: "Fashion",
  },
  {
    id: 5,
    nama: "Kursi Kantor",
    kondisi: "Baik",
    harga: 300000,
    lokasi: "Malang",
    kategori: "Furniture",
  },
  {
    id: 6,
    nama: "Headset Gaming",
    kondisi: "Sangat Baik",
    harga: 250000,
    lokasi: "Malang",
    kategori: "Elektronik",
  },
];

export function formatHarga(harga: number) {
  return "Rp" + harga.toLocaleString("id-ID");
}
