"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsCardType } from "@/types/NewsTypes";
// import NewsDetails from "./NewsDetails";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const NewsItem = ({ item, itemRef, isHeadline, index }: NewsCardType) => {
  return (
    <motion.article
      key={item.title}
      ref={itemRef}
      className={`w-full pb-8 ${
        isHeadline &&
        index === 0 &&
        "md:col-span-full xl:flex lg:items-center md:gap-4 lg:h-[46rem] xl:h-96"
      }`}
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      transition={{ delay: 0.05 * index }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-full h-60 rounded-lg overflow-hidden ${
          isHeadline && index === 0 && "md:h-96"
        }`}
      >
        <Image
          src={item.urlToImage || "/images/placeholder.png"}
          alt={`image for ${item.title}`}
          fill
          sizes="100%"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-between h-80">
        <div className="py-4">
          <div className="h-24">
            <h3 className="text-xl font-bold line-clamp-3">{item.title}</h3>
          </div>
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
        {/* <NewsDetails url={item.url} title={item.title} /> */}
      </div>
    </motion.article>
  );
};

export default NewsItem;
