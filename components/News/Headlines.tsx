"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NewsItem from "./NewsItem";
import type { NewsItemType } from "@/types/NewsTypes";

const NewsGrid = () => {
  /**
   * Fetch news items using the useQuery hook from react-query
   */
  const fetchNewsItems = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=5&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    return data.articles;
  };

  const { data: headlines, isSuccess } = useQuery(
    ["headlines"],
    () => fetchNewsItems(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16">
      {isSuccess &&
        headlines?.map((headline: NewsItemType, index: number) => {
          return (
            <NewsItem
              key={headline.title}
              item={headline}
              headline
              index={index}
            />
          );
        })}
    </div>
  );
};

export default NewsGrid;
