"use client";

const TimelineItem = ({ date }: { date: string }) => (
  <button type="button" className="relative cursor-pointer group">
    <span className="absolute top-1 -left-[0.525rem] h-4 w-4 rounded-full border border-gray-900 bg-white group-hover:bg-gray-900" />
    <div className="">
      <span className="group-hover:font-bold">{date}</span>
    </div>
  </button>
);

export default TimelineItem;
