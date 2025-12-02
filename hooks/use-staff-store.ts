import { create } from "zustand";

type StaffStore = {
  selectedStaff: string | null;
  setSelectedStaff: (staff: string) => void;
};

export const useStaffStore = create<StaffStore>((set) => ({
  selectedStaff: null, // Default: no one selected
  setSelectedStaff: (staff) => set({ selectedStaff: staff }),
}));
