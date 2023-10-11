"use client";

import useDateStore from "@/store/dateStore";
import useTrendingStore from "@/store/trendingStore";
import { format } from "date-fns";

const TimelineItem = ({
  date,
  setIsOpen,
}: {
  date: Date;
  setIsOpen: (val: boolean) => void;
}) => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const setSelectedDate = useDateStore((state) => state.setSelectedDate);
  const setTrendingWord = useTrendingStore((state) => state.setTrendingWord);

  const selected = selectedDate === format(date, "yyyy-MM-dd");

  const handleClickTimelineItem = () => {
    setSelectedDate(date);
    setTrendingWord("");
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      onClick={handleClickTimelineItem}
      className="relative cursor-pointer group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-sm inline-flex items-center gap-2 pl-8"
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
