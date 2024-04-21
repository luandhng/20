import { create } from "zustand";

type Data = {
  this_topic: string;
  topic: string;
  note: any;
};

type Store = {
  data: Data[];
  setData: (e: []) => void;
  addData: (e: Data) => void;
  updateTopic: (this_topic: string, newTopic: string) => void;
  updateNote: (this_topic: string, newNote: string) => void;
  removeTopic: (this_topic: string) => void;
};

export const useNotesDataStore = create<Store>()((set) => ({
  data: [],
  setData: (e) => set((state) => ({ data: (state.data = e) })),
  addData: (e) => set((state) => ({ data: [e, ...state.data] })),
  removeTopic: (this_topic: string) =>
    set((state) => ({
      data: state.data.filter((item) => item.this_topic !== this_topic),
    })),
  updateTopic: (this_topic: string, newTopic: string) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.this_topic === this_topic ? { ...item, topic: newTopic } : item
      ),
    })),
  updateNote: (this_topic: string, newNote: string) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.this_topic === this_topic ? { ...item, note: newNote } : item
      ),
    })),
}));
