import { router } from "expo-router";
import { useContext, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FavoriteContext } from "../FavoriteContext";
import { ThemeContext } from "../ThemeContext";
import { daftarBarang, formatHarga } from "../data/barang";

const daftarKategori = [
  "Semua",
  "Elektronik",
  "Furniture",
  "Fashion",
  "Lainnya",
];

export default function HomeScreen() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { daftarFavorit, toggleFavorit } = useContext(FavoriteContext);

  const [kataPencarian, setKataPencarian] = useState("");
  const [kategoriDipilih, setKategoriDipilih] = useState("Semua");

  const inputPencarian = useRef<TextInput>(null);

  const warnaLatar = isDarkMode ? "#121212" : "#F5F5F5";
  const warnaKartu = isDarkMode ? "#242424" : "#FFFFFF";
  const warnaTeks = isDarkMode ? "#FFFFFF" : "#222222";
  const warnaSekunder = isDarkMode ? "#BBBBBB" : "#666666";

  const barangDitampilkan = daftarBarang.filter((barang) => {
    const cocokNama = barang.nama
      .toLowerCase()
      .includes(kataPencarian.toLowerCase());

    const cocokKategori =
      kategoriDipilih === "Semua" ||
      (kategoriDipilih === "Lainnya" &&
        !["Elektronik", "Furniture", "Fashion"].includes(barang.kategori)) ||
      barang.kategori === kategoriDipilih;

    return cocokNama && cocokKategori;
  });

  return (
    <View style={[styles.container, { backgroundColor: warnaLatar }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.judul, { color: warnaTeks }]}>PrelovedGo</Text>

            <Text style={{ color: warnaSekunder }}>
              Temukan barang favoritmu
            </Text>
          </View>

          <Pressable
            style={styles.tombolTema}
            onPress={() => setIsDarkMode(!isDarkMode)}
          >
            <Text style={styles.teksTema}>{isDarkMode ? "☀️" : "🌙"}</Text>
          </Pressable>
        </View>

        <TextInput
          ref={inputPencarian}
          style={[
            styles.input,
            {
              backgroundColor: warnaKartu,
              color: warnaTeks,
            },
          ]}
          placeholder="Cari barang..."
          placeholderTextColor={warnaSekunder}
          value={kataPencarian}
          onChangeText={setKataPencarian}
        />

        <Text style={[styles.judulBagian, { color: warnaTeks }]}>Kategori</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {daftarKategori.map((kategori) => (
            <Pressable
              key={kategori}
              style={[
                styles.kategori,
                {
                  backgroundColor:
                    kategoriDipilih === kategori ? "#16A34A" : warnaKartu,
                },
              ]}
              onPress={() => setKategoriDipilih(kategori)}
            >
              <Text
                style={{
                  color: kategoriDipilih === kategori ? "#FFFFFF" : warnaTeks,
                }}
              >
                {kategori}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={[styles.judulBagian, { color: warnaTeks }]}>
          Barang Preloved
        </Text>

        {barangDitampilkan.length === 0 ? (
          <Text style={{ color: warnaSekunder, marginTop: 10 }}>
            Barang tidak ditemukan.
          </Text>
        ) : (
          <View style={styles.daftarBarang}>
            {barangDitampilkan.map((barang) => (
              <View
                key={barang.id}
                style={[styles.kartuBarang, { backgroundColor: warnaKartu }]}
              >
                <Pressable
                  onPress={() => toggleFavorit(barang.id)}
                  style={styles.tombolFavorit}
                >
                  <Text style={styles.ikonFavorit}>
                    {daftarFavorit.includes(barang.id) ? "❤️" : "🤍"}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: "/detail",
                      params: { id: String(barang.id) },
                    })
                  }
                >
                  <Text style={styles.emojiBarang}>🛍️</Text>

                  <Text style={[styles.namaBarang, { color: warnaTeks }]}>
                    {barang.nama}
                  </Text>

                  <Text style={styles.hargaBarang}>
                    {formatHarga(barang.harga)}
                  </Text>

                  <Text style={{ color: warnaSekunder }}>
                    {barang.kategori}
                  </Text>

                  <Text style={{ color: warnaSekunder }}>
                    📍 {barang.lokasi}
                  </Text>

                  <Text style={styles.teksDetail}>Lihat Detail →</Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={[styles.navigasiBawah, { backgroundColor: warnaKartu }]}>
        <Pressable onPress={() => router.replace("/")}>
          <Text style={styles.navigasiAktif}>🏠 Beranda</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/favorit")}>
          <Text style={{ color: warnaSekunder }}>❤️ Favorit</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/profil")}>
          <Text style={{ color: warnaSekunder }}>👤 Profil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  judul: {
    fontSize: 28,
    fontWeight: "bold",
  },
  tombolTema: {
    backgroundColor: "#16A34A",
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  teksTema: {
    fontSize: 22,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  judulBagian: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 10,
  },
  kategori: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 15,
  },
  daftarBarang: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  kartuBarang: {
    width: "48%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  tombolFavorit: {
    alignSelf: "flex-end",
    padding: 5,
  },
  ikonFavorit: {
    fontSize: 22,
  },
  emojiBarang: {
    fontSize: 45,
    textAlign: "center",
    marginBottom: 10,
  },
  namaBarang: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  hargaBarang: {
    fontSize: 16,
    color: "#16A34A",
    fontWeight: "bold",
    marginBottom: 6,
  },
  teksDetail: {
    color: "#16A34A",
    marginTop: 10,
    fontWeight: "bold",
  },
  navigasiBawah: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    marginHorizontal: -20,
  },
  navigasiAktif: {
    color: "#16A34A",
    fontWeight: "bold",
  },
});
