import Image from "next/image";
import { FadeIn } from "./fade-in";
import { cn } from "@/lib/utils";
import React from "react";

interface StoryPanelProps {
    panelNumber: number;
    title: string;
    text: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    variant?: "image-left" | "image-right" | "hero-full";
}

export function StoryPanel({
    panelNumber,
    title,
    text,
    imageSrc,
    imageAlt,
    variant = "image-left",
}: StoryPanelProps) {
    if (variant === "hero-full") {
        return (
            <section className="py-24 md:py-36 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 gap-12">
                <FadeIn className="max-w-prose mx-auto text-center space-y-6">
                    <h2 className="font-playfair text-4xl md:text-5xl text-primary tracking-tight">
                        <span className="text-muted-foreground block text-sm font-sans tracking-widest uppercase mb-4">
                            Panel {panelNumber}
                        </span>
                        {title}
                    </h2>
                    <div className="text-foreground/80 leading-relaxed text-lg font-sans">
                        {text}
                    </div>
                </FadeIn>
                <FadeIn delay={0.2} className="w-full">
                    <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-secondary/50">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover transition-all duration-700 hover:scale-[1.02] hover:brightness-90"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            priority={panelNumber === 1}
                        />
                    </div>
                </FadeIn>
            </section>
        );
    }

    const isImageLeft = variant === "image-left";

    return (
        <section className="py-24 md:py-48 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Block */}
            <FadeIn
                className={cn(
                    "w-full lg:col-span-7",
                    isImageLeft ? "order-1" : "order-1 lg:order-2"
                )}
            >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-secondary/50">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-all duration-700 hover:scale-[1.02] hover:brightness-90"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={panelNumber === 1}
                    />
                </div>
            </FadeIn>

            {/* Text Block */}
            <FadeIn
                delay={0.1}
                className={cn(
                    "w-full lg:col-span-5 max-w-prose mx-auto lg:mx-0",
                    isImageLeft
                        ? "order-2 lg:pl-12"
                        : "order-2 lg:order-1 lg:pr-12"
                )}
            >
                <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-6 tracking-tight">
                    <span className="text-muted-foreground block text-xs font-sans tracking-widest uppercase mb-3">
                        Panel {panelNumber}
                    </span>
                    {title}
                </h2>
                <div className="text-foreground/80 leading-relaxed text-base md:text-lg font-sans space-y-4">
                    {text}
                </div>
            </FadeIn>
        </section>
    );
}
