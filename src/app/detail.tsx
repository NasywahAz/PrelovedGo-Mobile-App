import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../ThemeContext";
import { daftarBarang, formatHarga } from "../data/barang";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const { isDarkMode } = useContext(ThemeContext);

  const barang = daftarBarang.find((item) => item.id === Number(id));

  const warnaLatar = isDarkMode ? "#121212" : "#F5F5F5";
  const warnaKartu = isDarkMode ? "#242424" : "#FFFFFF";
  const warnaTeks = isDarkMode ? "#FFFFFF" : "#222222";
  const warnaSekunder = isDarkMode ? "#BBBBBB" : "#666666";

  if (!barang) {
    return (
      <View style={[styles.container, { backgroundColor: warnaLatar }]}>
        <Text style={{ color: warnaTeks }}>Barang tidak ditemukan.</Text>

        <Pressable onPress={() => router.back()}></Pressable>
        <Text style={styles.kembali}>Kembali</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: warnaLatar }}
      contentContainerStyle={styles.container}
    >
      <Pressable onPress={() => router.back()}>
        <Text style={[styles.kembali, { color: warnaTeks }]}>← Kembali</Text>
      </Pressable>

      <View style={[styles.kartu, { backgroundColor: warnaKartu }]}>
        <Text style={styles.emoji}>🛍️</Text>

        <Text style={[styles.nama, { color: warnaTeks }]}>{barang.nama}</Text>

        <Text style={styles.harga}>{formatHarga(barang.harga)}</Text>

        <Text style={[styles.label, { color: warnaSekunder }]}>Kategori</Text>
        <Text style={[styles.isi, { color: warnaTeks }]}>
          {barang.kategori}
        </Text>

        <Text style={[styles.label, { color: warnaSekunder }]}>Kondisi</Text>
        <Text style={[styles.isi, { color: warnaTeks }]}>{barang.kondisi}</Text>

        <Text style={[styles.label, { color: warnaSekunder }]}>Lokasi</Text>
        <Text style={[styles.isi, { color: warnaTeks }]}>{barang.lokasi}</Text>

        <Pressable
          style={styles.tombol}
          onPress={() => alert("Fitur hubungi penjual akan dibuat nanti.")}
        >
          <Text style={styles.teksTombol}>Hubungi Penjual</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  kembali: {
    fontSize: 16,
    marginBottom: 20,
  },
  kartu: {
    padding: 20,
    borderRadius: 16,
  },
  emoji: {
    fontSize: 70,
    textAlign: "center",
    marginBottom: 20,
  },
  nama: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  harga: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#16A34A",
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    marginTop: 12,
  },
  isi: {
    fontSize: 17,
    marginTop: 4,
  },
  tombol: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  teksTombol: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
