"use client";

import { useEffect } from "react";
import useSentimentStore from "@/store/sentimentStore";
import { useGetSentimentAnalysis } from "@/hooks/useNaturalLanguage";
import { interpretSentiment } from "@/utils/sentiment";
import Emoji from "./Emoji";
import LoadingSpinner from "../Icons/LoadingSpinner";

const Sentiment = () => {
  const sentimentText = useSentimentStore((state) => state.sentimentText);
  const {
    data: sentiment,
    refetch: getSentimentAnalysis,
    isFetching,
    isLoading,
  } = useGetSentimentAnalysis(sentimentText);

  useEffect(() => {
    if (!!sentimentText) getSentimentAnalysis();
  }, [sentimentText, getSentimentAnalysis]);

  const mood = interpretSentiment(sentiment?.documentSentiment.score);

  return (
    <div className="absolute -top-4 md:-top-4 -right-12 md:-right-12 p-2 shadow-md rounded-full bg-gray-100 w-fit">
      {isFetching || isLoading ? (
        <LoadingSpinner />
      ) : !isFetching && mood === "positive" ? (
        <Emoji sentiment="positive" />
      ) : !isFetching && mood === "negative" ? (
        <Emoji sentiment="negative" />
      ) : (
        <Emoji sentiment="neutral" />
      )}
    </div>
  );
};

export default Sentiment;
