import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { SentimentAnalysisResultProps } from "@/types/SentimentTypes";

export const useGetSentimentAnalysis = (content: string) => {
  const analyseSentiment = async () => {
    const { data } = await axios.post(
      `https://language.googleapis.com/v2/documents:analyzeSentiment?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
      {
        document: {
          type: "PLAIN_TEXT",
          content,
        },
      }
    );
    return data;
  };

  return useQuery<SentimentAnalysisResultProps, Error>(
    ["sentiment", content],
    analyseSentiment,
    { enabled: !!content, refetchOnWindowFocus: false, keepPreviousData: true }
  );
};
