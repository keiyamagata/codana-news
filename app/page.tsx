"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { format } from "date-fns";
import Timeline from "@/components/Timeline";
import NewsGrid from "@/components/News/NewsGrid";
import HamburgerIcon from "@/components/Icons/Hamburger";
import Sentiment from "@/components/Sentiment";
import useDateStore from "@/store/dateStore";
import useTrendingStore from "@/store/trendingStore";
import TrendingWords from "@/components/News/TrendingWords";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");
  const selectedDate = useDateStore((state) => state.selectedDate);
  const trendingWord = useTrendingStore((state) => state.trendingWord);
  const trendingWords = useTrendingStore((state) => state.trendingWords);

  return (
    <main className="relative container mx-auto grid grid-cols-1 md:grid-cols-main gap-16 px-2 md:px-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-10 right-2 block md:hidden"
      >
        <HamburgerIcon />
      </button>

      <aside
        className={`z-[999] fixed md:sticky top-0 md:left-0 self-start bg-white ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <Timeline setIsOpen={setIsOpen} />
      </aside>

      <section className="md:col-start-2 mb-20">
        <h1
          className={`${poppins.className} text-4xl md:text-6xl font-bold pt-8 pb-6`}
        >
          <span className="text-[#8400FF]">Codana</span>
          News
        </h1>

        <TrendingWords words={trendingWords} />

        {trendingWord ? (
          <>
            <>
              <h2
                className={`${poppins.className} text-2xl font-bold pb-8 text-[#1F0D38] relative w-fit`}
              >
                {`Trending: ${trendingWord}`}
                <Sentiment />
              </h2>
              <NewsGrid />
            </>
          </>
        ) : selectedDate === today && !trendingWord ? (
          <>
            <h2
              className={`${poppins.className} text-2xl font-bold pb-8 text-[#1F0D38] relative w-fit`}
            >
              Headlines
              <Sentiment />
            </h2>
            <NewsGrid isHeadline />
          </>
        ) : (
          <>
            <>
              <h2
                className={`${poppins.className} text-2xl font-bold pb-8 text-[#1F0D38] relative w-fit`}
              >
                {`News of ${selectedDate}`}
                <Sentiment />
              </h2>
              <NewsGrid />
            </>
          </>
        )}
      </section>
    </main>
  );
}
