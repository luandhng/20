import { create } from "zustand";

type Store = {
  boolean: boolean;
  setBoolean: (e: boolean) => void;
};

export const useBoolean = create<Store>()((set) => ({
  boolean: false,
  setBoolean: (e) => set((state) => ({ boolean: (state.boolean = e) })),
}));
