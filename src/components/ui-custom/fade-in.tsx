"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    transition?: any;
    className?: string;
    noY?: boolean;
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    transition,
    className,
    noY = false
}: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: noY ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition || {
                duration: duration,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: delay,
            }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    );
}
