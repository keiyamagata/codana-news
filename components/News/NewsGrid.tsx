"use client";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import NewsItem from "./NewsItem";
import type { NewsItemType } from "@/types/NewsTypes";

const NewsGrid = () => {
  /**
   * Fetch news items using the useInfiniteQuery hook from react-query
   */
  const pageSize = 24;

  const fetchNewsItems = async (page: number) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?sources=techcrunch&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    return data.articles;
  };

  const {
    data: newsItems,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["newsItems"],
    ({ pageParam = 1 }) => fetchNewsItems(pageParam),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage?.length === pageSize ? allPages.length + 1 : undefined;
        return nextPage;
      },
    }
  );

  /**
   * Trigger fetchNextPage function when the observerRef is visible in the viewport
   */
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {isSuccess &&
          newsItems?.pages.map((page) =>
            page.map((item: NewsItemType, index: number) => {
              if (page.length === index + 1) {
                return <NewsItem key={item.title} item={item} itemRef={ref} />;
              }
              return <NewsItem key={item.title} item={item} />;
            })
          )}
      </div>

      {isFetchingNextPage && hasNextPage ? <span>Loading...</span> : null}
    </>
  );
};

export default NewsGrid;
