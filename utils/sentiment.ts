export const interpretSentiment = (score: number | undefined) => {
  let sentiment: "positive" | "negative" | "neutral" | null;

  if (score) {
    switch (true) {
      case score >= 0.25:
        sentiment = "positive";
        break;
      case score < 0:
        sentiment = "negative";
        break;
      default:
        sentiment = "neutral";
        break;
    }
    return sentiment;
  }

  return "neutral";
};
