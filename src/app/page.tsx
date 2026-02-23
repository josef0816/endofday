import Link from "next/link";
import { FadeIn } from "@/components/ui-custom/fade-in";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-end overflow-hidden">
        <Image
          src="/eod-hero-section.png"
          alt="End of Day Brand Hero"
          fill
          className="object-cover z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />
        <FadeIn className="relative z-20 w-full px-6 md:px-12 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-[7rem] leading-none uppercase tracking-tighter text-white mb-6">
              END OF DAY
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-sans font-light max-w-xl">
              In a city lit by dashboards and deadlines, two architectures collide —
              one powered by effort, the other by scale. When the screen goes white,
              the question isn’t who wins. It’s who gets their life back.
            </p>
          </div>
          <div className="flex gap-6 font-sans text-sm tracking-widest uppercase text-muted-foreground font-semibold">
            <span className="text-white">Scenarios</span>
            <Link href="/info" className="hover:text-white transition-colors cursor-pointer">
              Info
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Cinematic Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Full Bleed Banner Item (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 relative group cursor-pointer block w-full h-[50vh] md:h-[70vh] border-b border-border/20 overflow-hidden">
          <Image
            src="/scenario2/scenario_2_panel_4.png"
            alt="The Standoff"
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase tracking-tight mb-2">
              The Swarm
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] font-medium text-white/70 uppercase">
              $100,000 Strategy Narrative / Scenario 01
            </p>
          </div>
          <Link href="/scenario-1" className="absolute inset-0 z-10">
            <span className="sr-only">View The Swarm</span>
          </Link>
        </div>

        {/* Split Grid Item 1 */}
        <div className="relative group cursor-pointer w-full h-[40vh] md:h-[50vh] border-b md:border-r border-border/20 overflow-hidden">
          <Image
            src="/scenario3/scenario_3_panel_4.png"
            alt="Overtime"
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
              Overtime
            </h2>
            <p className="font-sans text-[10px] tracking-[0.2em] font-medium text-white/70 uppercase">
              Blue Server Narrative / Scenario 02
            </p>
          </div>
          <Link href="/scenario-2" className="absolute inset-0 z-10">
            <span className="sr-only">View Overtime</span>
          </Link>
        </div>

        {/* Split Grid Item 2 (Coming Soon) */}
        <div className="relative group w-full h-[40vh] md:h-[50vh] border-b border-border/20 overflow-hidden">
          <Image
            src="/scenario2/scenario_2_panel_13.png"
            alt="Vector Bloom"
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03] grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1 opacity-50">
              Coming Soon
            </h2>
            <p className="font-sans text-[10px] tracking-[0.2em] font-medium text-white/40 uppercase">
              Future Scenario / In Development
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 md:px-12 py-12 flex justify-between items-center text-muted-foreground font-sans text-xs uppercase tracking-widest border-t border-border/10">
        <span>&copy; {new Date().getFullYear()} End of Day</span>
        <span>Curated Spec Portfolio</span>
      </footer>
    </main>
  );
}
