import { router } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { FavoriteContext } from "../FavoriteContext";
import { ThemeContext } from "../ThemeContext";
import { daftarBarang, formatHarga } from "../data/barang";

export default function FavoritScreen() {
  const { isDarkMode } = useContext(ThemeContext);
  const { daftarFavorit, toggleFavorit } = useContext(FavoriteContext);

  const warnaLatar = isDarkMode ? "#121212" : "#F5F5F5";
  const warnaKartu = isDarkMode ? "#242424" : "#FFFFFF";
  const warnaTeks = isDarkMode ? "#FFFFFF" : "#222222";
  const warnaSekunder = isDarkMode ? "#BBBBBB" : "#666666";

  const barangFavorit = daftarBarang.filter((barang) =>
    daftarFavorit.includes(barang.id),
  );

  return (
    <View style={[styles.container, { backgroundColor: warnaLatar }]}>
      <Text style={[styles.judul, { color: warnaTeks }]}>
        ❤️ Barang Favorit
      </Text>

      {barangFavorit.length === 0 ? (
        <Text style={{ color: warnaSekunder, marginTop: 15 }}>
          Belum ada barang favorit.
        </Text>
      ) : (
        <ScrollView>
          {barangFavorit.map((barang) => (
            <View
              key={barang.id}
              style={[styles.kartu, { backgroundColor: warnaKartu }]}
            >
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/detail",
                    params: { id: String(barang.id) },
                  })
                }
              >
                <Text style={styles.emoji}>🛍️</Text>

                <Text style={[styles.nama, { color: warnaTeks }]}>
                  {barang.nama}
                </Text>

                <Text style={styles.harga}>{formatHarga(barang.harga)}</Text>
              </Pressable>

              <Pressable
                onPress={() => toggleFavorit(barang.id)}
                style={styles.tombolHapus}
              >
                <Text style={styles.teksHapus}>❤️ Hapus dari Favorit</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      )}

      <Pressable
        style={styles.tombolKembali}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.teksKembali}>Kembali ke Beranda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  judul: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  kartu: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  emoji: {
    fontSize: 35,
    marginBottom: 8,
  },
  nama: {
    fontSize: 18,
    fontWeight: "bold",
  },
  harga: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  tombolHapus: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#FEE2E2",
    borderRadius: 8,
    alignItems: "center",
  },
  teksHapus: {
    color: "#B91C1C",
    fontWeight: "bold",
  },
  tombolKembali: {
    marginTop: 15,
    padding: 14,
    backgroundColor: "#16A34A",
    borderRadius: 10,
    alignItems: "center",
  },
  teksKembali: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
