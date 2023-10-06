"use client";

import Image from "next/image";
import Link from "next/link";
import type { NewsCardType } from "@/types/NewsTypes";
// import NewsDetails from "./NewsDetails";

const NewsItem = ({ item, itemRef, headline, index }: NewsCardType) => {
  return (
    <article
      key={item.title}
      ref={itemRef}
      className={`w-full pb-8 ${
        headline && index === 0 && "md:col-span-full lg:flex md:gap-4 lg:h-96"
      }`}
    >
      <div
        className={`relative w-full h-60 rounded-lg overflow-hidden ${
          headline && index === 0 && "md:h-96"
        }`}
      >
        <Image
          src={item.urlToImage}
          alt={`image for ${item.title}`}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-80">
        <div className="py-4">
          <div className="h-24">
            <h3 className="text-xl font-bold line-clamp-3">{item.title}</h3>
          </div>
          <span className="text-xs italic">{item.author}</span>
          <p className="pt-2 line-clamp-5">{item.description}</p>
        </div>
        <Link
          href={item.url}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
        >
          Read more
        </Link>
      </div>
      {/* <NewsDetails url={item.url} title={item.title} /> */}
    </article>
  );
};

export default NewsItem;
