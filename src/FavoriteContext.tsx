import { createContext } from "react";

export const FavoriteContext = createContext({
  daftarFavorit: [] as number[],
  toggleFavorit: (id: number) => {},
});
