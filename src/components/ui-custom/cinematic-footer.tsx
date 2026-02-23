"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function CinematicFooter() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Scenario 01", href: "/scenario-1" },
        { name: "Scenario 02", href: "/scenario-2" },
    ];

    return (
        <footer className="w-full bg-background border-t border-border/10 py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="font-oswald text-2xl tracking-tighter uppercase text-white">
                        END OF DAY
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-sans">
                        Cinematic Experience
                    </span>
                </div>

                <nav className="flex items-center gap-6 md:gap-12">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "font-oswald text-sm md:text-base uppercase tracking-widest transition-all duration-300",
                                    isActive
                                        ? "text-white scale-105 pointer-events-none"
                                        : "text-white/40 hover:text-white hover:tracking-[0.2em]"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="text-right hidden md:block">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
                        &copy; 2024 End of Day. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
