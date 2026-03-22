"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    media: {
        type: "image" | "video";
        url: string;
        urls?: string[]; // For multiple images
        title: string;
    } | null;
}

export function MediaModal({ isOpen, onClose, media }: MediaModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setCurrentIndex(0);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!media) return null;

    const urls = media.urls || [media.url];
    const hasMultiple = urls.length > 1;

    const next = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % urls.length);
    };

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + urls.length) % urls.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 md:p-12"
                    onClick={onClose}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-8 right-8 text-white/50 hover:text-white z-[110] p-2 bg-white/5 rounded-full"
                        onClick={onClose}
                    >
                        <X className="w-8 h-8" />
                    </motion.button>

                    {hasMultiple && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-white/30 uppercase tracking-[0.3em]">
                                {currentIndex + 1} / {urls.length}
                            </div>
                        </>
                    )}

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full h-full flex flex-col items-center justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center">
                            {media.type === "image" && urls[currentIndex] ? (
                                <Image
                                    src={urls[currentIndex]}
                                    alt={media.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            ) : media.type === "video" && media.url ? (
                                <video
                                    src={media.url}
                                    className="max-w-full max-h-full"
                                    controls
                                    autoPlay
                                    playsInline
                                />
                            ) : (
                                <div className="text-muted-foreground/50 uppercase tracking-widest text-xs">Media source unavailable</div>
                            )}
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-tighter text-white">
                                {media.title} {hasMultiple && <span className="text-white/20 ml-2">[{currentIndex + 1}]</span>}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mt-2">Fullscreen Interaction</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
