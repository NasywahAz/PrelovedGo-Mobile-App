import { Stack } from "expo-router";
import { useState } from "react";
import { FavoriteContext } from "../FavoriteContext";
import { ThemeContext } from "../ThemeContext";

export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [daftarFavorit, setDaftarFavorit] = useState<number[]>([]);

  function toggleFavorit(id: number) {
    if (daftarFavorit.includes(id)) {
      setDaftarFavorit(daftarFavorit.filter((itemId) => itemId !== id));
    } else {
      setDaftarFavorit([...daftarFavorit, id]);
    }
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <FavoriteContext.Provider value={{ daftarFavorit, toggleFavorit }}>
        <Stack screenOptions={{ headerShown: false }} />
      </FavoriteContext.Provider>
    </ThemeContext.Provider>
  );
}
