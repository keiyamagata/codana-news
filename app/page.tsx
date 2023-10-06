import { Poppins } from "next/font/google";
import Timeline from "@/components/Timeline";
import NewsGrid from "@/components/News/NewsGrid";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="relative container mx-auto grid grid-cols-main gap-4">
      <section>
        <Timeline />
      </section>
      <section>
        <div className={poppins.className}>
          <h1 className="text-4xl font-bold py-8">Codana News</h1>
        </div>
        <NewsGrid />
      </section>
    </main>
  );
}
