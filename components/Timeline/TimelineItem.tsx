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
      className="relative cursor-pointer group w-4/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-sm"
    >
      <span
        className={`absolute top-1 -left-[0.525rem] h-4 w-4 rounded-full border border-[#8400FF] group-hover:bg-[#8400FF] ${
          selected ? "bg-[#8400FF]" : "bg-white"
        }`}
      />
      <span
        className={`group-hover:font-bold ${
          selected ? "font-bold underline" : "font-normal"
        }`}
      >
        {format(date, "dd MMM")}
      </span>
    </button>
  );
};

export default TimelineItem;
