"use client";

import { calculateDatesRange } from "@/utils/dates";
import { subMonths } from "date-fns";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const currentDate = new Date();
  const pastDate = subMonths(currentDate, 1);

  const dates = calculateDatesRange({
    startDate: pastDate,
    endDate: currentDate,
  });

  return (
    <ul className="h-[100dvh] flex flex-col justify-around ml-3 border-l-4 border-gray-200">
      {dates.map((date) => (
        <TimelineItem date={date} key={date} />
      ))}
    </ul>
  );
};

export default Timeline;
