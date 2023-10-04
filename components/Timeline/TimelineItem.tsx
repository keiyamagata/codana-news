"use client";

const TimelineItem = ({ date }: { date: string }) => (
  <li className="relative cursor-pointer">
    <span className="absolute top-1 -left-2.5 h-4 w-4 rounded-full border-4 bg-white" />
    <div className="pl-8">
      <span>{date}</span>
    </div>
  </li>
);

export default TimelineItem;
