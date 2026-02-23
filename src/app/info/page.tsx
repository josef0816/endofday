"use client";

import { FadeIn } from "@/components/ui-custom/fade-in";
import { CinematicFooter } from "@/components/ui-custom/cinematic-footer";
import Link from "next/link";

export default function InfoPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Absolute Back Button */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center pointer-events-none">
                <Link
                    href="/"
                    className="pointer-events-auto font-oswald text-xl md:text-2xl uppercase tracking-widest text-white/70 hover:text-white transition-colors mix-blend-difference"
                >
                    END OF DAY
                </Link>
                <Link
                    href="/"
                    className="pointer-events-auto font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 hover:text-white transition-colors mix-blend-difference"
                >
                    Back to Scenarios
                </Link>
            </div>

            {/* Intro Section */}
            <section className="relative w-full pt-48 pb-24 md:pt-64 md:pb-32 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <FadeIn delay={0.2}>
                        <h1 className="font-oswald text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter text-white mb-12 leading-[0.85]">
                            About the<br />Stories
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full px-6 md:px-12 pb-32">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 lg:col-start-1">
                        <FadeIn delay={0.4} className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="font-oswald text-xl uppercase tracking-[0.2em] text-blue-400">
                                    The Macro: Strategy
                                </h2>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/90">
                                    Scenario 1 stages the AI dilemma as a spectacle in the sky — two commanders given the same $100,000,
                                    but operating from radically different beliefs about power. One spends everything on a single deployable unit,
                                    clinging to the comfort of visible effort and force.
                                </p>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/90">
                                    The other activates a system that multiplies instantly, scaling without strain or depletion.
                                    It’s more than a tactical contrast; it’s a psychological one. The red commander represents the familiar
                                    human instinct to work harder, spend more, and push through. The blue commander represents something
                                    more unsettling — intelligence that scales quietly, efficiently, and exponentially.
                                </p>
                            </div>

                            <div className="pt-12 space-y-6">
                                <h2 className="font-oswald text-xl uppercase tracking-[0.2em] text-blue-400">
                                    The Micro: Agency
                                </h2>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/90">
                                    Scenario 2 brings that abstract fear down to eye level. The battlefield becomes a quiet office.
                                    The commander becomes Dave. The red-versus-blue confrontation becomes a man staring at the blue glow of
                                    his monitor, wondering if the machine across the room is replacing him.
                                </p>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/90">
                                    The swarm was never just a strategy — it was the projection of his fear. And when he finally confronts it,
                                    he discovers the same truth revealed in the sky: the system wasn’t built to take his place. It was built
                                    to remove the friction that kept him trapped in endless overtime.
                                </p>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/90 font-italic text-white">
                                    Together, the two stories connect the macro fear of AI replacing armies with the micro fear of
                                    AI replacing a single worker — and ultimately reframe that fear as leverage rather than loss.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    <aside className="lg:col-span-4 lg:col-start-9 hidden lg:block">
                        <FadeIn delay={0.6} className="sticky top-12 space-y-8 border-l border-border/10 pl-8 h-fit">
                            <div className="space-y-2">
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                                    Status
                                </span>
                                <span className="block font-sans text-sm text-foreground/80">
                                    Active Archive
                                </span>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                                    Format
                                </span>
                                <span className="block font-sans text-sm text-foreground/80">
                                    Cinematic Short Form
                                </span>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                                    Inspiration
                                </span>
                                <span className="block font-sans text-sm text-foreground/80">
                                    The intersection of human agency and machine scale.
                                </span>
                            </div>
                        </FadeIn>
                    </aside>
                </div>
            </section>

            <CinematicFooter />
        </main>
    );
}
