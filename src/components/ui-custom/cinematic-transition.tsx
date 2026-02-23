"use client";

import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicTransitionContextType {
    trigger: () => void;
}

const CinematicTransitionContext = createContext<CinematicTransitionContextType | undefined>(undefined);

interface CinematicTransitionProps {
    children: React.ReactNode;
    videoSrc: string;
    targetUrl: string;
}

export function CinematicTransition({
    children,
    videoSrc,
    targetUrl,
}: CinematicTransitionProps) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();

    const trigger = () => {
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (isTransitioning && videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.error("Autoplay prevented:", err);
                router.push(targetUrl);
            });
        }
    }, [isTransitioning, router, targetUrl]);

    const handleVideoEnd = () => {
        router.push(targetUrl);
    };

    return (
        <CinematicTransitionContext.Provider value={{ trigger }}>
            {children}

            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-black"
                    >
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover"
                            playsInline
                            autoPlay={false}
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </CinematicTransitionContext.Provider>
    );
}

export function useCinematicTransition() {
    const context = useContext(CinematicTransitionContext);
    if (context === undefined) {
        // Return a dummy if not in context, to prevent crash, though it should be used within
        return { trigger: () => console.warn("useCinematicTransition used outside of Provider") };
    }
    return context;
}
