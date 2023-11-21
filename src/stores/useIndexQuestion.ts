import { create } from "zustand";

type Store = {
  indexQuestion: number;
  setIndexQuestion: () => void;
};

export const useIndexQuestion = create<Store>()((set) => ({
  indexQuestion: 0,
  setIndexQuestion: () =>
    set((state) => ({ indexQuestion: state.indexQuestion + 1 })),
}));
