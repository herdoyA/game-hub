import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  mode: "dark" | "light";
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "dark",
      toggleMode: () =>
        set(({ mode }) => ({ mode: mode === "dark" ? "light" : "dark" })),
    }),
    { name: "theme-store" }
  )
);
