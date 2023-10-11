import { create } from "zustand";

type sentimentStoreProps = {
  sentimentText: string;
  setSentimentText: (value: string) => void;
};

const useSentimentStore = create<sentimentStoreProps>((set) => ({
  sentimentText: "",
  setSentimentText: (value) => set({ sentimentText: value }),
}));

export default useSentimentStore;
