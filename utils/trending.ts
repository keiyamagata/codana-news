import { NewsItemType } from "@/types/NewsTypes";
import stopwords from "@/utils/stop_words_english.json";

export const extractTrendingKeywords = (newsData: NewsItemType[]) => {
  const wordCounts: Record<string, number> = {};

  for (const article of newsData) {
    const allWords = `${article.title} ${article.description}`;
    const words = allWords
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // regex to remove all unnecessary characters
      .split(" ");

    for (const word of words) {
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      }
    }
  }

  const trendingKeywords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .map((keyword) => keyword[0]);

  return trendingKeywords;
};

export const removeStopWords = (keywords: string[]) =>
  keywords
    .filter((keyword) => !stopwords.includes(keyword.toLowerCase()))
    .slice(0, 5);
