import { persist } from "zustand/middleware";
import { Storage } from "@/utils/storage";
import { create } from "zustand";

export type AuthPropType = {
  auth: {
    token: string;
    isAuth: boolean;
  };
  login(token: string): unknown;
  logout(): unknown;
};
export type AuthStateType = {
  auth: {
    token: string;
    isAuth: boolean;
  };
};
const useAuthStore = create<AuthPropType>()(
  persist(
    (set) => ({
      auth: { isAuth: false, token: "" },
      login: (token: string) =>
        set((state: AuthStateType) => {
          return {
            auth: {
              token: token,
              isAuth: !!token,
            },
          };
        }),
      logout: () =>
        set((state: AuthStateType) => {
          return {
            auth: {
              token: "",
              isAuth: false,
            },
          };
        }),
    }),
    {
      name: "cart-store",
      storage: Storage,
    }
  )
);

export default useAuthStore;
