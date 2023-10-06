"use client";

import useDateStore from "@/store/dateStore";
import { format } from "date-fns";

const TimelineItem = ({ date }: { date: Date }) => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);

  const selected = selectedDate === format(date, "yyyy-MM-dd");

  const handleClickTimelineItem = () => {
    setSelectedDate(date);
  };

  return (
    <button
      type="button"
      onClick={handleClickTimelineItem}
      className="relative cursor-pointer group w-4/5"
    >
      <span
        className={`absolute top-1 -left-[0.525rem] h-4 w-4 rounded-full border border-gray-900 group-hover:bg-gray-900 ${
          selected ? "bg-gray-900" : "bg-white"
        }`}
      />
      <span
        className={`group-hover:font-bold ${
          selected ? "font-bold" : "font-normal"
        }`}
      >
        {format(date, "dd MMM")}
      </span>
    </button>
  );
};

export default TimelineItem;
