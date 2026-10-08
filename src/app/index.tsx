import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Barang {
  id: number;
  nama: string;
  kondisi: string;
  harga: number;
  lokasi: string;
  kategori: string;
}

const daftarBarang: Barang[] = [
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

const daftarKategori = ["Elektronik", "Furniture", "Fashion", "Lainnya"];

const formatHarga = (harga: number): string => {
  return "Rp" + harga.toLocaleString("id-ID");
};

export default function Home() {
  return (
    <View style={styles.container}>
      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />

        <TextInput
          placeholder="Cari barang preloved..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* KATEGORI */}
        <Text style={styles.sectionTitle}>Kategori</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {daftarKategori.map((kategori) => (
            <Pressable key={kategori} style={styles.categoryCard}>
              <Ionicons
                name={
                  kategori === "Elektronik"
                    ? "phone-portrait-outline"
                    : kategori === "Furniture"
                      ? "bed-outline"
                      : kategori === "Fashion"
                        ? "shirt-outline"
                        : "grid-outline"
                }
                size={26}
                color="#2E8B57"
              />

              <Text style={styles.categoryText}>{kategori}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* BARANG PRELOVED */}
        <Text style={styles.sectionTitle}>Barang Preloved</Text>

        <View style={styles.productContainer}>
          {daftarBarang.map((barang) => (
            <Pressable key={barang.id} style={styles.productCard}>
              {/* GAMBAR SEMENTARA */}
              <View style={styles.productImage}>
                <Ionicons name="image-outline" size={42} color="#2E8B57" />
              </View>

              {/* INFORMASI BARANG */}
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{barang.nama}</Text>

                <Text style={styles.condition}>Kondisi: {barang.kondisi}</Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#2E8B57",
                  }}
                >
                  {formatHarga(barang.harga)}
                </Text>

                <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={15} color="#777" />

                  <Text style={styles.location}>{barang.lokasi}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNavigation}>
        {/* HOME */}
        <Pressable style={styles.navItem}>
          <Ionicons name="home" size={24} color="#2E8B57" />

          <Text style={styles.activeNavText}>Home</Text>
        </Pressable>

        {/* CHAT */}
        <Pressable style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#777" />

          <Text style={styles.navText}>Chat</Text>
        </Pressable>

        {/* KERANJANG */}
        <Pressable style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#777" />

          <Text style={styles.navText}>Keranjang</Text>
        </Pressable>

        {/* PROFILE */}
        <Pressable style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#777" />

          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ==========================
// EXTERNAL STYLING
// ==========================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 55,
    paddingHorizontal: 14,
    height: 48,
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 90,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    color: "#222",
  },

  categoryCard: {
    width: 105,
    height: 95,
    backgroundColor: "#F1F8F4",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  productContainer: {
    gap: 12,
  },

  productCard: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#F1F8F4",
    alignItems: "center",
    justifyContent: "center",
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },

  condition: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  location: {
    fontSize: 12,
    color: "#777",
    marginLeft: 3,
  },

  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeNavText: {
    fontSize: 11,
    marginTop: 3,
    color: "#2E8B57",
    fontWeight: "600",
  },

  navText: {
    fontSize: 11,
    marginTop: 3,
    color: "#777",
  },
});
