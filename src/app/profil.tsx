import { router } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FavoriteContext } from "../FavoriteContext";
import { ThemeContext } from "../ThemeContext";

export default function ProfilScreen() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { daftarFavorit } = useContext(FavoriteContext);

  const warnaLatar = isDarkMode ? "#121212" : "#F5F5F5";
  const warnaKartu = isDarkMode ? "#242424" : "#FFFFFF";
  const warnaTeks = isDarkMode ? "#FFFFFF" : "#222222";
  const warnaSekunder = isDarkMode ? "#BBBBBB" : "#666666";

  return (
    <View style={[styles.container, { backgroundColor: warnaLatar }]}>
      <Text style={[styles.judul, { color: warnaTeks }]}>Profil Saya</Text>

      <View style={[styles.kartuProfil, { backgroundColor: warnaKartu }]}>
        <View style={styles.avatarLingkaran}>
          <Text style={styles.avatar}>👤</Text>
        </View>

        <Text style={[styles.nama, { color: warnaTeks }]}>
          Pengguna PrelovedGo
        </Text>

        <Text style={{ color: warnaSekunder }}>
          Selamat datang di PrelovedGo!
        </Text>

        <Text style={[styles.deskripsi, { color: warnaSekunder }]}>
          Temukan dan simpan barang preloved favoritmu.
        </Text>
      </View>

      <Text style={[styles.judulBagian, { color: warnaTeks }]}>
        Aktivitas Saya
      </Text>

      <View style={[styles.kartuInfo, { backgroundColor: warnaKartu }]}>
        <Text style={[styles.label, { color: warnaTeks }]}>
          ❤️ Barang Favorit
        </Text>

        <Text style={styles.jumlah}>{daftarFavorit.length} barang</Text>

        <Text style={{ color: warnaSekunder }}>
          Jumlah barang yang kamu simpan di Favorit.
        </Text>
      </View>

      <Text style={[styles.judulBagian, { color: warnaTeks }]}>Pengaturan</Text>

      <Pressable
        style={styles.tombol}
        onPress={() => setIsDarkMode(!isDarkMode)}
      >
        <Text style={styles.teksTombol}>
          {isDarkMode ? "☀️ Gunakan Mode Terang" : "🌙 Gunakan Mode Gelap"}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.tombol, styles.tombolKembali]}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.teksTombol}>🏠 Kembali ke Beranda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  judul: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },
  kartuProfil: {
    alignItems: "center",
    padding: 25,
    borderRadius: 15,
    marginBottom: 25,
  },
  avatarLingkaran: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    fontSize: 50,
  },
  nama: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  deskripsi: {
    textAlign: "center",
    marginTop: 10,
  },
  judulBagian: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 12,
  },
  kartuInfo: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jumlah: {
    color: "#16A34A",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
  },
  tombol: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  tombolKembali: {
    backgroundColor: "#15803D",
  },
  teksTombol: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
