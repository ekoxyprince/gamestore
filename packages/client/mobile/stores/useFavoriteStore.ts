import { persist } from "zustand/middleware";
import { Storage } from "@/utils/storage";
import { create } from "zustand";
import { GameCardProps } from "@/components/ui/GameCard";
interface StateType {
  favorites: GameCardProps[];
}
export type FavoriteStoreType = {
  favorites: GameCardProps[];
  addFavorite: (game: GameCardProps) => unknown;
};
const useFavoriteStore = create<FavoriteStoreType>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (game: GameCardProps) =>
        set((state: StateType) => {
          const isFavorite = state.favorites.some((s) => s.id == game.id);
          return {
            favorites: isFavorite
              ? state.favorites.filter((s) => s.id !== game.id)
              : [...state.favorites, game],
          };
        }),
    }),
    {
      name: "favorite-store",
      storage: Storage,
    }
  )
);

export default useFavoriteStore;
