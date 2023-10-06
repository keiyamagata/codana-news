"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Timeline from "@/components/Timeline";
import NewsGrid from "@/components/News/NewsGrid";
import Headlines from "@/components/News/Headlines";
import useDateStore from "@/store/dateStore";
import { format } from "date-fns";
import HamburgerIcon from "@/components/Icons/Hamburger";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedDate = useDateStore((state) => state.selectedDate);
  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <main className="relative h-[100dvh] overflow-y-scroll container mx-auto grid grid-cols-1 md:grid-cols-main gap-16 px-2 md:px-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-10 right-2 block md:hidden"
      >
        <HamburgerIcon />
      </button>
      <aside
        className={`z-[999] fixed top-0 md:sticky md:left-0 self-start bg-white ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <Timeline />
      </aside>
      <section className="md:col-start-2 mb-20">
        <div className={poppins.className}>
          <h1 className="text-4xl md:text-6xl font-bold pt-8 pb-12">
            <span className="text-[#8400FF]">Codana</span>
            News
          </h1>
        </div>
        {selectedDate === today ? (
          <>
            <h2
              className={`${poppins.className} text-2xl font-bold pb-8 text-[#1F0D38]`}
            >
              Today&apos;s headlines
            </h2>
            <Headlines />
          </>
        ) : (
          <>
            <h2
              className={`${poppins.className} text-2xl font-bold pb-8 text-[#1F0D38]`}
            >{`News history of ${selectedDate}`}</h2>
            <NewsGrid />
          </>
        )}
      </section>
    </main>
  );
}
