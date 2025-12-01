import { create } from "zustand";

interface UIStore {
  // Cursor
  cursorVariant: "default" | "hover" | "click";
  setCursorVariant: (variant: "default" | "hover" | "click") => void;

  // Menu
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;

  // Theme
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;

  // Language
  language: "en" | "id";
  setLanguage: (lang: "en" | "id") => void;

  // Loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Smooth Scroll
  smoothScrollEnabled: boolean;
  setSmoothScroll: (enabled: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // Cursor
  cursorVariant: "default",
  setCursorVariant: (variant) => set({ cursorVariant: variant }),

  // Menu
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),

  // Theme
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

  // Language
  language: "en",
  setLanguage: (lang) => set({ language: lang }),

  // Loading
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Smooth Scroll
  smoothScrollEnabled: true,
  setSmoothScroll: (enabled) => set({ smoothScrollEnabled: enabled }),
}));
