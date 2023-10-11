type NewsItemType = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type NewsCardType = {
  item: NewsItemType;
  itemRef?: (node?: Element | null | undefined) => void;
  isHeadline?: boolean;
  index: number;
};

export type { NewsCardType, NewsItemType };
