import { create } from "zustand";

type TrendingStoreProps = {
  trendingWord: string;
  trendingWords: string[];
  setTrendingWord: (value: string) => void;
  setTrendingWords: (value: string[]) => void;
};

const useTrendingStore = create<TrendingStoreProps>((set) => ({
  trendingWord: "",
  trendingWords: [],
  setTrendingWord: (value) => set({ trendingWord: value }),
  setTrendingWords: (value) => set({ trendingWords: value }),
}));

export default useTrendingStore;
