"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NewsCards = () => {
  const {} = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2023-10-03&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      console.log(data);
    },
  });

  return <div>NewsCards</div>;
};

export default NewsCards;
