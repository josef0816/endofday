import { CinematicPanel } from "@/components/ui-custom/cinematic-panel";
import { FadeIn } from "@/components/ui-custom/fade-in";
import Link from "next/link";
import Image from "next/image";

export default function ScenarioOne() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Absolute Back Button */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center pointer-events-none">
                <Link
                    href="/"
                    className="pointer-events-auto font-oswald text-xl md:text-2xl uppercase tracking-widest text-white/70 hover:text-white transition-colors mix-blend-difference"
                >
                    Payne
                </Link>
                <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-white/50 mix-blend-difference">
                    Scenario 01
                </span>
            </div>

            <CinematicPanel
                title="The Standoff"
                subtitle="Panel 01"
                imageSrc="/scenario2/scenario_2_panel_1.png"
                imageAlt="Two ships holding a faceoff above the megacity"
                variant="hero-bleed"
                priority
                text={<p>Two ships hold a perfect faceoff above the megacity. The Legacy warship looms heavy and industrial — red, overbuilt, imposing. The Agentic ship sits razor-clean and silver-blue. Same $100,000. Two philosophies of scale locked on a single axis.</p>}
            />

            <CinematicPanel
                title="The Legacy Commander"
                subtitle="Panel 02"
                imageSrc="/scenario2/scenario_2_panel_2.png"
                imageAlt="Legacy Commander in amber-lit steel and shadow"
                variant="split-left"
                text={<p>In amber-lit steel and shadow, the Legacy Commander fills the frame. He trusts mass and complexity the way older empires trust concrete.</p>}
            />

            <CinematicPanel
                title="The Decision"
                subtitle="Panel 03"
                imageSrc="/scenario2/scenario_2_panel_3.png"
                imageAlt="Cockpit glowing crimson with tactical display"
                variant="split-right"
                text={<p>Over his shoulder, the cockpit glows crimson as he commits the budget. The machine vibrates and groans, like it needs time just to begin obeying.</p>}
            />

            <CinematicPanel
                title="The Long Wait"
                subtitle="Panel 04"
                imageSrc="/scenario2/scenario_2_panel_4.png"
                imageAlt="The two ships hovering nose-to-nose"
                variant="full-bleed"
                text={<p>The Legacy ship glows red from within. The Agentic ship remains sleek and silent. Equal capital. The tension line is perfect. Physics versus code.</p>}
            />

            <CinematicPanel
                title="The Anxious Viewport"
                subtitle="Panel 05"
                imageSrc="/scenario2/scenario_2_panel_5.png"
                imageAlt="Commander's face through a circular porthole"
                variant="split-left"
                text={<p>Through the circular porthole, his face is closer and more human. He's not raging — he's waiting. The glow flickers across sweat and fatigue. The cost here is time.</p>}
            />

            <CinematicPanel
                title="Linear Descent"
                subtitle="Panel 07"
                imageSrc="/scenario2/scenario_2_panel_7.png"
                imageAlt="The pod falls between skyscrapers"
                variant="hero-bleed"
                text={<p>The pod falls between skyscrapers like a burning bullet. Sparks trail downward. Dramatic — but singular. The entire strategy compressed into one falling point.</p>}
            />

            <CinematicPanel
                title="Impact and Exit"
                subtitle="Panel 08"
                imageSrc="/scenario2/scenario_2_panel_8.png"
                imageAlt="Pod slams into the street and opens into firelight"
                variant="split-right"
                text={<p>The pod slams into the street and opens into firelight. A lone soldier steps out into smoke and glowing debris. It looks heroic — until you realize it's one body against an entire grid.</p>}
            />

            <CinematicPanel
                title="Zero Balance"
                subtitle="Panel 09"
                imageSrc="/scenario2/scenario_2_panel_9.png"
                imageAlt="Scoreboard showing $0 above the Legacy ship"
                variant="split-left"
                text={<p>The scoreboard is brutal: $0 above the Legacy ship. The full $100,000 spent to move the map by inches.</p>}
            />

            <CinematicPanel
                title="The Agentic Commander"
                subtitle="Panel 10"
                imageSrc="/scenario2/scenario_2_panel_10.png"
                imageAlt="Cool blue lighting, Agentic Commander composed"
                variant="full-bleed"
                text={<p>Cut to cool blue lighting. The Agentic Commander sits composed and controlled. His environment feels frictionless — not mechanical strain, but execution waiting for a command.</p>}
            />

            <CinematicPanel
                title="Vector Bloom"
                subtitle="Panel 13"
                imageSrc="/scenario2/scenario_2_panel_13.png"
                imageAlt="Capsule separates and multiplies"
                variant="hero-bleed"
                text={<p>Mid-air, the sleek capsule separates along clean seams and multiplies into many smaller units. Geometry unfolds calmly. Scale was encoded from the beginning.</p>}
            />

            <CinematicPanel
                title="Swarm Touchdown"
                subtitle="Panel 14"
                imageSrc="/scenario2/scenario_2_panel_14.png"
                imageAlt="Hundreds of droids land in synchronized formation"
                variant="split-right"
                text={<p>Hundreds of humanoid droids land in synchronized formation across wet streets. Reflections and mist amplify their cold blue highlights. This isn't chaos — it's coordination.</p>}
            />

            <CinematicPanel
                title="System Error"
                subtitle="Panel 15"
                imageSrc="/scenario2/scenario_2_panel_15.png"
                imageAlt="Legacy Commander watching percentages change to blue"
                variant="split-left"
                text={<p>The Legacy Commander watches red percentages give way to blue. His certainty fractures. This isn't a firefight. It's a structural defeat.</p>}
            />

            {/* Grand Finale Panel */}
            <section className="relative w-full h-screen flex items-end">
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/scenario2/scenario_2_panel_17.png"
                        alt="City grid floods electric blue"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
                <div className="relative z-20 w-full px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-center text-center">
                    <FadeIn className="max-w-4xl space-y-8">
                        <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-blue-400 mb-4 uppercase">
                            The Ender
                        </span>
                        <h2 className="font-oswald text-5xl md:text-8xl tracking-tight text-white uppercase leading-[0.9]">
                            Don't hire soldiers.<br />Deploy a swarm.
                        </h2>
                        <p className="text-xl md:text-2xl text-foreground/80 font-sans font-light italic">
                            The final feeling isn't victory. It's inevitability.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
