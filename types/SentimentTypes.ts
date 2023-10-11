type Sentiment = {
  score: number;
  magnitude: number;
};

type Text = {
  beginOffset: number;
  content: string;
};

type Sentence = {
  sentiment: Sentiment;
  text: Text;
};

type SentimentAnalysisResultProps = {
  languageCode: string;
  languageSupported: boolean;
  documentSentiment: Sentiment;
  sentences: Sentence[];
};

export type { Sentiment, Text, Sentence, SentimentAnalysisResultProps };
