/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import {
  useGetHeadlines,
  useGetNewsItems,
  useGetTrendingItems,
} from "@/hooks/useNewsItems";
import useDateStore from "@/store/dateStore";
import useSentimentStore from "@/store/sentimentStore";
import useTrendingStore from "@/store/trendingStore";
import NewsItem from "./NewsItem";
import { extractTrendingKeywords, removeStopWords } from "@/utils/trending";
import type { NewsItemType } from "@/types/NewsTypes";

const NewsGrid = ({ isHeadline }: { isHeadline?: boolean }) => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const setSentimentText = useSentimentStore((state) => state.setSentimentText);
  const setTrendingWords = useTrendingStore((state) => state.setTrendingWords);
  const trendingWord = useTrendingStore((state) => state.trendingWord);

  const {
    data: headlines,
    error: headlinesError,
    isSuccess: headlinesIsSuccess,
    isLoading: headlinesIsLoading,
    isFetching: headlinesIsFetching,
  } = useGetHeadlines();
  const {
    data: newsItems,
    error: newsError,
    isSuccess: newsIsSuccess,
    isLoading: newsIsLoading,
    isFetching: newsIsFetching,
    hasNextPage,
    fetchNextPage,
    refetch: getNewsItems,
  } = useGetNewsItems();
  const {
    data: trendingItems,
    error: trendingError,
    isLoading: trendingIsLoading,
    isFetching: trendingIsFetching,
    hasNextPage: trendingHasNextPage,
    fetchNextPage: trendingFetchNextPage,
    refetch: getTrendingItems,
  } = useGetTrendingItems({ keyword: trendingWord });

  useEffect(() => {
    if (trendingWord) getTrendingItems();
    if (selectedDate && !trendingWord) getNewsItems();
  }, [trendingWord, selectedDate, getNewsItems, getTrendingItems]);

  /**
   * Trigger fetchNextPage function when the last item of the page fully is visible in the viewport
   */
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
    if (inView && trendingHasNextPage) trendingFetchNextPage();
  }, [
    inView,
    fetchNextPage,
    hasNextPage,
    trendingFetchNextPage,
    trendingHasNextPage,
  ]);

  /**
   * Set the content to analyse sentiment
   */
  const titles: string[] = useMemo(() => [], [headlines, newsItems]);

  useEffect(() => {
    if (!!headlines || !!newsItems || !!trendingItems)
      setSentimentText(titles.join(". "));
  }, [
    headlines,
    newsItems,
    trendingItems,
    selectedDate,
    setSentimentText,
    titles,
  ]);

  /**
   * Extract trending keywords from news data
   */
  useEffect(() => {
    if (headlines) {
      const keywords = extractTrendingKeywords(headlines);
      const filtredKeywords = removeStopWords(keywords);
      setTrendingWords(filtredKeywords);
    }
  }, [headlines]);

  return (
    <>
      {isHeadline ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {headlinesIsSuccess &&
            headlines?.map((headline: NewsItemType, index: number) => {
              if (!titles.includes(headline.title)) titles.push(headline.title);

              return (
                <NewsItem
                  key={index + headline.title}
                  item={headline}
                  index={index}
                  isHeadline
                />
              );
            })}
          {(headlinesIsLoading || headlinesIsFetching) && <p>Loading...</p>}
          {headlinesError && <p>Error</p>}
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {newsIsSuccess
            ? newsItems?.pages.map((page) =>
                page.map((item: NewsItemType, index: number) => {
                  if (!titles.includes(item.title)) titles.push(item.title);

                  if (page.length === index + 1) {
                    return (
                      <NewsItem
                        key={index + item.title}
                        item={item}
                        itemRef={ref}
                        index={index}
                      />
                    );
                  }
                  return (
                    <NewsItem
                      key={index + item.title}
                      item={item}
                      index={index}
                    />
                  );
                })
              )
            : trendingItems?.pages.map((page) =>
                page.map((item: NewsItemType, index: number) => {
                  if (!titles.includes(item.title)) titles.push(item.title);

                  if (page.length === index + 1) {
                    return (
                      <NewsItem
                        key={index + item.title}
                        item={item}
                        itemRef={ref}
                        index={index}
                      />
                    );
                  }
                  return (
                    <NewsItem
                      key={index + item.title}
                      item={item}
                      index={index}
                    />
                  );
                })
              )}
          {(newsIsLoading ||
            newsIsFetching ||
            trendingIsLoading ||
            trendingIsFetching) && <p>Loading...</p>}
          {(newsError || trendingError) && <p>Something went wrong.</p>}
        </div>
      )}
    </>
  );
};

export default NewsGrid;
