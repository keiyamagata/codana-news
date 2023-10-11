import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useDateStore from "@/store/dateStore";
import { NewsItemType } from "@/types/NewsTypes";

const pageSize = 20;

export const useGetNewsItems = () => {
  const selectedDate = useDateStore((state) => state.selectedDate);

  const fetchNewsItems = async (page: number) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?sources=techradar&page=${page}&pageSize=${pageSize}&from=${selectedDate}&to=${selectedDate}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    return data.articles;
  };

  return useInfiniteQuery<NewsItemType[], Error>(
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
};

export const useGetHeadlines = () => {
  const fetchHeadlines = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=the-verge&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    return data.articles;
  };

  return useQuery<NewsItemType[], Error>(
    ["headlines"],
    () => fetchHeadlines(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useGetTrendingItems = ({ keyword }: { keyword: string }) => {
  const fetchTrendingItems = async (page: number) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?sources=techradar&page=${page}&pageSize=${pageSize}&q=${keyword}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    return data.articles;
  };

  return useInfiniteQuery<NewsItemType[], Error>(
    ["newsItems"],
    ({ pageParam = 1 }) => fetchTrendingItems(pageParam),
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
};
