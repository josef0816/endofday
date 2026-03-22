"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MediaModal } from "./MediaModal";

interface WorkItem {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    galleryImages?: string[];
    aspectRatio?: string;
}

interface WorkGridProps {
    items: WorkItem[];
    title: string;
}

export function WorkGrid({ items, title }: WorkGridProps) {
    const [selectedItem, setSelectedItem] = useState<{ type: "image" | "video"; url: string; urls?: string[]; title: string } | null>(null);

    return (
        <section id="work" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/10 pb-12">
                <h2 className="font-oswald text-5xl md:text-7xl uppercase leading-none tracking-tighter">
                    {title}
                </h2>
                <p className="text-muted-foreground max-w-sm text-sm uppercase tracking-widest">
                    A collection of experiments, concepts, and digital artifacts exploring the boundaries of high-fidelity design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                {items.map((item, index) => (
                    <WorkItemComponent
                        key={item.id}
                        item={item}
                        index={index}
                        onClick={() => setSelectedItem({
                            type: "image",
                            url: item.imageUrl,
                            urls: item.galleryImages || [item.imageUrl],
                            title: item.title
                        })}
                    />
                ))}
            </div>

            <MediaModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                media={selectedItem}
            />
        </section>
    );
}

function WorkItemComponent({ item, index, onClick }: { item: WorkItem; index: number; onClick: () => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`group cursor-pointer ${index % 3 === 1 ? "md:translate-y-12" : index % 3 === 2 ? "md:translate-y-24" : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-border/5 mb-6">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className={`object-cover transition-all duration-700 ease-out ${isHovered ? "scale-105 brightness-110" : "scale-100"
                        }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gallery Indicator */}
                {item.galleryImages && item.galleryImages.length > 1 && (
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.galleryImages.map((_, i) => (
                            <div key={i} className="h-0.5 w-4 bg-white/40 rounded-full" />
                        ))}
                    </div>
                )}

                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium tracking-tight uppercase group-hover:text-white transition-colors">{item.title}</h3>
                    <span className="text-[10px] text-muted-foreground tabular-nums">/{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">
                    {item.category}
                </p>
            </div>
        </motion.div>
    );
}
