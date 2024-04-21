import { create } from "zustand";

type Store = {
  selectedTopic: string;
  setSelectedTopic: (e: string) => void;
};

export const useSelectedTopicStore = create<Store>()((set) => ({
  selectedTopic: "",
  setSelectedTopic: (e) =>
    set((state) => ({ selectedTopic: (state.selectedTopic = e) })),
}));
