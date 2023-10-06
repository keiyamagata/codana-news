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
    <ul className="h-[100dvh] w-40 flex flex-col justify-around ml-3 border-l border-gray-900">
      {dates.map((date) => (
        <TimelineItem date={date} key={date.toString()} />
      ))}
    </ul>
  );
};

export default Timeline;
