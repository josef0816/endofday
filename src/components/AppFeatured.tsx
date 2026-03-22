"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";
import { MediaModal } from "./MediaModal";

interface AppProject {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    galleryImages?: string[];
    videoUrl?: string;
    link: string;
    tags: string[];
}

interface AppFeaturedProps {
    projects: AppProject[];
}

export function AppFeatured({ projects }: AppFeaturedProps) {
    const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; url: string; urls?: string[]; title: string } | null>(null);

    return (
        <section className="w-full py-24 md:py-40 bg-zinc-950 border-t border-border/10">
            <div className="px-6 md:px-16 lg:px-24 mb-20 md:mb-32">
                <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block mb-4">Engineering & Build</span>
                <h2 className="font-oswald text-5xl md:text-8xl lg:text-[10rem] uppercase leading-[0.85] tracking-tighter">
                    PERSONAL <br /> APPS
                </h2>
            </div>

            <div className="flex flex-col">
                {projects.map((project, i) => (
                    <AppProjectItem
                        key={project.id}
                        project={project}
                        index={i}
                        onMediaClick={(type, url, title, urls) => setSelectedMedia({ type, url, title, urls })}
                    />
                ))}
            </div>

            <MediaModal
                isOpen={!!selectedMedia}
                onClose={() => setSelectedMedia(null)}
                media={selectedMedia}
            />
        </section>
    );
}

function AppProjectItem({
    project,
    index,
    onMediaClick
}: {
    project: AppProject;
    index: number;
    onMediaClick: (type: "image" | "video", url: string, title: string, urls?: string[]) => void
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={`flex flex-col border-t border-border/5 group transition-colors duration-500`}>
            <div className="flex flex-col md:flex-row items-stretch">
                {/* Meta */}
                <div className="w-full md:w-1/3 p-8 md:p-12 border-r border-border/5 flex flex-col justify-between order-2 md:order-1">
                    <div>
                        <span className="text-[10px] font-mono text-muted-foreground block mb-8">APP_0{index + 1}</span>
                        <h3 className="text-3xl font-oswald uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 border border-border/10 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Gallery Mini Preview */}
                        {project.galleryImages && project.galleryImages.length > 0 && (
                            <div className="mt-8">
                                <span className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-4">Project Gallery</span>
                                <div className="grid grid-cols-4 gap-2">
                                    {project.galleryImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative aspect-square border border-border/10 cursor-alias overflow-hidden hover:border-white transition-colors"
                                            onClick={() => onMediaClick("image", img, project.title, project.galleryImages)}
                                        >
                                            <Image
                                                src={img}
                                                alt="Gallery Image"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Media Display */}
                <div className="w-full md:w-2/3 min-h-[50vh] md:h-auto relative overflow-hidden order-1 md:order-2 bg-black">
                    {project.videoUrl && (
                        <div className="relative w-full h-full min-h-[50vh]">
                            <video
                                ref={videoRef}
                                src={project.videoUrl}
                                className="w-full h-full object-cover"
                                loop
                                muted={!isPlaying}
                                playsInline
                                onClick={togglePlay}
                            />
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'} bg-black/40`}>
                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-black/20 hover:scale-110 transition-transform"
                                >
                                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                                </button>
                            </div>
                            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => onMediaClick("video", project.videoUrl!, project.title)}
                                    className="p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                                >
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}

                    {!project.videoUrl && (
                        <div className="relative w-full h-[70vh]">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-8 right-8 z-20">
                                <button
                                    onClick={() => onMediaClick("image", project.imageUrl, project.title)}
                                    className="p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                                >
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
