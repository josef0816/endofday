"use client";

import { CinematicPanel } from "@/components/ui-custom/cinematic-panel";
import { FadeIn } from "@/components/ui-custom/fade-in";
import { CinematicFooter } from "@/components/ui-custom/cinematic-footer";
import Link from "next/link";
import Image from "next/image";

export default function ScenarioTwo() {
    return (
        <FadeIn transition={{ duration: 2, ease: "easeOut" }}>
            <main className="min-h-screen bg-background text-foreground flex flex-col">
                {/* Absolute Back Button */}
                <div className="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center pointer-events-none">
                    <Link
                        href="/"
                        className="pointer-events-auto font-oswald text-xl md:text-2xl uppercase tracking-widest text-white/70 hover:text-white transition-colors mix-blend-difference"
                    >
                        END OF DAY
                    </Link>
                    <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-white/50 mix-blend-difference">
                        Scenario 02
                    </span>
                </div>

                <CinematicPanel
                    title="9:00 PM"
                    subtitle="Panel 01"
                    imageSrc="/scenario3/scenario_3_panel_2.png"
                    imageAlt="Dave alone in a dark office at 9:00 PM"
                    variant="hero-bleed"
                    priority
                    text={<p>Dave is alone in a dark office. Rain streaks the windows behind him. The city outside is alive, but distant. The timestamp on the screen reads 9:00 PM. This is overtime.</p>}
                />

                <CinematicPanel
                    title="The Presence"
                    subtitle="Panel 02"
                    imageSrc="/scenario3/scenario_3_panel_3.png"
                    imageAlt="Sleek server tower emitting blue glow"
                    variant="split-left"
                    text={<p>In the corner of the room, a sleek server tower emits a soft electric-blue glow. It's subtle, steady, patient. The same blue reflected in his eye. It simply waits.</p>}
                />

                <CinematicPanel
                    title="The Accusation"
                    subtitle="Panel 03"
                    imageSrc="/scenario3/scenario_3_panel_4.png"
                    imageAlt="Dave standing near the server"
                    variant="split-right"
                    text={<p>He stands slowly and walks toward it. The room feels smaller with each step. Weeks of late nights compress into one sharp sentence: "You're taking my job."</p>}
                />

                <CinematicPanel
                    title="The Sabotage"
                    subtitle="Panel 04"
                    imageSrc="/scenario3/scenario_3_panel_5.png"
                    imageAlt="Hand gripping the power cable"
                    variant="hero-bleed"
                    text={<p>Close-up on his hand gripping the power cable. Blue light splits across his knuckles. The hum vibrates faintly through the floor. This is the breaking point — man reclaiming control. He begins to pull.</p>}
                />

                <CinematicPanel
                    title="The Intervention"
                    subtitle="Panel 05"
                    imageSrc="/scenario3/scenario_3_panel_6.png"
                    imageAlt="Monitor flaring brighter"
                    variant="split-left"
                    text={<p>Before the plug disconnects, his monitor behind him flares brighter. The blue light intensifies across the room, demanding attention.</p>}
                />

                <CinematicPanel
                    title="The Realization"
                    subtitle="Panel 06"
                    imageSrc="/scenario3/scenario_3_panel_7.png"
                    imageAlt="Dave freezing, looking back at desk"
                    variant="split-right"
                    text={<p>Dave freezes. He turns back toward his desk. The inbox counter reads zero. The dashboard is complete. Every pending task — finished. The overtime that owned his night is gone.</p>}
                />

                <CinematicPanel
                    title="The Relief"
                    subtitle="Panel 07"
                    imageSrc="/scenario3/scenario_3_panel_8.png"
                    imageAlt="Dave back at his desk, relaxing"
                    variant="full-bleed"
                    text={<p>The blue light is no longer hash. A small, almost disbelieving smile forms. He wasn't replaced. He was released. For the first time in weeks, he's ahead of the clock.</p>}
                />

                <CinematicPanel
                    title="The Exit"
                    subtitle="Panel 08"
                    imageSrc="/scenario3/scenario_3_panel_9.png"
                    imageAlt="Dave stepping out into the rain-slick night"
                    variant="split-left"
                    text={<p>The lobby doors open and Dave steps out into the rain-slick night. He adjusts his jacket, breath visible in the cool air. Above him, one floor still glows electric blue — steady, tireless. He doesn't look back.</p>}
                />

                <CinematicPanel
                    title="The Reunion"
                    subtitle="Panel 09"
                    imageSrc="/scenario3/scenario_3_panel_10.png"
                    imageAlt="Woman standing beneath a dark umbrella"
                    variant="split-right"
                    text={<p>From Dave's perspective, we see her first. She stands beneath a dark umbrella, city lights shimmering. He approaches slowly. The night feels open. He's home before the rain stops.</p>}
                />

                {/* Grand Finale Panel */}
                <section className="relative w-full h-screen flex items-end">
                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/scenario3/scenario_3_panel_11.png"
                            alt="Walking side by side down rain-soaked street"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="relative z-20 w-full px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-center text-center">
                        <FadeIn className="max-w-4xl space-y-8">
                            <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-blue-400 mb-4 uppercase">
                                Panel 10 — The Walk
                            </span>
                            <h2 className="font-oswald text-4xl md:text-6xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9]">
                                We don't steal your job.<br />We steal your overtime.
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/80 font-sans font-light italic">
                                They walk side by side down the rain-soaked street. The city continues behind them, but it no longer owns him.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                <CinematicFooter />
            </main>
        </FadeIn>
    );
}
