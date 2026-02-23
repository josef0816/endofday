import Image from "next/image";
import { FadeIn } from "./fade-in";
import { cn } from "@/lib/utils";
import React from "react";

interface CinematicPanelProps {
    title: string;
    subtitle?: string;
    text?: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    variant?: "hero-bleed" | "full-bleed" | "split-left" | "split-right";
    priority?: boolean;
}

export function CinematicPanel({
    title,
    subtitle,
    text,
    imageSrc,
    imageAlt,
    variant = "split-left",
    priority = false,
}: CinematicPanelProps) {
    // Variant 1: Hero Bleed (100vh overarching scene)
    if (variant === "hero-bleed") {
        return (
            <section className="relative w-full h-[85vh] md:h-screen flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={priority}
                    />
                    {/* Moody Bottom Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <FadeIn className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
                    {subtitle && (
                        <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-muted-foreground mb-4 uppercase">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="font-oswald text-5xl md:text-8xl xl:text-[9rem] leading-[0.85] text-white uppercase tracking-tight">
                        {title}
                    </h2>
                    {text && (
                        <div className="mt-8 text-foreground/80 md:text-lg max-w-2xl font-sans font-light">
                            {text}
                        </div>
                    )}
                </FadeIn>
            </section>
        );
    }

    // Variant 2: Full Bleed (Cinematic Wide Frame)
    if (variant === "full-bleed") {
        return (
            <section className="w-full flex flex-col py-0">
                <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={priority}
                    />
                </div>
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-5">
                        {subtitle && (
                            <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-muted-foreground mb-2 uppercase">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="font-oswald text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
                            {title}
                        </h2>
                    </div>
                    {text && (
                        <div className="md:col-span-7 md:pl-12 text-foreground/80 font-sans font-light md:text-lg">
                            {text}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    // Variant 3 & 4: Split Asymmetric Left/Right (60/40 ratio)
    const isImageLeft = variant === "split-left";

    return (
        <section className="w-full flex flex-col md:flex-row min-h-[60vh] md:min-h-[80vh]">
            {/* Image Block: Exactly to the edge, takes 60% on desktop */}
            <div
                className={cn(
                    "relative w-full md:w-[60%] lg:w-[65%] min-h-[40vh] md:min-h-full",
                    isImageLeft ? "order-1" : "order-1 md:order-2"
                )}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority={priority}
                />
            </div>

            {/* Text Block: 40% on desktop */}
            <div
                className={cn(
                    "w-full md:w-[40%] lg:w-[35%] flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-background",
                    isImageLeft ? "order-2" : "order-2 md:order-1"
                )}
            >
                <FadeIn>
                    {subtitle && (
                        <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-muted-foreground mb-4 uppercase">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.9] mb-8">
                        {title}
                    </h2>
                    {text && (
                        <div className="text-foreground/80 font-sans font-light leading-relaxed prose prose-invert">
                            {text}
                        </div>
                    )}
                </FadeIn>
            </div>
        </section>
    );
}
