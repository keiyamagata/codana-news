import { create } from "zustand";
import { format } from "date-fns";

type DateStoreProps = {
  selectedDate: string;
  setSelectedDate: (value: Date) => void;
};

const useDateStore = create<DateStoreProps>((set) => ({
  selectedDate: format(new Date(), "yyyy-MM-dd"),
  setSelectedDate: (value) =>
    set({ selectedDate: format(value, "yyyy-MM-dd") }),
}));

export default useDateStore;
