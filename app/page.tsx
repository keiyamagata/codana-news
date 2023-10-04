import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="relative container mx-auto grid grid-cols-main gap-4">
      <section className="">
        <Timeline />
      </section>
      <section className="">
        <h1>Codana News</h1>
      </section>
    </main>
  );
}
