"use client";

import { calculateDatesRange } from "@/utils/dates";
import { subMonths } from "date-fns";
import TimelineItem from "./TimelineItem";

const Timeline = ({ setIsOpen }: { setIsOpen: (val: boolean) => void }) => {
  const currentDate = new Date();
  const pastDate = subMonths(currentDate, 1);

  const dates = calculateDatesRange({
    startDate: pastDate,
    endDate: currentDate,
  });

  return (
    <ul className="h-[100dvh] w-40 flex flex-col justify-around ml-8 border-l border-r-2 border-l-[#8500FF] border-r-gray-900">
      {dates.map((date) => (
        <TimelineItem date={date} key={date.toString()} setIsOpen={setIsOpen} />
      ))}
    </ul>
  );
};

export default Timeline;
