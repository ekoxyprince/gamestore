import { persist } from "zustand/middleware";
import { Storage } from "@/utils/storage";
import { create } from "zustand";
import { GameCardProps } from "@/components/ui/GameCard";

export type CartPropType = {
  cart: {
    total: number;
    items: GameCardProps[];
  };
  addToCart: (game: GameCardProps) => unknown;
  removeFromCart: (game: GameCardProps) => unknown;
  resetCart: () => unknown;
};
type CartStateType = {
  cart: {
    total: number;
    items: GameCardProps[];
  };
};

const useCartStore = create<CartPropType>()(
  persist(
    (set) => ({
      cart: { total: 0, items: [] },
      addToCart: (game: GameCardProps) =>
        set((state: CartStateType) => {
          const isCarted = state.cart.items.some((c) => c.id == game.id);
          if (!isCarted) {
            return {
              cart: {
                total: state.cart.total + game.price,
                items: [...state.cart.items, game],
              },
            };
          }
          return state;
        }),
      removeFromCart: (game: GameCardProps) =>
        set((state: CartStateType) => {
          return {
            cart: {
              total: state.cart.total - game.price,
              items: state.cart.items.filter((c) => c.id !== game.id),
            },
          };
        }),
      resetCart: () =>
        set((state: CartStateType) => ({ cart: { items: [], total: 0 } })),
    }),
    {
      name: "cart-store",
      storage: Storage,
    }
  )
);

export default useCartStore;
