import { create } from "zustand";

type Store = {
  showTopics: boolean;
  setShowTopics: (e: boolean) => void;
};

export const useShowTopicsStore = create<Store>()((set) => ({
  showTopics: false,
  setShowTopics: (e) =>
    set((state) => ({ showTopics: (state.showTopics = e) })),
}));
