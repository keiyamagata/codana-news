import useTrendingStore from "@/store/trendingStore";

const TrendingWords = ({ words }: { words: string[] }) => {
  const trendingWord = useTrendingStore((state) => state.trendingWord);
  const setTrendingWord = useTrendingStore((state) => state.setTrendingWord);

  return (
    <div className="pb-12 flex gap-4 flex-wrap">
      {words.map((word) => (
        <button
          key={word}
          type="button"
          className={`rounded-full px-6 py-2 font-semibold text-gray-900 shadow-md hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${
            trendingWord === word ? "bg-gray-300" : "bg-gray-100"
          }`}
          onClick={() => setTrendingWord(word)}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default TrendingWords;
