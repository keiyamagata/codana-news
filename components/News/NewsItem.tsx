import Image from "next/image";
import type { NewsCardType } from "@/types/NewsTypes";

const NewsItem = ({ item, itemRef }: NewsCardType) => {
  return (
    <article key={item.title} ref={itemRef} className="w-full">
      <div className="relative h-60 rounded-lg overflow-hidden">
        <Image
          src={item.urlToImage}
          alt={`image for ${item.title}`}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="pt-4">
        <div className="h-24">
          <h3 className="text-xl font-bold line-clamp-3">{item.title}</h3>
        </div>
        <span className="text-xs italic">{item.author}</span>
        <p className="pt-4 line-clamp-5">{item.description}</p>
      </div>
    </article>
  );
};

export default NewsItem;
