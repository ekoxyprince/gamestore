import { PersistStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Storage: PersistStorage<unknown> = {
  setItem: async (key: string, value: Record<string, any>) => {
    const result = await AsyncStorage.setItem(key, JSON.stringify(value));
    return result;
  },
  getItem: async (key: string) => {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  },
  removeItem: async (key: string) => {
    const result = await AsyncStorage.removeItem(key);
    return result;
  },
};
